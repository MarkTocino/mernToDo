import mongoose from 'mongoose'
const { Schema } = mongoose

const carSchema = new Schema({
    model: String,
    year: String,
    bodyType: String,
    engine: String,
    horsepower: String,
    transmission: String,
    colorOptions: Array,
  })

export const Car = mongoose.model('Car' ,carSchema)