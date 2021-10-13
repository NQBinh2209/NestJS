/* eslint-disable prettier/prettier */
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { StatusUser } from './status-user.model';

@Entity('USER')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  username: string;
  @Column()
  password: string;
  @Column()
  status: StatusUser;
}
