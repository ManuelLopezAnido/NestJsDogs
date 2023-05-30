import { Injectable } from '@nestjs/common';
import {InjectConnection, InjectModel} from '@nestjs/mongoose'
import { Document, Model } from 'mongoose';

interface IDog extends Document {
  dogsName: String,
  breed: String,
  done: Boolean 
}
 
@Injectable()
export class DogsService {
  
  constructor (@InjectModel('DogsMOD','DogDB') private dogsModel: Model<IDog>) {}
  
  hiDogs(): string {
    return 'Hi, Im DOG';
  }

  async getDogs(): Promise<IDog[]> {
    const allDogs = await this.dogsModel.find()
    return allDogs
  } 

  async createDog (dog: IDog) {
    const newDog =  new this.dogsModel(dog)
    console.log(newDog)
    return await newDog.save()
  }

}
