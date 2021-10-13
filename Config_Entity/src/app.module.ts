import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [UserModule, DatabaseModule, ConfigModule.forRoot()],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
