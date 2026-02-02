import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(@InjectModel("post") private PostModel:Model<Post>){}
  create(data) {
    return this.PostModel.create(data);
  }

  findAll() {
    return this.PostModel.find();
  }

  findOne(id: string) {
    return this.PostModel.findById(id);
  }

  update(id: string, data) {
    return this.PostModel.findByIdAndUpdate(id,data,{new:true}).lean();
  }

  remove(id: string) {
    return this.PostModel.findByIdAndDelete(id);
  }
}
