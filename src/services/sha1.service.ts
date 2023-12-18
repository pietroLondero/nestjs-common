import * as crypto from 'crypto';

export const sha1 = (data: string): string => {
  return crypto.createHash('sha1').update(data).digest('hex');
}