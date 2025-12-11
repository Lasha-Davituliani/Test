import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';

@Injectable()
export class PostsService {
  constructor(@InjectModel('post') private postModel: Model<any>) {}

  async create(userId: string, createPostDto: CreatePostDto) {
    const newPost = await this.postModel.create({
      ...createPostDto,
      user: userId,
    });
    return newPost;
  }

  findAll() {
    return this.postModel.find();
  }

  async findOne(id: string) {
    if (!isValidObjectId(id)) throw new BadRequestException('invalid mongo id');
    const findPostById = await this.postModel.findById(id).populate('user');
    if (!findPostById) throw new NotFoundException('not found');
    return findPostById;
  }

  async update(id: string, updatePostDto: UpdatePostDto) {
    if (!isValidObjectId(id)) throw new BadRequestException('invalid mongo id');
    const updatedPost = await this.postModel.findByIdAndUpdate(
      id,
      updatePostDto,
      { new: true },
    );
    if (!updatedPost) throw new NotFoundException('not found');
    return updatedPost;
  }

  async remove(id: string) {
    if (!isValidObjectId(id)) throw new BadRequestException('invalid mongo id');
    const deletePost = await this.postModel.findByIdAndDelete(id);
    if (!deletePost) throw new NotFoundException('not found');
    return deletePost;
  }
}
