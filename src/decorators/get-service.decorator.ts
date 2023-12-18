import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const BaseService = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const moduleName = request.route.path.split('/')[1]; // Assuming the module name is in the URL
    const serviceName = moduleName.charAt(0).toUpperCase() + moduleName.slice(1) + 'Service';
    const service = request.app.get(serviceName);

    return service;
  },
);