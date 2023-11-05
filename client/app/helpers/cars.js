'use client'
import React, { useState, useEffect } from "react";
import { getCarData } from "../components/vehicleCars";
import { CartContext } from "../CartContext/CartContext";
import { useContext } from "react";
import { Button } from "@nextui-org/react";
function GetCar(props){
    const [data, setData] = useState()
    const cart = useContext(CartContext)
    const id = props.id
    const quantity = props.quantity
    useEffect(() => {
        getCarData(id)
        .then(car => setData(car))
    },[])
    return (
        <div className='flex flex-col w-auto'>
            <p>{data?.model}</p>
            <img className='flex' src={data?.image}/>
            <p>Quantity : {quantity}</p>
            <p>${(quantity * data?.price)}</p>
            {/* <Button size="sm" onClick={() => cart.deleteFromCart(id)}>Remove</Button> */}
        </div>
    )
}
export default GetCar;