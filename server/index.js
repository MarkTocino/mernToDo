import express from "express"
import router from './routes/router.js'
import { Error, mongoose } from 'mongoose'
import dotenv from 'dotenv/config'

const app = express()
const PORT = 8001
// database connection
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('Database Connected'))
.catch(() => console.log('Database not Connected'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/',router)

app.listen(PORT, () => console.log(`Listening to ${PORT}`))