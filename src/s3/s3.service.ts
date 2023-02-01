import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';

@Injectable()
export class S3Service {
  async readEntireFolderFromS3(prefix: string, startAfter: string) {
    try {
      const folderData = [];
      const s3 = new AWS.S3();
      const data = await s3
        .listObjectsV2({
          Bucket: process.env.AWS_BUCKET_NAME,
          Prefix: prefix,
          StartAfter: startAfter,
        })
        .promise();
      const promises = [];
      for (const file of data.Contents) {
        promises.push(
          s3
            .getObject({ Bucket: process.env.AWS_BUCKET_NAME, Key: file.Key })
            .promise(),
        );
      }
      const values = await Promise.all(promises);
      for (const value of values) {
        const content = JSON.parse(value.Body.toString());
        folderData.push(content);
      }
      return folderData;
    } catch (error) {
      console.error(error);
    }
  }

  async readASingleObjectFromS3(
    folderName: string,
    fileExtension: string,
    order: number,
  ) {
    try {
      const s3 = new AWS.S3();
      const data = await s3
        .getObject({
          Bucket: process.env.AWS_BUCKET_NAME,
          Key: `${folderName}/${order}.${fileExtension}`,
        })
        .promise();
      console.log(data.Body);
      return JSON.parse(data.Body.toString());
    } catch (error) {
      console.error(error);
    }
  }
}
