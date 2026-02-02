import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class SignUpDto {
  @ApiProperty({example:'Lasha Davituliani'})
  @IsNotEmpty()
  @IsString()
  fullName: string;
  @ApiProperty({example:'Lasha@mail.com'})
  @IsNotEmpty()
  @IsString()
  email: string;
  @ApiProperty({example:'password123', minLength:6, maxLength:20})
  @IsNotEmpty()
  @IsString()
  @Length(6, 20)
  password: string;
}
