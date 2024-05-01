import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DbConfig } from '../config';

export class AppTypeOrmModule {
  static forRootAsync() {
    return TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const dbConfig = configService.get<DbConfig>(DbConfig.name);
        const entityMap = await import('../entities');
        const options: TypeOrmModuleOptions = {
          type: 'postgres',
          logging: 'all',
          entities: Object.values(entityMap),
          ...dbConfig,
        };

        return options;
      },
      inject: [ConfigService],
    });
  }
}
