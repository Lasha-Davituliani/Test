import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { MongooseModule } from '@nestjs/mongoose';
import { postSchema } from './entities/post.entity';
import { PostResolver } from './posts.resolver';

@Module({
  imports:[MongooseModule.forFeature([{name:"post",schema:postSchema}])],
  controllers: [],
  providers: [PostsService, PostResolver],
})
export class PostsModule {}
