import { NestMiddleware, BadRequestException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

export class BlockBrowserMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const ua = req.headers['user-agent']?.toLowerCase() || '';

    // detect browsers
    if (
      ua.includes('chrome') ||
      ua.includes('firefox') ||
      ua.includes('safari') ||
      ua.includes('edge')
    ) {
      throw new BadRequestException('Browser access denied!');
    }

    next();
  }
}
