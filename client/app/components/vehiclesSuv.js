export const dynamic = 'auto',
dynamicParams = true,
revalidate = 0,
runtime = 'nodejs',
prefferedRegion = 'auto'


async function getAllCars() {
  const carsFetch = await fetch('http://localhost:8001/suv')
  const carsRes = await carsFetch.json()
  return carsRes?.suvs
}

export default async function Suv() {
const cars = await getAllCars()
  return (
    <div className="flex flex-row text-left p-5"> 
      {cars.map((cars,index) => {
        return <ListCars key={index} cars={cars}/>
      })}
    </div>
  )
}

async function ListCars({cars}) {
  const { model, year, bodyType, engine, horsepower, transmission, image , mpg} = cars || {}
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
    </div>
  )
}