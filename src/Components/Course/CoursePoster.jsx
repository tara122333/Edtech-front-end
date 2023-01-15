import React from 'react'
import { Link } from "react-router-dom";

const CoursePoster = (props) => {
  return (
    <Link to={`/course/${props.id}/01`}>
        <div className='flex flex-col gap-2 py-3 shadow-lg border rounded-md lg:py-6'>
            <div className='w-full h-60'>
                <img src={props.img} alt="course"  className='w-full h-full'/>
            </div>
            <div className='flex flex-col gap-1 h-28 px-3 justify-center lg:px-4'>
                <h1 className='text-xl font-bold '>{props.title}</h1>
                <p className='text-gray-500 text-lg'>{props.desc}</p>
            </div>
            <div className='flex justify-end px-3 lg:px-4'>
                <h1 className='text-blue-600 text-lg'>Resume</h1>
            </div>
        </div>
    </Link>
  )
}

export default CoursePoster