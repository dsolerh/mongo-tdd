import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), SharedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
