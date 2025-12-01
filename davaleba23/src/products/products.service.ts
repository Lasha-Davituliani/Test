import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { title } from 'process';

@Injectable()
export class ProductsService {
  products = [
    { id: 1, title: 'Iphone 15', price: 4000, quantity: 1 },
    { id: 2, title: 'Samsung', price: 4500, quantity: 15 },
    { id: 3, title: 'NOKIA', price: 2500, quantity: 10 },
  ];
  create(createProductDto: CreateProductDto) {
    const newProduct = {
      id: this.products.length + 1,
      ...createProductDto,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const findUser = this.products.find((product) => product.id === id);
    if (!findUser) throw new NotFoundException('Product not found');
    return findUser;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    const product = this.findOne(id);
    const updatedProduct = { ...product, ...updateProductDto };
    this.products = this.products.map((p) =>
      p.id === id ? updatedProduct : p,
    );
    return updatedProduct;
  }

  remove(id: number) {
    const product = this.findOne(id);
    this.products = this.products.filter((p) => p.id !== id);
    return product;
  }
}
