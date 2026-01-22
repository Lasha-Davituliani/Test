import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { User } from 'src/decorators/user.decorator';
import { ApiBadRequestResponse, ApiBearerAuth, ApiOkResponse, ApiResponse } from '@nestjs/swagger';

@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @UseGuards(AuthGuard)
  @Post()
  create(@User() userId, @Body() createPostDto: CreatePostDto) {
    return this.postsService.create(userId, createPostDto);
  }

  @ApiResponse({example:[{
    "id": "6971f136a80a625e29e42698",
    "title": "title 1",
    "content": "content 1",
    "userId": "6971efd6a80a625e29e42696",
    "createdAt": "2024-01-24T13:22:30.184Z",
    "updatedAt": "2024-01-24T13:22:30.184Z"
  }]})
  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @ApiResponse({example:{
    "_id": "6968cd93b8ec4f6773e73a1e",
    "title": "L1",
    "content": "comtemt1",
    "user": {
      "_id": "6968cd4bb8ec4f6773e73a1b",
      "fullName": "Lasha",
      "email": "davituliani@yahoo.com",
      "role": "ADMIN",
      "posts": [
        "6968cd93b8ec4f6773e73a1e",
        "6968cd9ab8ec4f6773e73a21",
        "6968cd9fb8ec4f6773e73a24"
      ],
      "createdAt": "2026-01-15T11:19:39.358Z",
      "updatedAt": "2026-01-15T11:21:03.714Z",
      "__v": 0
    },
    "createdAt": "2026-01-15T11:20:51.332Z",
    "updatedAt": "2026-01-15T11:20:51.332Z",
    "__v": 0
  },})
  @ApiBadRequestResponse({example:{
    message:"Invalid post ID",
    error: "Bad Request",
    statusCode:400
  }})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(id);
  }


   @ApiOkResponse({example:{
    "_id": "6968cd93b8ec4f6773e73a1e",
    "title": "updated title",
    "content": "updated content",
    "user": {
      "_id": "6968cd4bb8ec4f6773e73a1b",
      "fullName": "Lasha",
      "email": "davituliani@yahoo.com",
      "role": "USER",
      "posts": [
        "6968cd93b8ec4f6773e73a1e",
        "6968cd9ab8ec4f6773e73a21",
        "6968cd9fb8ec4f6773e73a24"
      ],
      "createdAt": "2026-01-15T11:19:39.358Z",
      "updatedAt": "2026-01-15T11:21:03.714Z",
      "__v": 0
    },
    "createdAt": "2026-01-15T11:20:51.332Z",
    "updatedAt": "2026-01-15T11:20:51.332Z",
    "__v": 0
  },})
  @ApiBadRequestResponse({example:{
    message:"Invalid post ID",
    error: "Bad Request",
    statusCode:400
  }})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postsService.update(id, updatePostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postsService.remove(id);
  }
}
