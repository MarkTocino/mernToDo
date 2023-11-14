'use client'
import React, { useEffect, useState } from 'react'
import {Image} from "@nextui-org/react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link} from "@nextui-org/react";
export default function CarData({params}) {
  const [cars, setCars] = useState()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    fetch('http://localhost:8001/cars')
    .then((res) => res.json())
    .then(res => {
      setCars(res)
      setLoading(true)
    })
  },[])
  const car = cars?.cars.find((car) => car.id === params.id)
  // handling which picture
  function handlePicture(carImage) {
    setSelected(carImage)
  }
  const [selected, setSelected] = useState()
  return (
    <div>
      {loading ? 
      <div>
      <div className='flex flex-col items-center p-0 m-0'>
      <Image className='w-96 sm:w-full' isZoomed={true} src={selected || car?.photo[0]}/>
    </div>
      <div className='flex flex-row justify-center'>
      {car?.photo.map((car, index) =>  
      <button key={index}>
          <Image isZoomed className='ml-1 w-16 mr-1 p-0 mt-0 h-auto sm:w-48' onClick={() => handlePicture(car)} src={car} alt={`Car ${index}`}/>
      </button>
      )}
      </div>
      <div className='text-black rounded-lg flex flex-col justify-center items-center'>
        <div className='w-screen md:w-full h-auto bg-gray-100 z-50 p-5 rounded-lg'>
      <div className='text-xl'>FULL DETAILS</div>
        <div className='text-left'>Model : {car?.model}</div>
        <div className='text-left'>Year : {car?.year}</div>
        <div className='text-left'>Engine : {car?.engine}</div>
        <div className='text-left'>Horsepower : {car?.horsepower}</div>
        <div className='text-left'>Transmission : {car?.transmission}</div>
        <div className='text-left'>MPG : {car?.mpg}</div>
        <div>Price : ${car?.price}</div>
        </div>
        </div>
        </div>
        : <div className='flex w-screen h-screen justify-center'>Loading...</div>}
    </div>
  )
}
