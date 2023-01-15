import React from 'react'

import HomeNavbar from '../../Components/Navbar/HomeNavbar'
import StudentTabs from '../../Components/StudentTab/StudentTabs'
import CoreC from '../../Components/Course/CoreCPP/CoreC'

const CourseDefaultLayout = (props) => {
  return (
    <>
        <HomeNavbar />
        <StudentTabs />
        <div className='flex flex-col-reverse gap-2 lg:flex-row lg:gap-4'>
          <div className='w-full lg:w-1/6 border-2 border-red-500'>
            <CoreC />
          </div>
          <div className='w-full lg:w-5/6'>
              {props.children}
          </div>
        </div>
    </>
  )
}

export default CourseDefaultLayout;