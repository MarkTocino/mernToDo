import express from 'express'
import { loginUser, registerUser } from '../controllers/controllers.js'
import cors from 'cors'
const router = express.Router()

router.use(
    cors({
        credentials:true,
        origin: 'http://localhost:3000'
    })
)
router.post('/register', registerUser)
router.post('/login', loginUser)
export default router