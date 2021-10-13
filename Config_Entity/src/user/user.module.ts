import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserController } from './user.controller';
import { ConfigService } from '@nestjs/config';
@Module({
  imports: [TypeOrmModule.forFeature([User])],
  exports: [UserService],
  controllers: [UserController],
  providers: [UserService, ConfigService],
})
export class UserModule {}
