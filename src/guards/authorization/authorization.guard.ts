import { Injectable, CanActivate, ExecutionContext, Inject } from '@nestjs/common';
import { BaseServiceInterface, PermissionQuery } from '../../interfaces';

@Injectable()
export class PermissionGuard implements CanActivate {
  constructor(
    @Inject('BaseService')
    private readonly baseService: BaseServiceInterface
  ) { }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const id = context.switchToHttp().getRequest().params.id;
    const userId = context.switchToHttp().getRequest().params.userId;

    const requestMethod = context.switchToHttp().getRequest().method;

    const query: PermissionQuery = {};
    switch (requestMethod) {
      case 'GET':
        query.read = true;
        break;
      case 'POST':
      case 'PUT':
        query.write = true;
        break;
      case 'DELETE':
        query.delete = true;
        break;
      default:
        break;
    }

    const a = await this.baseService.checkPermissionRbac(userId, id, requestMethod);
    // const b = 
    return a ? a : await this.baseService.checkPermissionAbac(userId, id, query);
    // return a || b;
  }
}