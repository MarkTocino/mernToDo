import React from 'react'
import Cars from '../components/vehiclesCars'
export const dynamic = 'auto',
dynamicParams = true,
revalidate = 0,
runtime = 'nodejs',
prefferedRegion = 'auto'


export default async function vehicles() {
  return (
    <Cars/>
  )
}
