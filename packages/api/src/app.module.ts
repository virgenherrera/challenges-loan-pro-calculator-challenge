import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { CommonModule } from './common/common.module';
import { LogRequestMiddleware } from './common/middleware';
import { AppConfigModule, AppTypeOrmModule } from './imports';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AppConfigModule.forRoot(), AppTypeOrmModule.forRootAsync(), CommonModule, UsersModule, AuthModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LogRequestMiddleware).forRoutes('*');
  }
}
