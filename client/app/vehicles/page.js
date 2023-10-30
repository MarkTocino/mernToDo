import React from 'react'
import Cars from '../components/vehiclesCars'
import Suv from '../components/vehiclesSuv'
export const dynamic = 'auto',
dynamicParams = true,
revalidate = 0,
runtime = 'nodejs',
prefferedRegion = 'auto'


export default async function vehicles() {
  return (
    <div>
      <h1 className='flex text-6xl'>SEDANS</h1>
        <Cars/>
        <h1 className='flex text-6xl'>SUV'S</h1>
        <Suv />
    </div>
  )
}
