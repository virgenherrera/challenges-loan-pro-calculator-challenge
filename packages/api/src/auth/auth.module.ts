import { Module } from '@nestjs/common';

import { UsersService } from '../users/services';
import { UsersModule } from '../users/users.module';
import { AuthController } from './controllers';

@Module({
  imports: [
    UsersModule,
  ],
  providers: [
    UsersService
  ],
  controllers: [AuthController]
})
export class AuthModule { }
