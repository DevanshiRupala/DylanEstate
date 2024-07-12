import { HttpStatus } from './http-status.js';

export const jsonReponse = {
  success: (res, data, status = HttpStatus.OK) => {
    return res.status(status).json({ success: true, data });
  },
  error: (
    res,
    message,
    status = HttpStatus.INTERNAL_SERVER_ERROR,
    data = null,
  ) => {
    res.status(status).json({ success: false, message, data });
  },
};
