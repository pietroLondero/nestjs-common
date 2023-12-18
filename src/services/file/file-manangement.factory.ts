import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { FileManagementInterface } from 'src/interfaces/file-management.interface';
import { LocalFileManagement } from './local-file-management.service';
import { S3FileManagement } from './s3-file-management.service';
import { FtpFileManagement } from './ftp-file-managegement.service';

@Injectable()
export class FileManagementFactory {
  private factories = new Map<string, new () => FileManagementInterface>();

  constructor() {
    this.factories.set('S3', S3FileManagement);
    this.factories.set('local', LocalFileManagement);
    this.factories.set('ftp', FtpFileManagement);
  }

  createStorageService(location: string): FileManagementInterface {
    const Factory = this.factories.get(location);
    if (!Factory) {
      throw new InternalServerErrorException();
    }
    return new Factory();
  }
}