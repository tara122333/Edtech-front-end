import React from 'react'


import CoursePoster from './CoursePoster';
    
const Course = () => {

    const Courses = [
        // {
        //     id : "Core-Concept-C++",
        //     img : "https://student-platform-assets.s3.ap-south-1.amazonaws.com/course-images/Screenshot+2022-06-17+at+2.26.45+PM.png",
        //     title : "Core Concept C++",
        //     desc : "Core Concept C++",
        // },
        // {
        //     id : "DSA-C++",
        //     img : "https://student-platform-assets.s3.ap-south-1.amazonaws.com/course-images/Screenshot+2022-08-21+at+11.39.50+AM.png",
        //     title : "Data Structure And Algorithm",
        //     desc : "Data Structure And Algorithm",
        // },

        {
            id : "Core-Concept-Java",
            img : "https://i.ibb.co/fvrCXQB/Screenshot-2023-01-25-162156.png",
            title : "JAVA - Core Concepts - Self Paced - Updated",
            desc : "JAVA - Core Concepts - Self Paced - Updated",
        },
    ];

    
  return (
    <>
        <div className='flex gap-8  flex-col justify-center items-center lg:flex-row lg:flex-wrap lg:gap-6 px-4 py-4'>
            {
                Courses.map((data)=>(
                    <CoursePoster {...data} />
                ))
            }
        </div>
    </>
  )
}

export default Course