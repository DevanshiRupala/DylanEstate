/**
 * HTTP status codes and their corresponding numeric values.
 */
export const HttpStatus = {
  /**
   * The request has succeeded.
   */
  OK: 200,

  /**
   * The request has been fulfilled and a new resource has been created.
   */
  CREATED: 201,

  /**
   * The request has been accepted for processing, but the processing has not been completed.
   */
  ACCEPTED: 202,

  /**
   * The server has successfully fulfilled the request and there is no additional content to send in the response payload body.
   */
  NO_CONTENT: 204,

  /**
   * The server has fulfilled the partial GET request for the resource.
   */
  PARTIAL_CONTENT: 206,

  /**
   * The requested resource has been permanently moved to a new URL.
   */
  MOVED_PERMANENTLY: 301,

  /**
   * The requested resource has been temporarily moved to a new URL.
   */
  FOUND: 302,

  /**
   * The requested resource has not been modified since the last time it was requested.
   */
  NOT_MODIFIED: 304,

  /**
   * The requested resource resides temporarily under a different URL.
   */
  TEMPORARY_REDIRECT: 307,

  /**
   * The requested resource has been permanently moved to a different URL.
   */
  PERMANENT_REDIRECT: 308,

  /**
   * The server cannot process the request because it is malformed or otherwise incorrect.
   */
  BAD_REQUEST: 400,

  /**
   * The request requires user authentication.
   */
  UNAUTHORIZED: 401,

  /**
   * The payment is required to access the requested resource.
   */
  PAYMENT_REQUIRED: 402,

  /**
   * The server understood the request, but refuses to authorize it.
   */
  FORBIDDEN: 403,

  /**
   * The requested resource could not be found.
   */
  NOT_FOUND: 404,

  /**
   * The method specified in the request is not allowed for the resource.
   */
  METHOD_NOT_ALLOWED: 405,

  /**
   * The request could not be completed due to a conflict with the current state of the resource.
   */
  CONFLICT: 409,

  /**
   * The requested resource is no longer available and will not be available again.
   */
  GONE: 410,

  /**
   * The server requires the request to be conditional.
   */
  LENGTH_REQUIRED: 411,

  /**
   * The server is refusing to process a request because the request payload is too large.
   */
  PAYLOAD_TOO_LARGE: 413,

  /**
   * The server is refusing to service the request because the request-target is longer than the server is willing to interpret.
   */
  URI_TOO_LONG: 414,

  /**
   * The server is refusing to service the request because the entity of the request is in a format not supported by the requested resource for the requested method.
   */
  UNSUPPORTED_MEDIA_TYPE: 415,

  /**
   * The server cannot provide the requested range.
   */
  RANGE_NOT_SATISFIABLE: 416,

  /**
   * The expectation given in the request's Expect header field could not be met by at least one of the inbound servers.
   */
  EXPECTATION_FAILED: 417,

  /**
   * I'm a teapot.
   */
  IM_A_TEAPOT: 418,

  /**
   * The server understands the content type of the request entity, and the syntax of the request entity is correct, but it was unable to process the contained instructions.
   */
  UNPROCESSABLE_ENTITY: 422,

  /**
   * The user has sent too many requests in a given amount of time.
   */
  TOO_MANY_REQUESTS: 429,

  /**
   * The server encountered an unexpected condition that prevented it from fulfilling the request.
   */
  INTERNAL_SERVER_ERROR: 500,

  /**
   * The server does not support the functionality required to fulfill the request.
   */
  NOT_IMPLEMENTED: 501,

  /**
   * The server, while acting as a gateway or proxy, received an invalid response from an inbound server it accessed while attempting to fulfill the request.
   */
  BAD_GATEWAY: 502,

  /**
   * The server is currently unable to handle the request due to a temporary overload or scheduled maintenance, which will likely be alleviated after some delay.
   */
  SERVICE_UNAVAILABLE: 503,
};
