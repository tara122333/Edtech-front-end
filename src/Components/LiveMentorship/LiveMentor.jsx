import React from 'react'


const AboutMobile = () =>{
  return(
    <>
      <div>
        <div>
          {/* image */}
          <div>
            <img src="" alt="" className='w-full h-full' />
          </div>
          
          {/* Name and Link */}
          <div>

          </div>
        </div>
        <div>

        </div>
      </div>
    </>
  )
}

const AboutLaptop = ()=>{
  return(
    <>

    </>
  )
}

const LiveMentor = () => {
  return (
    <>
        <div className='flex justify-center items-center w-full h-full py-12 px-4 lg:py-24 lg:px-24'>
          <a href='https://topmate.io/tara122333' target=" _blank" className='w-full'>
          <div className='w-full flex flex-col gap-4 lg:gap-6 rounded-xl cursor-pointer justify-center items-center lg:py-28 h-40 bg-black px-4'>
            <h1 className='text-blue-500 font-bold text-2xl lg:text-4xl '>Book Your Live Session</h1>
            <p className='font-semibold text-red-500'>Click here to Book</p>
          </div>
          </a>
        </div>
    </>
  )
}

export default LiveMentor;