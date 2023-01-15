import React, { useEffect, useState } from 'react'

import Token from '../Components/Auth/Token';

const TokenPage = () => {
    const [isOpenToken,setIsOpenToken] = useState(false);
    
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
        <div>
            <h1>This is Token</h1>
        </div>
    </>
  )
}

export default TokenPage;