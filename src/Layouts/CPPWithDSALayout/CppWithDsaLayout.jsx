import React from 'react'
import HomeNavbar from '../../Components/Navbar/HomeNavbar'
import StudentTabs from '../../Components/StudentTab/StudentTabs'

const CppWithDsaLayout = (props) => {
  return (
    <>
        <HomeNavbar />
        <StudentTabs />
        <div className='flex flex-col-reverse gap-2 lg:flex-row lg:gap-4 pb-20'>
          {props.children}
        </div>
    </>
  )
}

export default CppWithDsaLayout