import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  private users: User[] = [];
  async create(createUserDto: CreateUserDto): Promise<User> {
    const { username, password } = createUserDto;
    const user = new User();
    user.id = undefined;
    user.username = username;
    user.password = password;
    await user.save();
    return user;
  }
}
