import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats.controller';
import { MongooseModule } from '@nestjs/mongoose'
import { DogsModule } from './dogs/dogs.module';
require('dotenv').config();
const uri = process.env.MONGODB_URI;

@Module({
  imports: [DogsModule, MongooseModule.forRoot(
    `mongodb+srv://Manuel:${uri}`, 
  {
    dbName: 'dataDogs',
    connectionName: 'DogDB'
  }
  )],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule {}
