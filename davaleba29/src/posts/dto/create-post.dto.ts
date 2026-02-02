import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreatePostDto {
  @ApiProperty({example:'title 1', minLength:1, maxLength:30})
  @IsNotEmpty()
  @IsString()
  @Length(1, 30)
  title: string;

  @ApiProperty({example:'content 1', minLength:1, maxLength:500})
  @IsNotEmpty()
  @IsString()
  @Length(1, 500)
  content: string;
}
