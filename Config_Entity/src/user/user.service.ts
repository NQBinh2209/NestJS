import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { StatusUser, User } from './user.entity';

@Injectable()
export class UserService {
  async createUser(createUserDTO: CreateUserDTO): Promise<void> {
    const { username, password, status } = createUserDTO;
    const user = new User();
    user.id = undefined;
    user.username = username;
    user.password = password;
    user.status = status;
    await user.save();
  }
  async getUserByID(id: number): Promise<User> {
    const USER = await User.findOne(id);
    return USER;
  }
  async getAllUser(): Promise<User[]> {
    return await User.find();
  }

  async updateStatusUser(id: number, status: StatusUser): Promise<void> {
    const USER = this.getUserByID(id);
    (await USER).status = status;
    (await USER).save();
  }
  async updatePasswordUser(id: number, password: string): Promise<void> {
    const USER = this.getUserByID(id);
    (await USER).password = password;
    (await USER).save();
  }
  async deleteUserById(id: number): Promise<void> {
    await User.delete(id);
  }
}
