import { IsNotEmpty, IsString } from 'class-validator';

export class JwtConfig {
  @IsNotEmpty()
  @IsString()
  secret = process.env.JWT_SECRET;

  @IsNotEmpty()
  @IsString()
  expiresIn = process.env.JWT_EXPIRES_IN = '60m';
}
