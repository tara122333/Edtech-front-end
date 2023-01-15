import React from 'react'
import { useParams } from 'react-router-dom'

import Course from '../Components/Course/Course';
import TokenPage from './Token';
const Home = () => {

  const {type} = useParams();
  
  return (
    <>
        <div>
            { type === "token" && <TokenPage/>}
            { type === "course" && <Course/>}
            { type === "notes" && <h1>Notes</h1>}  
            { type === "placement" && <h1>Placement</h1>}
            { type === "live" && <h1>Live</h1>}
        </div>
    </>
  )
}

export default Home