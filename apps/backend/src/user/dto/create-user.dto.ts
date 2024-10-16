import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  firstname: string;

  @IsString()
  lastname: string;

  @IsEmail()
  @IsString()
  email: string;

  @IsString()
  password: string;
}
