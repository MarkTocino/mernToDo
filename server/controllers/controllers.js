import { User } from "../models/user.js";
import { Car } from "../models/car.js";
import { SUV } from "../models/suv.js";
import { hashPassword, comparePassword } from "../helpers/password.js";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv/config'
import stripe from "stripe";
// USER STUFF
// REGISTER USER
export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if(!name) {
            res.json({
                error:'name is required'
            })
        }
        if (!password || password.length < 6){
            return res.json({
                error: 'Password is required and should be at least 6 characters long'
            })
        }
        const exist = await User.findOne({email})
        if(exist) {
            return res.json({
                error:"Email already exist"
            })
        }
        const hashedPassword = await(hashPassword(password))

        const user = await User.create({
            name, email, password: hashedPassword
        })

        return res.json(user)
    } catch (error) {
        console.log(error)
    }
}
// LOGIN USER
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        // Check if user exist
        const user = await User.findOne({email})
        if(!user) {
            return res.json({
                error: "No User Found"
            })
        }
        // Check if password match
        const match = await comparePassword(password, user.password)
        if(match) {
            // sign the token
            jwt.sign({
                email: user.email, id: user._id, name:user.name}, process.env.JWT_SECRET, {}, (err, token) => {
                    if(err) throw err
                    res.cookie('token', token).json(user)
                } )
            res.json('password matched')
        }
        if (!match) {
            return res.json({
                error: "Passwords do not match"
            })
        }
    } catch (error) {
        console.log(error)
    }
}
// GET CARS
export const hondaCars = async (req, res) => {
    const cars = await Car.find({});
    return res.json({cars});
}
// GET SUVS
export const hondaSuv = async (req, res) => {
    const suvs = await SUV.find({});
    return res.json({suvs});
}
export const nothing = async (req, res) => {
    res.send({title:"books"});
}
// Stripe
const usingStripe = stripe(process.env.Stripe_Public_Key);
export const checkout = async(req,res) => {
    const items = req.body.items;
    let lineItems=[];
    items.forEach((item) => {
        lineItems.push(
            {
                price: item.id,
                quantity: item.quantity
            }
        )
    })
    const session = await usingStripe.checkout.sessions.create({
        line_items:lineItems,
        mode:'payment',
        success_url: "http://localhost:3000/vehicles",
        cancel_url: "http://localhost:3000/vehicles"
    })
    res.send(JSON.stringify({
        url:session.url
    }))
}