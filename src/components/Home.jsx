import React from 'react';

function Home() {
  return (
    <div>
      <div className=' relative w-full h-[86vh] max-h-screen bg-cover bg-no-repeat bg-center' style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1517344385969-f2c837f0a469?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80")' }}>
        <div className='absolute top-0 bottom-0 left-0 right-0 bg-black opacity-50 z-5'></div>
        <div className='absolute top-0 bottom-0 left-0 right-0 z-6 flex justify-center items-center'>
            <div className=' w-[50%] min-w-[300px] min-h-[20vw] h-[70%] pl-10 pr-10 pt-10 pb-10 flex flex-col gap-7 justify-around items-start'>
                <h1 className='text-white  text-4xl font-mono'>You got the travel plans,we got the <span className='text-blue-500'>travel vans.</span></h1>
                <p className='text-white  '>Add adventures to your life by joining the #vanlife movement.Rent the perfect van to make your perfect road trip.</p>
                <button className='bg-orange-500 py-3 text-white w-full h-14 rounded-lg'>Find your van</button>
            </div>


        </div>
      </div>
    </div>
  );
}

export default Home;


// w-full h-[90.9vh] max-h-screen