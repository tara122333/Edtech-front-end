import React from 'react'

const Visited = (props) => {
  return (
    <>
        <div className='w-full h-40 px-4 lg:h-96 lg:px-40 lg:py-36'>
        <a href={props.access_Link} target="_blank">
            <div className='flex flex-col gap-4 lg:gap-8 justify-center items-center border-2 border-red-500 py-2 rounded-lg bg-gray-400 lg:py-24'>
              
                  <div className='px-16 bg-blue-600 rounded-lg py-6 text-white cursor-pointer lg:px-36'>
                      <h1 className='text-2xl font-semibold px-4 py-1 lg:text-4xl'> {props.title} </h1>
                  </div>
             
              <p className='font-semibold text-lg lg:text-xl text-blue-600'>Click here to Watch Video</p>
              </div>
              </a>
        </div>
    </>
  )
}

export default Visited