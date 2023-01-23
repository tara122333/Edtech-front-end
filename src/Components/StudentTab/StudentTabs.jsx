import React, { useState } from 'react'
import { Link, useParams } from "react-router-dom";
import {CgNotes} from 'react-icons/cg';
import {RiLiveLine} from 'react-icons/ri';
import {MdWorkOutline,MdOutlineExplore} from 'react-icons/md'

const MobileTabs = ()=>{

    const [allTypes] = useState([
        {
          id: "course",
          name: "Course",
          icon : <MdOutlineExplore/>
        },
        {
            id: `live`,
            name: "LiveMentorship",
            icon : <RiLiveLine />
          },
          
        {
          id: "notes",
          name: "Notes",
          icon : <CgNotes />
        },
        {
          id: 'placement',
          name: "Placement",
          icon : <MdWorkOutline/>
        },
        
      ]); 

      const {type} = useParams();

    return(
        <>
            <div className="fixed bottom-0 left-0 p-3 bg-white shadow-lg flex w-full justify-around md:justify-evenly items-center lg:hidden gap-2 z-10">
                
                {
                    allTypes.map((items)=>(
                        <Link to={`/${items.id}`}>
                            <div className={type=== items.id ? "flex relative justify-center items-center flex-col text-xl text-red-400" : "flex justify-center items-center flex-col text-xl"}>
                                {items.icon}
                                <div className={type === items.id ? "absolute -top-3 w-full h-2 border-t-2 border-red-400" : ""} />
                                <h5 className="text-sm">
                                    {items.name}
                                </h5>
                            </div>
                        </Link>
                    ))

                }
            </div>
        </>
    );
}

const LargeTabs = ()=>{
    const [allTypes] = useState([
        {
            id: "course",
            name: "Course",
            icon : <MdOutlineExplore/>
          },
          {
            id: `live`,
            name: "LiveMentorship",
            icon : <RiLiveLine />
          },

          {
            id: "notes",
            name: "Notes",
            icon : <CgNotes />
          },
          {
            id: 'placement',
            name: "Placement",
            icon : <MdWorkOutline/>
          },
          
      ]); 

      const {type} = useParams();

    return(
        <>
            <div className="fixed bottom-0 left-0 p-3 bg-white shadow-lg w-full justify-around md:justify-evenly items-center hidden lg:flex gap-2 z-10">
                
                {
                    allTypes.map((items)=>(
                        <Link to={`/${items.id}`}>
                            <div className={type=== items.id ? "flex relative justify-center items-center flex-col text-4xl text-red-400" : "flex justify-center items-center flex-col text-3xl"}>
                                {items.icon}
                                <div className={type === items.id ? "absolute -top-3 w-full h-2 border-t-2 border-red-400" : ""} />
                                <h5 className="text-xl">
                                    {items.name}
                                </h5>
                            </div>
                        </Link>
                    ))

                }
            </div>
        </>
    );
}


const StudentTabs = () => {
    return(
        <>
            <div>
                <MobileTabs />
                <LargeTabs />
            </div>
        </>
    );
}

export default StudentTabs;