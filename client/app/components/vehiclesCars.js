
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
    <div>
      {cars.map((cars,index) => {
        return <ListCars key={index} cars={cars}/>
      })}
    </div>
  )
}

async function ListCars({cars}) {
  const { model, year, bodyType, engine, horsepower, transmission, image } = cars || {}
  return (
    <div className="flex flex-col text-center w-96">
      <img src={image}/>
      <h1>Model : {model}</h1>
      <h1>Year : {year}</h1>
      <h1>{bodyType}</h1>
      <h1>Engine : {engine}</h1>
      <h1>Horsepower : {horsepower}</h1>
      <h1>Transmission : {transmission}</h1>
    </div>
  )
}