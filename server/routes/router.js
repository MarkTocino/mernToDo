import express from 'express'
import {nothing,checkout, loginUser, registerUser , hondaCars, hondaSuv} from '../controllers/controllers.js'
import cors from 'cors'
const router = express.Router()

router.use(
    cors({
        credentials:true,
        origin: ['http://localhost:3000','https://honda-e-commerce.vercel.app', 'https://enthusiastic-puce-dove.cyclic.app/cars' ]
    })
)
router.get('/',nothing )
router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/cars', hondaCars)
router.get('/suv', hondaSuv)
router.post('/checkout', checkout)

export default router