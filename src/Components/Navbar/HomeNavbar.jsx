import React, { useState } from 'react'
import {BiMenu,BiUserCircle} from 'react-icons/bi';
import { Link } from 'react-router-dom';


import SignIn from '../Auth/SignIn';
import SignUp from '../Auth/SignUp';


const HomeNavbarMobile = ({SignIn,SignUp})=>{

    
    return(
        <>
            <div className='flex justify-between w-full px-2 py-1 shadow-lg lg:py-2 lg:px-5'>
                <div className='h-10 w-20'>
                    <Link to={"/"}>
                        <h1 className='font-bold text-xl text-purple-600 lg:text-2xl'> ConceptWithTara</h1>
                    </Link>
                </div>

                <div className='hidden gap-4 text-purple-600 lg:gap-10 '>
                    {/* profile */}
                    <div className='flex gap-5'>
                        <BiUserCircle className='text-4xl cursor-pointer' onClick={SignIn}/>
                        <h1 onClick={SignUp} className="text-xl cursor-pointer">SignUp</h1>
                        <h1 onClick={SignIn} className="text-xl cursor-pointer">SignIn</h1>
                    </div>

                    <div className='flex justify-center items-center'>
                        <BiMenu  className='text-4xl'/>
                    </div>

                </div>
            </div>
        </>
    )
}

// const HomeNavbarPC = ()=>{
//     return(
//         <>
//         </>
//     )
// }

const HomeNavbar = () => {

    const [isOpenSignIn,setIsOpenSignIn] = useState(false);
    const [isOpenSignUp,setIsOpenSignUp] = useState(false);
    
    const openSignInmodal = () =>{
        setIsOpenSignIn(true);
    }

    const openSignUpmodal = () =>{
        setIsOpenSignUp(true);
    }

  return (
    <>
        <SignIn isOpen={isOpenSignIn} setIsOpen={setIsOpenSignIn} />
        <SignUp isOpen={isOpenSignUp} setIsOpen={setIsOpenSignUp} />
        <div>
            {/* For Mobile and tablet */}
            {/* <div className='md:hidden'>
                <HomeNavbarMobile SignIn={openSignInmodal} SignUp={openSignUpmodal}/>
            </div> */}
            
            {/* For PC */}
            <div className=''>
                <HomeNavbarMobile SignIn={openSignInmodal} SignUp={openSignUpmodal} />
            </div>

        </div>
    </>
  )
}

export default HomeNavbar