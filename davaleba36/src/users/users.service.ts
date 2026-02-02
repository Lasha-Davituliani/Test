import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
constructor(@InjectModel("user") private UserModel:Model<User>){}

  create(createUserDto: CreateUserDto) {
    return this.UserModel.create(createUserDto);
  }

  findAll() {
    return this.UserModel.find();
  }

  findOne(id: string) {
    return this.UserModel.findById(id)
  }

  update(id: string,data) {
    return this.UserModel.findByIdAndUpdate(id,data,{new:true});
  }

  remove(id: string) {
    return this.UserModel.findByIdAndDelete(id);
  }
}
