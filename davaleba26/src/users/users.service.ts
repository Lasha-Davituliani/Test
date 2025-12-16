import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { isValidObjectId, Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  async create(createUserDto: CreateUserDto) {
    const existingUser = await this.userModel.findOne({
      email: createUserDto.email,
    });
    if (existingUser)
      throw new BadRequestException('User with this email already exists');
    const createdUser = await new this.userModel(createUserDto);
    return createdUser.save();
  }
  findAll() {
    // return this.userModel
    //   .find({ age: { $eq: 33 } })
    //   .populate({ path: 'posts', select: '-user' });
    return this.userModel
      .find({ firstName: { $regex: /^m/ } })
      .populate({ path: 'posts', select: '-user' });
  }

  async findOne(id: string) {
    if (!isValidObjectId(id)) throw new BadRequestException('invalid mongo id');
    const findUserById = await this.userModel.findById(id).populate('posts');
    if (!findUserById) throw new NotFoundException('not found');
    return findUserById;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    if (!isValidObjectId(id)) throw new BadRequestException('invalid mongo id');
    const updatedUser = await this.userModel.findByIdAndUpdate(
      id,
      updateUserDto,
      { new: true },
    );
    if (!updatedUser) throw new NotFoundException('not found');
    return updatedUser;
  }

  async remove(id: string) {
    if (!isValidObjectId(id)) throw new BadRequestException('invalid mongo id');
    const deleteUser = await this.userModel.findByIdAndDelete(id);
    if (!deleteUser) throw new NotFoundException('not found');
    return deleteUser;
  }

  async addPostToUser(userId: string, postId: string) {
    const updatedUser = await this.userModel.findByIdAndUpdate(
      userId,
      { $push: { posts: postId } },
      { new: true },
    );
    if (!updatedUser) throw new NotFoundException('User not found');
    return updatedUser;
  }
}
