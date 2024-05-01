import { ConfigModule } from '@nestjs/config';

import { AppConfig, DbConfig } from '../config';
import { registerValidatedConfig } from '../utils/register-validated-config.util';

export class AppConfigModule {
  static forRoot() {
    return ConfigModule.forRoot({
      isGlobal: true,
      load: [registerValidatedConfig(AppConfig), registerValidatedConfig(DbConfig)],
    });
  }
}
