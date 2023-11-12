import React from 'react'

async function getCar(carId) {
    try {
    const fetchCar = await fetch('https://enthusiastic-puce-dove.cyclic.app/cars')
    // const fetchCar = await fetch(`http://localhost:8001/cars`)
    const res = await fetchCar.json()
    const findCar = await res?.cars.find((car) => car.id === carId)
    return findCar
    }
    catch(error) {
        console.log(error)
    }
}
export default async function CarData({params}) {
    const car = await getCar(params.id)
  return (
    <div>
      <h1>Model : {car.model}</h1>
      <img src={car.image}/>
      <h1>Engine : {car.engine}</h1>
      <h1>Horsepower : {car.horsepower}</h1>
      <h1>Transmission : {car.transmission}</h1>
      <h1>Color Options : {car.colorOptions}</h1>
    </div>
  )
}
