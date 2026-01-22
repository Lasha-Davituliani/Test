import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({example:'Lasha Davituliani'})
  @IsNotEmpty()
  @IsString()
  fullName: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty({example:'davituliani@yahoo.com'})
  email: string;
  @IsNotEmpty()
  @IsString()
  @Length(6, 20)
  @ApiProperty({example:'password123', minLength:6, maxLength:20})
  password: string;
}
