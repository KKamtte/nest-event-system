import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import {
  EventMicroservice,
  RewardMicroservice,
  RewardRequestMicroservice,
} from '@app/common';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        protoPath: [
          join(process.cwd(), 'proto/event.proto'),
          join(process.cwd(), 'proto/reward.proto'),
          join(process.cwd(), 'proto/reward-request.proto'),
        ],
        package: [
          EventMicroservice.protobufPackage,
          RewardMicroservice.protobufPackage,
          RewardRequestMicroservice.protobufPackage,
        ],
      },
    },
  );
  await app.listen();
}
bootstrap();
