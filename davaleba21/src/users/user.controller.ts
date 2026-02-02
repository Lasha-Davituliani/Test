import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { agent } from 'supertest';
import { UserDto } from './DTO/create.dto';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  getAllUsers() {
    return this.userService.getUsers();
  }
  @Get('/:id')
  getUserById(@Param() params) {
    let id = params.id;
    return this.userService.getUserById(params.id);
  }
  @Post()
  createUser(@Body() body: UserDto) {
    return this.userService.createUser(body);
  }
  @Delete('/:id')
  deleteUser(@Param() params) {
    return this.userService.deleteUser(params.id);
  }
  @Put('/:id')
  updateUser(@Param() params, @Body() body: UserDto) {
    return this.userService.updateUser(params.id, body);
  }
}
