import mongoose from 'mongoose'
const { Schema } = mongoose

const suvSchema = new Schema({
    model: String,
    year: String,
    bodyType: String,
    engine: String,
    horsepower: String,
    transmission: String,
    colorOptions: Array,
})

export const SUV = mongoose.model('Suv' ,suvSchema)