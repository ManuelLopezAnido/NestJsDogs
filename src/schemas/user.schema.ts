import { Schema } from "mongoose"

export const DogsSchema = new Schema ({
  dogsName: String,
  breed: String,
  done: Boolean 
})