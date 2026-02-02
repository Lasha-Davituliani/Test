import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Headers,
  Post,
  Query,
  Delete,
  Put,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { get } from 'http';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getAllProducts(@Query() query) {
    console.log(query);
    return this.productsService.getAllProducts(query);
  }
  @Get(':id')
  getProductById(@Param('id', ParseIntPipe) id) {
    return this.productsService.getProductById(id);
  }
  @Post()
  createProduct(@Body() body, @Headers() headers) {
    return this.productsService.createProduct(body, headers);
  }
  @Delete(':id')
  deleteProduct(@Param('id', ParseIntPipe) id, @Headers() headers) {
    return this.productsService.deleteProduct(id, headers);
  }
  @Put(':id')
  updateProduct(@Param('id', ParseIntPipe) id, @Body() body) {
    return this.productsService.updateProduct(id, body);
  }
}
