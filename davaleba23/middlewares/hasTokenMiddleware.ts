import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
export class HasTokenMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers['authorization'];
    if (!token || token !== '1234') {
      return res
        .status(403)
        .json({ message: 'Forbidden: Invalid or missing token' });
    }
    next();
  }
}
