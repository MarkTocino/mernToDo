import React from 'react'

const HomePage = () => {
  return (
<div className=' flex flex-col bg-teal-200 h-screen'>
  <div className='text-center'>
    <div className='text-4xl'>
      <h1>STUCK UP NOTES!</h1>
  </div>
</div>
  <form className='flex flex-row items-center h-full justify-center'>
    <button className='bg-white h-10 w-20 border-solid border-black border-6 rounded-lg p-1 drop-shadow-lg m-2'>LOGIN</button>
    <button className='bg-white h-10 w-20 border-solid border-black border-6 rounded-lg p-1 drop-shadow-lg m-2'>SIGNUP</button>
  </form>
  <div className='flex flex-col h-40 justify-center items-center m-0 p-0'>
    <div>What's STUCK UP NOTES about?</div>
    <p>STUCK UP NOTES is notes application that allows you to create a note to do for the day. You are able to make a new note, select a current note and edit</p>
    <p>Unlike other application, this is a simple application for people who just needs to put notes for themeselves for reminders and to do tasks that they might forget! hello </p>
    <a className='flex text-blue-700' href='https://www.linkedin.com/in/mark-john-tocino-7b6649259/'>Credits - LinkedIn: MarkJohnATocino</a>
  </div>
</div>
  )
}
export default HomePage