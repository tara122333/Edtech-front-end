import React from 'react'

import { Route,Routes} from "react-router-dom";

import TokenLayout from '../Layouts/TokenLayout';
const TokenHOC = ({element:Component,...rest}) => {
    const fun = (props)=>{
        return (<TokenLayout> <Component {...props} /> </TokenLayout>);
    }

  return (
    <>
        <Routes>
            <Route {...rest} element={fun(rest)}/>
        </Routes>
    </>
  )
}

export default TokenHOC