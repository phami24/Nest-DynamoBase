# Nest.js DynamoDB Project

Dự án này là một ứng dụng Nest.js tích hợp với Amazon DynamoDB.

## Yêu cầu

- Node.js (phiên bản 14 trở lên)
- Yarn
- Tài khoản AWS và thông tin xác thực

## Cài đặt

1. Clone repository:

   ```
   git clone https://github.com/phami24/Nest-DynamoBase.git
   cd your-repo-name
   ```

2. Cài đặt dependencies:

   ```
   yarn install
   ```

3. Tạo file `.env` trong thư mục gốc và thêm thông tin AWS của bạn:
   ```
   AWS_REGION=your-aws-region
   AWS_ACCESS_KEY_ID=your-access-key-id
   AWS_SECRET_ACCESS_KEY=your-secret-access-key
   ```

## Cấu trúc dự án

```
src/
├── config/
│   └── dynamodb.config.ts
├── dynamodb/
│   ├── dynamodb.module.ts
│   └── dynamodb.service.ts
├── app.controller.ts
├── app.module.ts
├── app.service.ts
└── main.ts
```

## Cấu hình DynamoDB

DynamoDB được cấu hình trong `src/config/dynamodb.config.ts`. Đảm bảo rằng bạn đã cung cấp thông tin xác thực AWS chính xác trong file `.env`.

## Sử dụng DynamoDB Service

DynamoDBService cung cấp các phương thức để tương tác với DynamoDB:

- `putItem`: Thêm hoặc cập nhật một item
- `getItem`: Lấy một item theo khóa
- `deleteItem`: Xóa một item theo khóa

Ví dụ sử dụng:

```typescript
import { Injectable } from '@nestjs/common';
import { DynamoDBService } from './dynamodb/dynamodb.service';

@Injectable()
export class YourService {
  constructor(private readonly dynamoDBService: DynamoDBService) {}

  async createItem(item: any) {
    return this.dynamoDBService.putItem('YourTableName', item);
  }

  async getItem(key: any) {
    return this.dynamoDBService.getItem('YourTableName', key);
  }

  async deleteItem(key: any) {
    return this.dynamoDBService.deleteItem('YourTableName', key);
  }
}
```

## Chạy ứng dụng

- Chế độ development:

  ```
  yarn start:dev
  ```

- Chế độ production:
  ```
  yarn start:prod
  ```

## Tính năng

- Tích hợp với Amazon DynamoDB
- CRUD operations thông qua DynamoDB Service
- Cấu hình môi trường sử dụng dotenv

## API Documentation

(Swagger API Documentation)

## Deployment

(Thêm hướng dẫn triển khai cụ thể cho dự án của bạn ở đây)

## Cấu hình

Ngoài cấu hình AWS trong file `.env`, dự án này không yêu cầu cấu hình đặc biệt nào khác. Tuy nhiên, bạn có thể tùy chỉnh các cài đặt trong `src/config/dynamodb.config.ts` nếu cần.

## Lưu ý

- Đảm bảo rằng bạn không chia sẻ thông tin xác thực AWS của mình.
- Luôn sử dụng các phương pháp bảo mật tốt nhất khi làm việc với dữ liệu nhạy cảm.
- Kiểm tra kỹ lưỡng quyền truy cập và chính sách IAM của bạn trên AWS để đảm bảo an toàn.