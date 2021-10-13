import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [UserModule, DatabaseModule, TypeOrmModule.forRoot()],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
