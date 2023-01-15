import React from 'react'

import HomeNavbar from '../../Components/Navbar/HomeNavbar'
import StudentTabs from '../../Components/StudentTab/StudentTabs'
import CoreCpp from '../../Components/Course/CoreCPP/CoreCpp'
const CoreCppLayout = (props) => {
  return (
    <>
        <HomeNavbar />
        <StudentTabs />
        <div className='flex flex-col-reverse gap-2 lg:flex-row lg:gap-4 pb-20'>
          <div className='w-full lg:w-1/4 lg:h-[700px] lg:overflow-y-scroll'>
            <CoreCpp />
          </div>
          <div className='w-full lg:w-3/4 bg-black'>
              {props.children}
          </div>
        </div>
    </>
  )
}

export default CoreCppLayout