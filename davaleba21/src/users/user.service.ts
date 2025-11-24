import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { retry } from 'rxjs';
import { UserDto } from './DTO/create.dto';

@Injectable()
export class UserService {
  users = [
    { id: 1, name: 'Luka', age: 22 },
    { id: 2, name: 'Ana', age: 25 },
    { id: 3, name: 'Giorgi', age: 30 },
  ];

  getUsers() {
    return this.users;
  }
  getUserById(id: number) {
    let user = this.users.find((user) => user.id === Number(id));
    if (!user) throw new HttpException('user not found', HttpStatus.NOT_FOUND);
    return user;
  }
  createUser(body: UserDto) {
    let lastId = this.users[this.users.length - 1]?.id || 0;
    let newUser = { id: lastId + 1, name: body.name, age: body.age };
    this.users.push(newUser);
    return newUser;
  }
  deleteUser(id: number) {
    let userIndex = this.users.findIndex((user) => user.id === Number(id));
    if (userIndex === -1)
      throw new HttpException('user not found', HttpStatus.NOT_FOUND);
    const deletedUser = this.users[userIndex];
    this.users.splice(userIndex, 1);
    return { message: 'user deleted successfully', data: deletedUser };
  }
  updateUser(id: number, body: UserDto) {
    let userIndex = this.users.findIndex((user) => user.id === Number(id));
    if (userIndex === -1)
      throw new HttpException('user not found', HttpStatus.NOT_FOUND);
    this.users[userIndex] = { id: Number(id), name: body.name, age: body.age };
    return this.users[userIndex];
  }
}
