import { BadRequestException, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

export class UserAgentMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const userAgent = req.headers['user-agent']?.toLowerCase() || '';
    console.log('User-Agent:', userAgent);
    if (userAgent.includes('edg')) {
      throw new BadRequestException('permission denied!');
    }

    next();
  }
}
