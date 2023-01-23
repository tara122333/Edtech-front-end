import React from 'react'
import { Route,Routes} from "react-router-dom";

import CoreJavaLayout from '../../Layouts/CoreJAVALayout/CoreJavaLayout';

const CoreJavaHoc = ({element:Component,...rest}) => {
    const fun = (props)=>{
        return (<CoreJavaLayout> <Component {...props} /> </CoreJavaLayout>);
    }

  return (
    <>
        <Routes>
            <Route {...rest} element={fun(rest)}/>
        </Routes>
    </>
  )
}

export default CoreJavaHoc;