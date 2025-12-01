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

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(UserAgentMiddleware)
      .forRoutes({ path: 'products', method: RequestMethod.GET });

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
