import { Body, Post,  Controller, Get } from '@nestjs/common';
import { DogsService } from './dogs.service';
import { Document } from 'mongoose';

interface IDog extends Document {
  dogsName: String,
  breed: String,
  done: Boolean 
}

@Controller('dogs')
export class DogsController {
  constructor (private dogs: DogsService) {}

  @Get()
  allDogs(): Promise<IDog[]> {
    return this.dogs.getDogs()
  }

  @Get('hi')
  hiDog(): string {
    return this.dogs.hiDogs()
  }

  @Post()
  createPost(@Body() dog:IDog): Promise<IDog> {
    return this.dogs.createDog(dog)
  }

}
