import React from 'react'
export default async function HomePage() {
  return (
<div className='flex flex-col m-1'>
  <div className=" rounded-lg bg-[url('https://automobiles.honda.com/-/media/Honda-Automobiles/Homepage-Redesign/Hero/2024-Accord/MY24_Honda_Accord_Hompage_hero_L_-3019-x-1190.jpg?sc_lang=en')] bg-no-repeat w-full h-96 bg-cover bg-center">
    <div className='h-full text-center pt-36 text-white'>
      <h1 className='text-white text-4xl'>THE POWER OF DREAMS</h1>
      I do not own any of these pictures, and this is merely for project purposes.
    </div>
  </div>
  <div className="flex flex-row m-1 rounded-md ">
    <div className="bg-[url('https://paultan.org/image/2017/07/Honda-Merchandise-1.jpg')] hover:blur m-1 rounded-lg bg-cover w-1/2 h-[495px]"/>
      <a href='/merchandise' className="text-4xl left-56 bottom-56 absolute text-black hover:underline">👉VIEW MERCHANDISE👈</a>
    <div className="bg-[url('https://shop.autocannon.com/cdn/shop/files/Autocanon_Honda_HRC_Apparel_Store.png?v=1697482948&width=1500')] hover:blur m-1 rounded-lg bg-cover w-1/2 h-[495px]"/>
    <a href='/accessories' className="text-4xl right-56 bottom-56 absolute text-white hover:underline">👉VIEW CAR ACCESSORIES👈</a>
  </div>
</div>
  )
}
