import { Injectable } from "@nestjs/common";

import { Logger } from '../../common/decorators';
import { UsersService } from "../../users/services";
import { RegisterDto } from "../dto";

@Injectable()
export class AuthService {
  @Logger() private readonly logger: Logger;
  constructor(
    private readonly usersService: UsersService
  ) { }

  async register(dto: RegisterDto) {
    this.logger.log(`registering User with email "${dto.email}".`);

    return await this.usersService.create(dto);
  }
}
