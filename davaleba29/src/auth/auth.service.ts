import { BadGatewayException, Injectable } from '@nestjs/common';
import { SignUpDto } from './DTO/sign-up.dto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { SignInDto } from './DTO/sign-in.dto';
import { JwtService } from '@nestjs/jwt';
import { rootCertificates } from 'tls';
import e from 'express';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}
  async signUp(signUp: SignUpDto) {
    const userExists = await this.usersService.findByEmail(signUp.email);
    if (userExists) throw new BadGatewayException('User already exists');
    const hashedPassword = await bcrypt.hash(signUp.password, 10);
    await this.usersService.create({
      ...signUp,
      password: hashedPassword,
    });
    return 'User successfully created';
  }

  async signIn(signIn: SignInDto) {
    const exsistingUser = await this.usersService.findByEmail(signIn.email);
    if (!exsistingUser)
      throw new BadGatewayException('Invalid credentials provided');
    const passwordMatches = await bcrypt.compare(
      signIn.password,
      exsistingUser.password,
    );
    if (!passwordMatches)
      throw new BadGatewayException('Invalid credentials provided');

    const payload = {
      userId: exsistingUser._id,
      role: exsistingUser.role,
    };
    const token = this.jwtService.sign(payload, { expiresIn: '1h' });
    return { token };
  }
  async currentUser(userId: string) {
    const user = await this.usersService.findOne(userId);
    return user;
  }
}
