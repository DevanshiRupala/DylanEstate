import { HttpStatus } from '../lib/http-status.js';
import { jsonReponse } from '../lib/json-response.js';

/**
 * Middleware to validate the request body using Zod schema.
 *
 * @example
 *
 * ```javascript
 * import { z } from 'zod';
 * import { Router } from 'express';
 * import { ZodRequestValidationMiddleware } from './zod-request.middleware.js';
 *
 * const router = Router();
 *
 * // Zod Schema
 * const userLoginRequest = z.object({
 *   username: z.string().min(3).max(20),
 *   password: z.string().min(8).max(100),
 * });
 *
 * router.post('/login', ZodRequestValidationMiddleware(userLoginRequest), (req, res) => {
 *  // Request body is validated.
 *  // Continue with the request handler.
 * }
 *
 * export const userRoutes = router;
 *
 * ```
 *
 * @param {*} zSchema - Zod schema
 * @param {boolean} parseQuery - Parse request query instead of request body
 * @param {boolean} parseParams - Parse request params instead of request body
 */
export const ZodRequestValidationMiddleware =
  (zSchema, parseQuery = false, parseParams = false) =>
  async (req, res, next) => {
    try {
      const inputMap = {
        query: req.query,
        body: req.body,
        params: req.params,
      };

      const result = await zSchema.safeParseAsync(
        inputMap[parseQuery ? 'query' : parseParams ? 'params' : 'body'],
      );

      if (!result.success) {
        const formattedErrors = result.error.issues.map((issue) => ({
          field: issue.path[0],
          message: issue.message,
        }));

        return jsonReponse.error(
          res,
          'Invalid payload. Please check the request body.',
          HttpStatus.BAD_REQUEST,
          formattedErrors,
        );
      }

      next();
    } catch (e) {
      return jsonReponse.error(
        res,
        e.message,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  };
