import React from 'react'

function About() {
  return (
   <>
   <div className='w-full h-[85vh] pb-2 overflow-x-hidden
    bg-[#FDEDEC] flex flex-col gap-4  items-center mb-0'>
    <img src="https://www.hilltopviewsonline.com/wp-content/uploads/2021/11/van-life-unsplash-900x600.jpeg" alt="" className='mt-2 w-[38vw] min-w-[350px] rounded-xl  h-[45vw] max-h-[400px] mx-auto md:w-[70vw] lg:h-[40vw]' />
    <h1 className=' pl-4 pr-4 text-xl font-extrabold'>Dont Squeeze in a Sedan when you could relax in a van.</h1>
    <p className='pl-4 pr-4 '>Our mission is to enliven your roadtrip with the perfect travel van rental.Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.</p>
    <p className='pl-4 pr-4'>Our team is full of Van life enthusiasts who know firsthand the magic of touring the world on 4 wheels. </p>
    <div className='mx-auto w-[80%] p-3 bg-[#FFC17B] rounded-md flex flex-col gap-3 sm:mt-4'>
      <h1 className='w-[90%] lg:w-[100%] font-sans font-extrabold text-lg pl-2'>Your destination is waiting. <br />
      Your van is ready.
      </h1>
      <button className='bg-black md:w-[100%] text-white p-3 rounded w-[70%]'>Explore your vans</button>


    </div>
   </div>
   </>
  )
}

export default About
