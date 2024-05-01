import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

import { plainToInstance } from "class-transformer";
import { Logger } from '../../common/decorators';
import { User } from "../../entities";
import { UsersService } from "../../users/services";
import { compareRawAndHash } from "../../utils";
import { LoginDto, LoginResponseDto, RegisterDto } from "../dto";

@Injectable()
export class AuthService {
  @Logger() private readonly logger: Logger;
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) { }

  async register(dto: RegisterDto) {
    this.logger.log(`registering User with email "${dto.email}".`);

    return await this.usersService.create(dto);
  }

  async login({ email, password }: LoginDto): Promise<LoginResponseDto> {
    this.logger.log(`attempting to register username: ${email} `);

    const user = await this.usersService.findByEmail(email);

    if (user && compareRawAndHash(password, user.password)) {
      this.logger.verbose(`Login successful for user: ${user.email}`);
      const access_token = await this.generateJwt(user);

      return plainToInstance(LoginResponseDto, { access_token }, { excludeExtraneousValues: true });
    } else {
      this.logger.warn(`Invalid login attempt for user: ${email}`);
      throw new UnauthorizedException('Invalid login credentials');
    }
  }

  private async generateJwt(user: User): Promise<string> {
    this.logger.log(`Generating JWT for user: ${user.email}`);

    const payload = { email: user.email, sub: user.id };

    return this.jwtService.signAsync(payload);
  }
}
