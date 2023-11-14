import React from 'react'
import Cars from '../components/vehicleCars'
import Suvs from '../components/vehicleSuvs'

export const dynamic = 'auto',
dynamicParams = true,
revalidate = 5,
runtime = 'nodejs',
prefferedRegion = 'auto'


export default async function vehicles() {
  return (
    <div>
      <h1 className='text-3xl text-left ml-20'>SEDANS</h1>
        <Cars/>
      <h1 className='text-3xl text-left ml-20'>SUVS</h1>
        <Suvs/>
    </div>
  )
}
