import React from 'react'
import { useParams } from 'react-router-dom'

import Course from '../Components/Course/Course';
import TokenPage from './Token';

import Temp from '../Components/Temp';
import LiveMentor from '../Components/LiveMentorship/LiveMentor';
const Home = () => {

  const {type} = useParams();
  
  return (
    <>
        <div className='pb-20'>
            { type === "token" && <TokenPage/>}
            { type === "course" && <Course/>}
            { type === "notes" && <Temp/>}  
            { type === "placement" && <Temp/>}
            { type === "live" && <LiveMentor />}
            
        </div>
    </>
  )
}

export default Home