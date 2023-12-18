export interface FileManagementInterface {
  uploadFile(file: any): Promise<any>;
  downloadFile(file: any): Promise<any>;
  deleteFile(file: any): Promise<any>;
}
