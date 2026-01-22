import { BadRequestException, forwardRef, Inject, Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { isValidObjectId, Model } from 'mongoose';
import { Post } from './schema/post.schema';
import { InjectModel } from '@nestjs/mongoose';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel('post') private postModel: Model<any>,
    @Inject(forwardRef(() => UsersService))
    private usersService: UsersService,
  ) {}
  async create(userId, createPostDto: CreatePostDto) {
    const newPost = await this.postModel.create({
      ...createPostDto,
      user: userId,
    });
    await this.usersService.addPost(newPost._id, userId);
    return newPost;
  }

  findAll() {
    return this.postModel.find().populate('user');
  }

  async findOne(id: string) {
    if(!isValidObjectId(id)){throw new BadRequestException('Invalid post ID');}
    const post = await this.postModel.findById(id);
    if (!post) {
      throw new Error('User not found');
    }
    return post;
  }

  async update(id: string, updatePostDto: UpdatePostDto) {
    const updatedPost = await this.postModel.findByIdAndUpdate(
      id,
      updatePostDto,
      { new: true },
    );
    if (!updatedPost) {
      throw new Error('User not found');
    }
    return updatedPost;
  }

  async remove(id: string) {
    const deletedPost = await this.postModel.findByIdAndDelete(id);
    if (!deletedPost) {
      throw new Error('User not found');
    }
    return deletedPost;
  }

  async postByUserId(id) {
    await this.postModel.deleteMany({ user: id });
  }
}
