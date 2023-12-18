import { PermissionQuery } from "./";

export interface BaseServiceInterface {
  checkPermissionRbac(userId: number, id: number, requestMethod: string): Promise<boolean>;
  checkPermissionAbac(userId: number, id: number, query: PermissionQuery): Promise<boolean>;
}