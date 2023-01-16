import React, { useEffect, useState } from 'react'

import Token from '../Components/Auth/Token';

const TokenPage = () => {
    const [isOpenToken,setIsOpenToken] = useState(false,[]);
    
    const openTokenmodal = () =>{
        setIsOpenToken(true);
    }

    useEffect(()=>{
        if( localStorage.getItem("tokenData")) ( window.location.href = `course`);
        else{
            openTokenmodal();
        }
    },[]);

  return (
    <>
    
    <Token isOpen={isOpenToken} setIsOpen={setIsOpenToken} />
        <div className='flex justify-center items-center'>
            <h1 className='cursor-pointer w-48 text-3xl border-2 border-purple-500 px-12 py-5 bg-purple-300' onClick={openTokenmodal}>
                Access
            </h1>
        </div>
    </>
  )
}

export default TokenPage;