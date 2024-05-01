import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from '../entities';
import { AppJwtModule } from '../imports';
import { UsersService } from '../users/services';
import { UsersModule } from '../users/users.module';
import { AuthController } from './controllers';
import { AuthGuard } from './guards';
import { AuthService } from './services';

@Module({
  imports: [
    AppJwtModule.registerAsync(),
    TypeOrmModule.forFeature([User]),
    UsersModule,
  ],
  providers: [
    UsersService, AuthService, JwtService, AuthGuard
  ],
  exports: [AuthGuard],
  controllers: [AuthController]
})
export class AuthModule { }
