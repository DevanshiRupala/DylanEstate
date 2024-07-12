import express from 'express';
import { ZodRequestValidationMiddleware } from '../middlewares/zod-request.middleware.js';

/**
 * @typedef {import('./rbac').Permission} Permission
 */

/**
 * @typedef {import('express').RequestHandler} RequestHandler
 */

/**
 * @typedef {import('zod').ZodObject<any>} ZodObject

/**
 * @typedef {Object} Route
 * @property {string} path - The route path.
 * @property {'get' | 'post' | 'put' | 'patch' | 'delete'} method - The HTTP method.
 * @property {boolean} auth - Whether the route requires authentication.
 * @property {ZodObject | null} validateBody - The request body validation schema.
 * @property {ZodObject | null} validateQuery - The request query validation schema.
 * @property {ZodObject | null} validateParam - The request param validation schema.
 * @property {Permission | Array<Permission>} permissions - The required permissions for the route.
 * @property {RequestHandler | Array<RequestHandler> | null} middleware - The route middleware(s).
 * @property {RequestHandler} controller - The route controller.
 */

/**
 * Generates an array of Express routers based on a provided routes configuration.
 * Each route can define path, method, authentication, validation, permissions, middleware, and controller.
 *
 * @param {Array<Route>} routes - An array of route configuration objects.
 * @returns {Array<express.Router>} - An array of configured Express routers.
 */
export const generateRoutes = (routes) => {
  return routes.map((route) => {
    const router = express.Router();

    const {
      path = '/',
      method = 'get',
      auth = true,
      validateBody = null,
      validateQuery = null,
      validateParam = null,
      middleware = null,
      controller = null,
    } = route;

    const handlers = [];

    // Other middleware(s)
    if (middleware) {
      handlers.push(...(Array.isArray(middleware) ? middleware : [middleware]));
    }

    // Validate request body
    if (validateBody) {
      handlers.push(ZodRequestValidationMiddleware(validateBody));
    }

    // Validate request query
    if (validateQuery) {
      handlers.push(ZodRequestValidationMiddleware(validateQuery, true, false));
    }

    // Validate request params
    if (validateParam) {
      handlers.push(ZodRequestValidationMiddleware(validateParam, false, true));
    }

    // Handle path with or without leading slash
    const routePath = path.startsWith('/') ? path : `/${path}`;

    // Build the route with handlers and controller
    return router[method](
      routePath,
      ...handlers.filter((fn) => fn !== null && typeof fn === 'function'),
      controller,
    );
  });
};
