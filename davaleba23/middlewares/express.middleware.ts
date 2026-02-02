import { NextFunction, Request, Response } from 'express';

export function ExpressMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const userAgent = req.headers['user-agent']?.toLowerCase() || '';
  console.log(
    `this is ExpressMiddleware and logs information -- \n Request: ${req.method} \n Endpoint: ${req.url} \n User-Agent: ${userAgent}`,
  );
  next();
}
