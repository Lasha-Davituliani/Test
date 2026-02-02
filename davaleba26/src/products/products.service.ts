import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './schema/product.schema';
import { Model } from 'mongoose';
import { faker } from '@faker-js/faker';
import { QueryDTO } from './dto/query.dto';

@Injectable()
export class ProductsService implements OnModuleInit {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}
  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  async onModuleInit() {
    const count = await this.productModel.countDocuments();
    if (count === 0) {
      const productList: CreateProductDto[] = [];
      for (let i = 0; i < 1000; i++) {
        const products = {
          name: faker.commerce.productName(),
          description: faker.commerce.productDescription(),
          price: parseFloat(faker.commerce.price()),
          imageUrl: faker.image.url(),
          quantity: faker.number.int({ min: 1, max: 100 }),
        };
        productList.push(products);
      }
      console.log(productList);
      console.log(productList.length);
      await this.productModel.insertMany(productList);
      console.log('products seeded successfully');
    }
  }
  findAll({ page, take }: QueryDTO) {
    return this.productModel
      .find()
      .skip((page - 1) * take)
      .limit(take > 30 ? 30 : take);
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  deleteAll(): any {
    return this.productModel.deleteMany();
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
