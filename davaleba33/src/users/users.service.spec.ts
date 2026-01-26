import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { Model } from 'mongoose';
import { User } from './entities/user.entity';
import { getModelToken } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';

describe('UsersService', () => {
  let userService: UsersService;
  let userModel: Model<User>;
const mockUserModel = {
  findById: jest.fn(),
  findByIdAndUpdate: jest.fn(),
  findByIdAndDelete: jest.fn(),
  create: jest.fn(),
  find: jest.fn(),
  
}
const mockUser = {
  _id: '6976737bdda404f2c6d42367',
  name: 'giorgi',
  email: 'giorgi@gmail.com',
  age: 37,
  
};
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService,{
         provide: getModelToken("user"),
          useValue: mockUserModel }],

    }).compile();

    userService = module.get<UsersService>(UsersService);
    userModel = module.get<Model<User>>(getModelToken("user"));
  });

  
  describe('findOne', () => {
    it('should return a user by ID', async () => {
      jest.spyOn(userModel, 'findById').mockResolvedValue(mockUser);
       const user = await userService.findOne(mockUser._id);
       expect(user._id).toBe(mockUser._id);
      
    });
  });
  
describe('create', () => {
  it('should create and return a new user', async () => {
    const mockUser = {
      _id: '123',
      name: 'Lasha',
      email: 'lasha@test.com',
      age: 30,
    };

    jest.spyOn(userModel, 'create').mockResolvedValue(mockUser as any);

    const user = await userService.create({
      name: mockUser.name,
      email: mockUser.email,
      age: mockUser.age,
    });

    expect(user._id).toBe(mockUser._id);
    expect(userModel.create).toHaveBeenCalledWith({
      name: mockUser.name,
      email: mockUser.email,
      age: mockUser.age,
    });
  });
});
        
  describe("findByIdAndUpdate", () => {
    it("should update and return the user", async () => {
      const updatedUser = { ...mockUser, name: "updatedName" };
      jest.spyOn(userModel, "findByIdAndUpdate").mockResolvedValue(updatedUser);
      const user = await userService.update(mockUser._id, { name: "updatedName" });
      expect(user.name).toBe("updatedName");
    }); 
  });

  // describe("findByIdAndDelete", () => {
  //   it("should delete and return the user", async () => {
  //     jest.spyOn(userModel, "findByIdAndDelete").mockResolvedValue(mockUser);
  //     const user = await userService.remove(mockUser._id);
  //     expect(user._id).toBe(mockUser._id);
  //   });
  // });

});
