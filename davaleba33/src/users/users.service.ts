import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { isValidObjectId, Model } from 'mongoose';
import { User } from './entities/user.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel("user") private userModel: Model<User>) {}
 async create(createUserDto: CreateUserDto) {
    const createdUser = await this.userModel.create(createUserDto);
    return createdUser;
  }

  findAll() {
    return this.userModel.find();
  }

 async findOne(id: string) {
  if(!isValidObjectId(id)) throw new BadRequestException('Invalid user ID');
  const user = await this.userModel.findById(id);
  if(!user) throw new BadRequestException('User not found');
    return user;
  }

 async update(id: string, updateUserDto: UpdateUserDto) {
    if(!isValidObjectId(id)) throw new BadRequestException('Invalid user ID');
    const user = await this.userModel.findByIdAndUpdate(id, updateUserDto, {new: true});
    if(!user) throw new BadRequestException('User not found');
    return user;
  }

 async remove(id: string) {
    if(!isValidObjectId(id)) throw new BadRequestException('Invalid user ID');
    const user = await this.userModel.findByIdAndDelete(id);
    if(!user) throw new BadRequestException('User not found');
    return user;
  }
}
