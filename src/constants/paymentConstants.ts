import 'dotenv/config';
import fs from 'fs';
import path from 'path';

const { VISA_HOST_NAME } = process.env;
const VISA_HOST = `https://${VISA_HOST_NAME}`;
const VISA_FUNDS_TRANSFER = `${VISA_HOST}/visadirect/fundstransfer/v1`;

export const URL = {
  VALIDATION: `${VISA_HOST}/pav/v1/cardvalidation`,
  PULL_FUNDS: `${VISA_FUNDS_TRANSFER}/pullfundstransactions`,
  PUSH_FUNDS: `${VISA_FUNDS_TRANSFER}/pushfundstransactions`,
};

const { VISA_ID, VISA_PASS } = process.env;
const KEY = path.join(__dirname, '../../cert', '/private.pem');
const CERT = path.join(__dirname, '../../cert', '/cert.pem');

export const OPTIONS_COMMON_VALUES = {
  hostname: VISA_HOST_NAME,
  port: 443,
  method: 'POST',
  key: fs.readFileSync(KEY),
  cert: fs.readFileSync(CERT),
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: 'Basic ' + Buffer.from(`${VISA_ID}:${VISA_PASS}`).toString('base64'),
  },
};
