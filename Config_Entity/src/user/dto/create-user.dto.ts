/* eslint-disable prettier/prettier */
import { StatusUser } from '../user.entity'
export class CreateUserDTO {
  username: string;
  password: string;
  status: StatusUser;
}