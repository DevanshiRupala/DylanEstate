import { HttpStatus } from './http-status.js';
import { jsonReponse } from './json-response.js';

const createZodFormatData = (data = {}) => {
  return Object.keys(data).map((field) => {
    return {
      field,
      message: data[field],
    };
  });
};

const dataFormatMap = {
  zod: createZodFormatData,
};

export const formError = (res, message, data = {}, dataFormat = 'zod') => {
  return jsonReponse.error(
    res,
    message,
    HttpStatus.BAD_REQUEST,
    dataFormatMap[dataFormat](data),
  );
};
