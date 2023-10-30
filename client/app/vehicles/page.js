import React from 'react'
import Cars from '../components/vehicleCars'
import Suv from '../components/vehiclesSuv'
export const dynamic = 'auto',
dynamicParams = true,
revalidate = 0,
runtime = 'nodejs',
prefferedRegion = 'auto'


export default async function vehicles() {
  return (
    <div>
      <h1 className='flex text-3xl'>SEDANS</h1>
        <Cars/>
        <h1 className='flex text-3xl'>SUV'S</h1>
        <Suv />
    </div>
  )
}
