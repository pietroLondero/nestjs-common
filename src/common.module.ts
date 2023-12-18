import { Module } from '@nestjs/common';
import { PermissionGuard } from './guards';

@Module({
  providers: [PermissionGuard],
  exports: [PermissionGuard],
})
export class CommonModule { }
