import { Module } from '@nestjs/common';
import { HelloController } from './controller/hello.controller';

@Module({
  controllers: [HelloController]
})
export class HelloModule { }
