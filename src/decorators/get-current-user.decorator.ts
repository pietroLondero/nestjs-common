import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const CurrentUser = createParamDecorator(
    (data: string | undefined, ctx: ExecutionContext) => {
        const req = ctx.switchToHttp().getRequest();
        if (!data) {
            return req.user;
        }
        return req.user[data];
    });