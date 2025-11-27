import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { IProducts } from './DTO/products.dto';
import { IHeader } from './DTO/headers.dto';

@Injectable()
export class ProductsService {
  products = [
    { id: 1, name: 'Laptop', category: 'electronic', price: 1200 },
    { id: 2, name: 'Smartphone', category: 'electronic', price: 800 },
    { id: 3, name: 'Tablet', category: 'electronic', price: 600 },
    { id: 4, name: 'Headphones', category: 'accessory', price: 150 },
    { id: 5, name: 'Smartwatch', category: 'accessory', price: 200 },
    { id: 6, name: 'Camera', category: 'electronic', price: 500 },
    { id: 7, name: 'Printer', category: 'electronic', price: 300 },
    { id: 8, name: 'Monitor', category: 'electronic', price: 400 },
    { id: 9, name: 'Keyboard', category: 'accessory', price: 100 },
    { id: 10, name: 'Mouse', category: 'accessory', price: 50 },
  ];
  getAllProducts(query: IProducts) {
    const { id, name, category, price } = query;
    let data = this.products;

    if (id) {
      data = data.filter((product) => product.id === Number(id));
    }
    if (name) {
      data = data.filter((product) => product.name === name);
    }
    if (category) {
      data = data.filter((product) => product.category === category);
    }
    if (price) {
      data = data.filter((product) => product.price === Number(price));
    }
    return data;
  }
  getProductById(id: number) {
    const productById = this.products.find((product) => product.id === id);
    return productById;
  }
  createProduct(body: IProducts, headers: IHeader) {
    if (!headers || headers.password !== 'admin123')
      throw new BadRequestException('invalid credentials');
    const lastId = this.products[this.products.length - 1]?.id || 0;
    const newProduct = {
      id: lastId + 1,
      name: body.name,
      category: body.category,
      price: body.price,
    };
    this.products.push(newProduct);
    return newProduct;
  }
  deleteProduct(id: number, headers: IHeader) {
    if (!headers || headers.password !== 'admin123')
      throw new BadRequestException('invalid credentials');
    const productIndex = this.products.findIndex(
      (product) => product.id === id,
    );
    if (productIndex === -1) {
      throw new NotFoundException('Product not found');
    }
    const deletedProduct = this.products.splice(productIndex, 1);
    return deletedProduct;
  }
  updateProduct(id: number, body: IProducts) {
    const productIndex = this.products.findIndex(
      (product) => product.id === id,
    );
    if (productIndex === -1) {
      throw new NotFoundException('Product not found');
    }
    this.products[productIndex] = { ...this.products[productIndex], ...body };
    return this.products[productIndex];
  }
}
