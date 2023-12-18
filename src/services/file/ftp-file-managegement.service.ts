import { FileManagementInterface } from 'src/interfaces/file-management.interface';
import * as Jsftp from 'jsftp';
import { InternalServerErrorException } from '@nestjs/common';

export class FtpFileManagement implements FileManagementInterface {
  private ftp: Jsftp;

  constructor() {

    if (!process.env.FTP_HOST || !process.env.FTP_PORT || !process.env.FTP_USER || !process.env.FTP_PASS) {
      throw new InternalServerErrorException();
    }

    this.ftp = new Jsftp({
      host: process.env.FTP_HOST,
      port: Number(process.env.FTP_PORT),
      user: process.env.FTP_USER,
      pass: process.env.FTP_PASS,
    });
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