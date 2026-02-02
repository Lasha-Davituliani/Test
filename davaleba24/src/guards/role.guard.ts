import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class IsAdmin implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const role = request.headers['role'];
    if (!role || !['admin'].includes(role))
      throw new BadRequestException('permission denide');
    return true;
  }
}

@Injectable()
export class IseDitor implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const role = request.headers['role'];
    if (!role || !['admin', 'editor'].includes(role))
      throw new BadRequestException('permission denide');
    return true;
  }
}

@Injectable()
export class IsViewer implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const role = request.headers['role'];
    if (!role || !['admin', 'editor', 'viewer'].includes(role))
      throw new BadRequestException('permission denide');
    return true;
  }
}
