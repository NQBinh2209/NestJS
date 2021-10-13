import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { StatusUser, User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  getAllUser(): Promise<User[]> {
    return this.userService.getAllUser();
  }
  @Get('/:id')
  getUserById(@Param('id') id: number): Promise<User> {
    return this.userService.getUserByID(id);
  }
  @Post()
  createUser(@Body() createUserDTO: CreateUserDTO): Promise<void> {
    return this.userService.createUser(createUserDTO);
  }
  @Patch('/:id/status')
  updateStatusUser(
    @Param('id') id: number,
    @Body('status') status: StatusUser,
  ): Promise<void> {
    return this.userService.updateStatusUser(id, status);
  }
  @Patch('/:id/password')
  updatePasswordUser(
    @Param('id') id: number,
    @Body('password') password: string,
  ): Promise<void> {
    return this.userService.updatePasswordUser(id, password);
  }
  @Delete('/:id')
  deleteUserById(@Param('id') id: number): Promise<void> {
    return this.userService.deleteUserById(id);
  }
}
