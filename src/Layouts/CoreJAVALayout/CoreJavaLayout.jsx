import React from 'react'
import HomeNavbar from '../../Components/Navbar/HomeNavbar'
import StudentTabs from '../../Components/StudentTab/StudentTabs'
import CoreJava from '../../Components/Course/CoreJAVA/CoreJava'

const CoreJavaLayout = (props) => {
  return (
    <>
        <HomeNavbar />
        <StudentTabs />
        <div className='flex flex-col-reverse gap-2 lg:flex-row lg:gap-4 pb-20'>
          <div className='w-full lg:w-1/4 h-[500px] md:h-[600px] lg:h-[700px] overflow-y-scroll'>
            <CoreJava />
          </div>
          <div className='w-full lg:w-3/4 bg-black'>
              {props.children}
          </div>
        </div>
    </>
  )
}

export default CoreJavaLayout