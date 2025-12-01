import { NextFunction, Request, Response } from 'express';

export function ExpressMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  console.log('I can only log something, because I am an express middleware!');
  next();
}
