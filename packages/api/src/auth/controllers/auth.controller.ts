import { Body, Controller } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { Logger } from "../../common/decorators";
import { DtoValidation } from "../../common/pipes";
import { AuthRegisterDocs } from "../docs";
import { RegisterDto } from "../dto";
import { AuthService } from "../services";


@ApiTags('auth')
@Controller('auth')
export class AuthController {
  @Logger() private logger: Logger;

  constructor(private readonly authService: AuthService) { }


  @AuthRegisterDocs()
  async register(@Body(DtoValidation.strictPipe) dto: RegisterDto) {
    this.logger.log('Starting user registration process.');

    try {
      const newUser = await this.authService.register(dto);

      this.logger.verbose(
        `User "${newUser.id}" registered successfully.`,
      );
    } catch (error) {
      this.logger.error(`Registration failed: ${error.message}`);

      throw error;
    }
  }

}
