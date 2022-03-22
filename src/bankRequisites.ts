const bankRequisites = {
  colombiaNationalServiceData: {
    nationalNetReimbursementFeeBaseAmount: '0',
    countryCodeNationalService: '170',
  },
  acquirerCountryCode: '840',
  acquiringBin: '408999',
  businessApplicationId: 'AA',
  settlementServiceIndicator: '9',
  senderAddress: '901 Metro Center Blvd',
  pointOfServiceData: {
    panEntryMode: '90',
    posConditionCode: '00',
    motoECIIndicator: '0',
  },
  recipientPrimaryAccountNumber: '4957030420210496',
  cardAcceptor: {
    address: {
      country: 'USA',
      zipCode: '94404',
      county: 'San Mateo',
      state: 'CA',
    },
    idCode: 'CA-IDCode-77765',
    name: 'Visa Inc. USA-Foster City',
    terminalId: 'TID-9999',
  },
  senderCity: 'Foster City',
  senderStateCode: 'CA',
  merchantCategoryCode: '6012',
  transactionCurrencyCode: 'USD',
  recipientName: 'rohan',
  senderCountryCode: '124',
  sourceOfFundsCode: '05',
};

export default bankRequisites;
