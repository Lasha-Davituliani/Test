import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { Post } from 'src/posts/schema/post.schema';
import { PostsService } from 'src/posts/posts.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('user') private userModel: Model<User>,
    // @InjectModel('post') private postModel: Model<any>,
    @Inject(forwardRef(() => PostsService))
    private postsService: PostsService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const createUser = await this.userModel.create(createUserDto);
    return createUser;
  }

  findAll() {
    return this.userModel.find().populate('posts');
  }

  async findByEmail(email: string) {
    const findUserByEmail = await this.userModel
      .findOne({ email: email })
      .select('+password');
    return findUserByEmail;
  }

  async findOne(id: string) {
    const findUserById = await this.userModel.findById(id).populate('posts');
    return findUserById;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    if (updateUserDto.password) {
      updateUserDto.password = await bcrypt.hash(updateUserDto.password, 10);
    }
    const updatedUser = await this.userModel.findByIdAndUpdate(
      id,
      updateUserDto,
      { new: true },
    );
    return updatedUser;
  }

  async remove(id: string) {
    const deletedUser = await this.userModel.findByIdAndDelete(id);
    await this.postsService.postByUserId(id);
    // await this.postModel.deleteMany({ user: deletedUser?._id });
    return deletedUser;
  }
  async addPost(postId, userId) {
    const updatedUser = await this.userModel.findByIdAndUpdate(
      userId,
      { $push: { posts: postId } },
      { new: true },
    );
    return updatedUser;
  }
}
