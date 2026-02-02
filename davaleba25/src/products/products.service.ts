import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { isValidObjectId, Model } from 'mongoose';
import { Product } from './schema/product.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}
  async create(createProductDto: CreateProductDto) {
    const createdProduct = await new this.productModel(createProductDto);
    return createdProduct.save();
  }

  findAll() {
    return this.productModel.find();
  }

  async findOne(id: string) {
    if (!isValidObjectId(id)) throw new BadRequestException('invalid mongo id');
    const findProductById = await this.productModel.findById(id);
    if (!findProductById) throw new NotFoundException('not found');
    return findProductById;
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    if (!isValidObjectId(id)) throw new BadRequestException('invalid mongo id');
    const updatedProduct = await this.productModel.findByIdAndUpdate(
      id,
      updateProductDto,
      { new: true },
    );
    if (!updatedProduct) throw new NotFoundException('not found');
    return updatedProduct;
  }

  async remove(id: string) {
    if (!isValidObjectId(id)) throw new BadRequestException('invalid mongo id');
    const deleteProduct = await this.productModel.findByIdAndDelete(id);
    if (!deleteProduct) throw new NotFoundException('not found');
    return deleteProduct;
  }
}
