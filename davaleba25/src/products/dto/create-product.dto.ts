import { IsNotEmpty, IsNumber, IsString, Length } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  @Length(2, 30)
  name: string;

  @IsNotEmpty()
  @IsString()
  @Length(5, 500)
  description: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;
}
