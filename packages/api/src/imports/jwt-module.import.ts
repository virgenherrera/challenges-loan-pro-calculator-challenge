import { ConfigModule, ConfigService } from "@nestjs/config";
import { JwtModule, JwtModuleOptions } from "@nestjs/jwt";

import { JwtConfig } from "../config";

export class AppJwtModule {
  static registerAsync() {
    return JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const { secret, expiresIn } = configService.get<JwtConfig>(JwtConfig.name);
        const options: JwtModuleOptions = {
          secret,
          global: true,
          signOptions: { expiresIn },
        }

        console.log(options)

        return options;
      }
    })
  }
}
