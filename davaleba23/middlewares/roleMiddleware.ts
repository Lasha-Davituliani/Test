import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

export class roleMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const role = req.headers['role'];
    if (role !== 'Admin') {
      return res.status(403).json({ message: 'Forbidden: Admins only' });
    }
    next();
  }
}
