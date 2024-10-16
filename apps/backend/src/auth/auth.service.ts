import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  registerUser(createUserDto: CreateUserDto) {
    const user = this.userService.findByEmail(createUserDto.email);

    if (user) throw new ConflictException('Email already exists');

    return this.userService.create(createUserDto);
  }
}
