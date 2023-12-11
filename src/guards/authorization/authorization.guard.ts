import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { RolesService } from '@pietro/auth/dist/roles/roles.service';

@Injectable()
export class PermissionGuard implements CanActivate {
  constructor(private userService: any, private getCategoriesFn: (request: any) => Promise<string[]>) { }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const categories = await this.getCategoriesFn(context.switchToHttp().getRequest());

    if (!categories || categories.length === 0) {
      return true; // No specific categories defined, allow access
    }

    const request = context.switchToHttp().getRequest();
    const userId = request.user.id; // Assuming you have user information in the request

    const userCategories = await this.userService.getUserCategories(userId);

    return categories.some(category => userCategories.includes(category));
  }
}