import { Injectable } from '@nestjs/common';
import { PutCommand, GetCommand, DeleteCommand } from '@aws-sdk/lib-dynamodb';
import { ddbDocClient } from '../config/dynamodb.config';

@Injectable()
export class DynamoDBService {
  async putItem(tableName: string, item: Record<string, any>) {
    const command = new PutCommand({
      TableName: tableName,
      Item: item,
    });
    return ddbDocClient.send(command);
  }

  async getItem(tableName: string, key: Record<string, any>) {
    const command = new GetCommand({
      TableName: tableName,
      Key: key,
    });
    return ddbDocClient.send(command);
  }

  async deleteItem(tableName: string, key: Record<string, any>) {
    const command = new DeleteCommand({
      TableName: tableName,
      Key: key,
    });
    return ddbDocClient.send(command);
  }
}
