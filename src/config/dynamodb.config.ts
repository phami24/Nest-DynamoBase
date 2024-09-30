import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';

const ddbClient = new DynamoDBClient({
  region: process.env.AWS_REGION || 'your-region',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || 'your-access-key-id',
    secretAccessKey:
      process.env.AWS_SECRET_ACCESS_KEY || 'your-secret-access-key',
  },
});

const ddbDocClient = DynamoDBDocumentClient.from(ddbClient);

export { ddbDocClient };
