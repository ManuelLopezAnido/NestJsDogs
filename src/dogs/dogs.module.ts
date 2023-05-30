import { Module } from '@nestjs/common';
import { DogsController } from './dogs.controller';
import { DogsService } from './dogs.service';
import { MongooseModule } from '@nestjs/mongoose'
import { DogsSchema } from '../schemas/user.schema'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'DogsMOD', schema: DogsSchema }
    ],
    'DogDB')
  ],
  controllers: [DogsController],
  providers: [DogsService],
})
export class DogsModule {}
