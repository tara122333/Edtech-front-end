import React from 'react'
import { Route,Routes} from "react-router-dom";

import CppWithDsaLayout from '../../Layouts/CPPWithDSALayout/CppWithDsaLayout';

const CppWithDsaHoc = ({element:Component,...rest}) => {
      const fun = (props)=>{
        return (<CppWithDsaLayout> <Component {...props} /> </CppWithDsaLayout>);
    }

  return (
    <>
        <Routes>
            <Route {...rest} element={fun(rest)}/>
        </Routes>
    </>
  )
}

export default CppWithDsaHoc;