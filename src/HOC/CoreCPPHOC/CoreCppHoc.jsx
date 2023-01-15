import React from 'react'
import { Route,Routes} from "react-router-dom";

import CoreCppLayout from '../../Layouts/CoreCPPLayout/CoreCppLayout';

const CoreCppHoc = ({element:Component,...rest}) => {
    const fun = (props)=>{
        return (<CoreCppLayout> <Component {...props} /> </CoreCppLayout>);
    }

  return (
    <>
        <Routes>
            <Route {...rest} element={fun(rest)}/>
        </Routes>
    </>
  )
}

export default CoreCppHoc;