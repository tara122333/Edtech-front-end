import React from 'react'


import HomeNavbar from '../Components/Navbar/HomeNavbar'
import StudentTabs from '../Components/StudentTab/StudentTabs'

const HomeLayout = (props) => {
  return (
    <>
        <HomeNavbar />
        <StudentTabs />
        {props.children}
        {/* <h1>Footer</h1> */}
    </>
  )
}

export default HomeLayout