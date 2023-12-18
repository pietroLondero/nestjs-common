import * as fs from 'fs';
import { FileManagementInterface } from 'src/interfaces/file-management.interface';


export class LocalFileManagement implements FileManagementInterface {
  constructor() {
  }

  async uploadFile(file: any): Promise<any> {
    return 1;
  }

  async downloadFile(file: any): Promise<any> {
    return 1;
  }

  async deleteFile(file: any): Promise<any> {
    return 1;
  }
}