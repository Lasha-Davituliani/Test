import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { UserAgentMiddleware } from 'middlewares/userAgent.middleware';
import { HasTokenMiddleware } from 'middlewares/hasTokenMiddleware';
import { roleMiddleware } from 'middlewares/roleMiddleware';
import path from 'path';
import { BlockBrowserMiddleware } from 'middlewares/blockBrowser.middleware';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(BlockBrowserMiddleware)
      .forRoutes({ path: 'products', method: RequestMethod.ALL });

    consumer
      .apply(HasTokenMiddleware)
      .forRoutes({ path: 'products', method: RequestMethod.POST });
    consumer
      .apply(roleMiddleware)
      .exclude({ path: 'products', method: RequestMethod.GET })
      .forRoutes(
        { path: 'products/:id', method: RequestMethod.ALL },
        { path: 'products', method: RequestMethod.ALL },
      );
  }
}
