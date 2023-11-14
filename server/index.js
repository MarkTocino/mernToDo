import express from "express"
import router from './routes/router.js'
import { Error, mongoose } from 'mongoose'
import dotenv from 'dotenv/config'

const app = express()
const PORT = process.env.PORT || 8001

// database connection
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`MongoDB Connected: ${conn.connection.host}` )
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}
app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use((req, res, next) => {
    if (req.protocol === 'http') {
        const httpsUrl = `https://${req.hostname}${req.url}`;
        return res.redirect(301, httpsUrl);
    }
    next();
});

app.use('/',router)
connectDB().then(() => {
    app.listen(PORT, () => console.log(`Listening to ${PORT}`))
})

