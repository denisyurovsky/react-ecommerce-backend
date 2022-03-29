import https from 'https';

import type * as express from 'express';
import _ from 'lodash';
import request, { Response, CoreOptions, RequiredUriUrl } from 'request';

import bankRequisites from '../bankRequisites';
import { OPTIONS_COMMON_VALUES, URL } from '../constants/paymentConstants';
import data from '../data/data';
import orders from '../data/orders';
import paymentCards from '../data/paymentCards';
import findUserAndOrder from '../helpers/findUserAndOrder';
import getRetrievalReferenceNumber from '../helpers/getRetrievalReferenceNumber';

interface Payload {
  [name: string]: string | object | number;
}

export const increaseExpenses = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const { paymentAmount } = req.body;
  const { user } = res.locals;

  user.spentCash += paymentAmount;

  return next();
};

export const payment = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void => {
  const {
    cardNumber,
    expDate,
    cvv,
    cardHolder,
    createdAt,
    updatedAt,
    paymentAmount,
    userId,
    orderId,
  } = req.body;

  const [expMonth, expYear] = expDate.split('/');
  const cardExpDate = `20${expYear}-${expMonth}`;
  const traceAuditNumber = _.random(100000, 999999);
  const retrievalReferenceNumber = getRetrievalReferenceNumber(traceAuditNumber);

  // ======= VALIDATION =======

  const validationPayload = {
    cardCvv2Value: cvv,
    primaryAccountNumber: cardNumber,
    cardExpiryDate: cardExpDate,
    addressVerificationResults: {
      street: '801 Metro Center Blv',
      postalCode: '94404',
    },
  };

  const validationOptions: RequiredUriUrl & CoreOptions = {
    ...OPTIONS_COMMON_VALUES,
    uri: URL.VALIDATION,
    json: validationPayload,
  };

  validationOptions.agent = new https.Agent(validationOptions);

  const checkValidation = () => {
    return new Promise<Response>((resolve, reject) => {
      request.post(validationOptions, (err: any, res: Response) => {
        if (err) return reject(err);
        if (res.body.errorMessage) return reject(res);

        return resolve(res);
      });
    });
  };

  // ====== PULL FUNDS ======

  const payloadPullFunds: Payload = {
    amount: paymentAmount,
    localTransactionDateTime: createdAt,
    systemsTraceAuditNumber: traceAuditNumber,
    cardCvv2Value: cvv,
    cardAcceptor: {
      address: {
        country: 'USA',
        zipCode: '94404',
        county: '081',
        state: 'CA',
      },
      idCode: '111111',
      name: 'ABC Corp',
      terminalId: '12345678',
    },
    colombiaNationalServiceData: {
      nationalNetReimbursementFeeBaseAmount: '0',
      countryCodeNationalService: '170',
    },
    acquirerCountryCode: '840',
    acquiringBin: '408999',
    businessApplicationId: 'AA',
    settlementServiceIndicator: '9',
    senderCurrencyCode: 'USD',
    retrievalReferenceNumber: retrievalReferenceNumber,
    senderPrimaryAccountNumber: cardNumber,
    visaMerchantIdentifier: '73625198',
    senderCardExpiryDate: cardExpDate,
  };

  const pullFundsOptions: RequiredUriUrl & CoreOptions = {
    ...OPTIONS_COMMON_VALUES,
    uri: URL.PULL_FUNDS,
    json: payloadPullFunds,
  };

  pullFundsOptions.agent = new https.Agent(pullFundsOptions);

  const addCardToDb = () => {
    const hasIdenticalCards = paymentCards.some(
      (card) => card.userId === userId && card.cardNumber === cardNumber
    );

    !hasIdenticalCards &&
      paymentCards.push({
        id: paymentCards.length + 1,
        userId,
        cardNumber,
        cardHolder,
        expirationDate: new Date(cardExpDate),
        createdAt,
        updatedAt,
      });
  };

  const pullFunds = () => {
    return new Promise<Response>((resolve, reject) => {
      request.post(pullFundsOptions, (err: any, res: Response) => {
        if (err) return reject(err);
        if (res.body.errorMessage) return reject(res);
        const orderIdx = orders.findIndex(({ id }) => id === orderId);

        if (orderIdx >= 0) {
          orders[orderIdx].status = 2;
          orders[orderIdx].updatedAt = updatedAt;
        }
        userId && addCardToDb();

        return resolve(res);
      });
    });
  };

  // ====== PUSH FUNDS ======

  const payloadPushFunds: Payload = {
    ...bankRequisites,
    amount: paymentAmount,
    localTransactionDateTime: createdAt,
    retrievalReferenceNumber: retrievalReferenceNumber,
    systemsTraceAuditNumber: traceAuditNumber,
    senderAccountNumber: cardNumber,
  };

  if (cardHolder) {
    payloadPushFunds.senderName = cardHolder;
  }

  const pushFundsOptions: RequiredUriUrl & CoreOptions = {
    ...OPTIONS_COMMON_VALUES,
    uri: URL.PUSH_FUNDS,
    json: payloadPushFunds,
  };

  pushFundsOptions.agent = new https.Agent(pullFundsOptions);

  const pushFunds = () => {
    return new Promise<Response>((resolve, reject) => {
      request.post(pushFundsOptions, (err: any, res: Response) => {
        if (err) return reject(err);
        if (res.body.errorMessage) return reject(res);

        return resolve(res);
      });
    });
  };

  // ====== TRANSACTION ======

  const makeTransaction = async () => {
    try {
      const { statusCode, body } = await checkValidation();

      console.log(`Status validation: ${statusCode}`);
      console.log(body);

      if (body.approvalCode) {
        try {
          const pullFundsResult = await pullFunds();

          payloadPushFunds.transactionIdentifier = pullFundsResult.body.transactionIdentifier;

          const pushFundsResult = await pushFunds();

          console.log(`Status pullFunds: ${pullFundsResult.statusCode}`);
          console.log(pullFundsResult.body);
          console.log(`Status pushFunds: ${pushFundsResult.statusCode}`);
          console.log(pushFundsResult.body);

          res.json(pullFundsResult.body);

          return next();
        } catch ({ statusCode, body }) {
          console.error('Transaction error: ', body.errorMessage);

          return res.status(statusCode).json(body);
        }
      }
      statusCode === 200
        ? res.status(404).json({ message: 'Incorrect card data', ...body })
        : res.status(statusCode).json(body);
    } catch ({ statusCode, body }) {
      console.error(`Validation error: ${statusCode}`);
      console.error('Message: ', body.errorMessage);

      return res.status(statusCode).json(body);
    }
  };

  makeTransaction();
};
