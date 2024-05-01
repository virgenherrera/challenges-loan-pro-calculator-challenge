import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsEmail } from 'class-validator';

import { User } from '../../entities';

export class LoginDto implements Pick<User, 'email' | 'password'> {
  @ApiProperty()
  @IsDefined()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsDefined()
  password: string;
}
