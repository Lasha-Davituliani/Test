import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { Role } from 'src/enums/role.enum';

@Injectable()
export class IsAdminGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const userRole = request.userRole;
    if (userRole !== 'ADMIN')
      throw new BadRequestException('You are not admin');
    return userRole === Role.ADMIN;
  }
}
