import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './DTO/sign-up.dto';
import { SignInDto } from './DTO/sign-in.dto';
import { AuthGuard } from './guards/auth.guard';
import { User } from 'src/decorators/user.decorator';
import { ApiBadRequestResponse, ApiBearerAuth, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { error } from 'console';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @ApiCreatedResponse({example:"User successfully registered"})
  @ApiBadRequestResponse({example:{
    message:"Email already in use",
    error: "Bad Request",
    statusCode:400
  }})
  @Post('sign-up')
  signUp(@Body() signUpDto: SignUpDto) {
    return this.authService.signUp(signUpDto);
  }
  @ApiOkResponse({example:{"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2OTcxZWZlMGE4MGE2MjVlMjllNDI2OTYiLCJyb2xlIjoiVVNFUiIsImlhdCI6MTc2OTA3NTYwNiwiZXhwIjoxNzY5MDc5MjA2fQ.WcCmw7W3YjG0_Nc48eV3cRkSUzLOSMVT5IFh4_J52pk"}})
  @ApiBadRequestResponse({example:{
    message:"Invalid email or password",
    error: "Bad Request",
    statusCode:400
  }})
  @Post('sign-in')
  signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto);
  }


  @ApiBearerAuth()
  @ApiOkResponse({example:{
    "id": "6971efd6a80a625e29e42696",
    "email": "lasha@mail.com",
    "role": "USER",
    "createdAt": "2024-01-24T13:16:38.719Z",
    "updatedAt": "2024-01-24T13:16:38.719Z"
  }})
  @ApiBadRequestResponse({example:{
    message:"Invalid token",
    error: "Bad Request",
    statusCode:400
  }})

  @UseGuards(AuthGuard)
  @Get('current-user')
  currentUser(@User() userId) {
    const user = this.authService.currentUser(userId);
    return user;
  }
}
