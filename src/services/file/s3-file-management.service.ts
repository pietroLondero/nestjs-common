import * as AWS from 'aws-sdk';
import { FileManagementInterface } from 'src/interfaces/file-management.interface';
import { InternalServerErrorException } from '@nestjs/common';


export class S3FileManagement implements FileManagementInterface {
  private s3: AWS.S3;

  constructor() {
    if (!process.env.AWS_ACCESS_KEY_ID || !process.env.AWS_SECRET_ACCESS_KEY) {
      throw new InternalServerErrorException();
    }

    this.s3 = new AWS.S3({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
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