/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configServie: ConfigService) => ({
        type: 'postgres',
        host: configServie.get('POSTGRES_HOST'),
        port: configServie.get('POSTGRES_PORT'),
        database: configServie.get('POSTGRES_DB'),
        username: configServie.get('POSTGRES_USER'),
        password: configServie.get('POSTGRES_PASSWORD'),
        entities: [User],
        synchronize: true,
      }),
    }),
  ],
})
export class DatabaseModule {}
