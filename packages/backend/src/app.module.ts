import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloModule } from './hello/hello.module';
import { GreetingsModule } from './greetings/greetings.module';

@Module({
  imports: [HelloModule, GreetingsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
