"use client"

import { Button } from "@nextui-org/react"
import { CartContext } from "../CartContext/CartContext"
import { useContext,useState, useEffect } from "react"

export const dynamic = 'auto',
dynamicParams = true,
revalidate = 0,
runtime = 'nodejs',
prefferedRegion = 'auto'


async function getAllCars() {
  const carsFetch = await fetch('http://localhost:8001/cars')
  const carsRes = await carsFetch.json()
  return carsRes?.cars
}

export default async function Cars() {
const cars = await getAllCars()
  return (
    <div className="flex flex-row text-left p-5">
      {cars.map((cars,index) => {
        return <ListCars key={index} cars={cars}/>
      })}
    </div>
  )
}

function ListCars({cars}) {
  const { _id,model, year, bodyType, engine, horsepower, transmission, image , mpg, price} = cars || {}
  const cart = useContext(CartContext)
  const productQuantity = cart.getProductQuantity(_id)
  return (
  <div className="border-2 rounded-2xl p-5 m-3">
      <img src={image}/>
      <h1>Model : {model}</h1>
      <h1>Year : {year}</h1>
      <h1>{mpg} City/Highway MPG Rating</h1>
      <h1>{bodyType}</h1>
      <h1>Engine : {engine}</h1>
      <h1>Horsepower : {horsepower}</h1>
      <h1>Transmission : {transmission}</h1>
      <h1>Price : ${price}</h1>
      {productQuantity > 0 ?
      <div>
        <div>Qty: {productQuantity}
          <Button size="sm" onClick={() => cart.addOneToCart(_id)}>+</Button>
          <Button size="sm" onClick={() => cart.removeOneFromCart(_id)}>-</Button>
        <Button size="sm" color="danger" onClick={() => cart.deleteFromCart(_id)}>Remove From Cart</Button>
        </div>
      </div>
      : ""}
      <Button color="primary" onClick={() => cart.addOneToCart(_id)}>Add To Cart</Button>
    </div>
    
  )
}

async function getCarData(id) {
  const carsFetch = await fetch('http://localhost:8001/cars')
  const carsRes = await carsFetch.json()
  // return carsRes?.cars
  let productData = await carsRes?.cars.find(cars => cars._id === id);
  if (productData == undefined) {
    console.log("Product does not exist for ID:" + id);
    return undefined;
  }
  return productData
}
export { getCarData }