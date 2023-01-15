import React from 'react'
import { Route,Routes} from "react-router-dom";

import CourseDefaultLayout from '../../Layouts/CourseLayout/CourseDefaultLayout';

const CourseHoc = ({element:Component,...rest}) => {
    const fun = (props)=>{
        return (<CourseDefaultLayout> <Component {...props} /> </CourseDefaultLayout>);
    }

  return (
    <>
        <Routes>
            <Route {...rest} element={fun(rest)}/>
        </Routes>
    </>
  )
}

export default CourseHoc