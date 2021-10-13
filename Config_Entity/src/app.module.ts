import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [UserModule, DatabaseModule, TypeOrmModule.forRoot()],
  controllers: [UserController],
  providers: [],
})
export class AppModule {}
