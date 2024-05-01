import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

import { Logger } from '../../common/decorators';
import { Unauthorized } from '../../common/exceptions';
import { UsersService } from '../../users/services';

@Injectable()
export class AuthGuard implements CanActivate {
  @Logger() private readonly logger: Logger;

  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) { }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const authorization = String(request.headers.authorization);
    const token = this.extractTokenFromHeader(authorization);

    try {
      const { email } = this.jwtService.verify(token);
      const user = this.usersService.findByEmail(email);

      request.user = user;

      return true;
    } catch (error) {
      throw new Unauthorized('Invalid or expired token');
    }
  }

  private extractTokenFromHeader(authorization: string): string {
    this.logger.log(`Attempting to locate JWT.`);

    const [, token] = authorization.match(/Bearer\s(.+-.+.+)/) || [];

    if (!token) throw new Unauthorized('No authentication token provided');

    return token;
  }
}
