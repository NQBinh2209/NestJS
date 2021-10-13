/* eslint-disable prettier/prettier */
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
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

export enum StatusUser {
  TRUE = 'TRUE',
  FALSE = 'FALSE',
}
