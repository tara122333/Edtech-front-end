import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import CourseContent from '../Poster/CourseContent';

const CoreJava = () => {

    const location = useLocation();

    const currentPath = location.pathname;

    useEffect(()=>{
        var accessTokenObj = localStorage.getItem("tokenData");
        console.log("Token is  :");
        console.log(accessTokenObj);

        if(!localStorage.tokenData)  ( window.location.href = `/token`);

    },[]);


    const CoreJAVADetails = [
        {
            id: "01",
            title : "What is Java",
            isActive: currentPath.includes("01"),
            
        },
        {
            id: "02",
            title : "Features of Java",
            isActive: currentPath.includes("02"),
            
            
        },
        {
            id: "03",
            title : "Installing and Configuration Java",
            isActive: currentPath.includes("03"),
            

        },
        {
            id: "04",
            title : "The Java Environment",
            isActive: currentPath.includes("04"),
            

        },
        {
            id: "05",
            title : "Java Program Structure",
            isActive: currentPath.includes("05"),
            

        },
        {
            id: "06",
            title : "Simple Java Program",
            isActive: currentPath.includes("06"),
            

        },
        {
            id: "07",
            title : " Variables in JAVA",
            isActive: currentPath.includes("07"),
            

        },
        {
            id: "08",
            title : " Data Types in JAVA",
            isActive: currentPath.includes("08"),
            

        },
        {
            id: "09",
            title : "Constants in JAVA",
            isActive: currentPath.includes("09"),
            

        },
        {
            id: "10",
            title : "JAVA Type Casting or Type Conversion",
            isActive: currentPath.includes("10"),
            

        },
        {
            id: "11",
            title : "Operators in JAVA ",
            isActive: currentPath.includes("11"),
            

        },
        {
            id: "12",
            title : "Decision making & branching ",
            isActive: currentPath.includes("12"),
            

        },
        {
            id: "13",
            title : "Decision making & looping ",
            isActive: currentPath.includes("13"),
            

        },
        {
            id: "14",
            title : "Classes & Objects ",
            isActive: currentPath.includes("14"),
            

        },
        {
            id: "15",
            title : "Constructor ",
            isActive: currentPath.includes("15"),
            

        },
        {
            id: "16",
            title : " Inheritance",
            isActive: currentPath.includes("16"),
            

        },
        {
            id: "17",
            title : "overloading and overriding",
            isActive: currentPath.includes("17"),
            

        },
        {
            id: "18",
            title : " Final class method & varriable ",
            isActive: currentPath.includes("18"),
            

        },
        {
            id: "19",
            title : "Arrays ",
            isActive: currentPath.includes("19"),
            

        },
        {
            id: "20",
            title : "Dynamic arrays",
            isActive: currentPath.includes("20"),
            

        },
        {
            id: "21",
            title : " Strings ",
            isActive: currentPath.includes("21"),
            

        },
        {
            id: "22",
            title : "  Packages ",
            isActive: currentPath.includes("22"),
            

        },
        {
            id: "23",
            title : "Introduction to multithreading",
            isActive: currentPath.includes("23"),
            

        },
        {
            id: "24",
            title : " Lifecycle of a thread ",
            isActive: currentPath.includes("24"),
            

        },
        {
            id: "25",
            title : " Errors and exceptions",
            isActive: currentPath.includes("25"),
            

        },
        {
            id: "26",
            title : "Try and catch ",
            isActive: currentPath.includes("26"),
            

        },
        {
            id: "27",
            title : " Finally and throw ",
            isActive: currentPath.includes("27"),
            

        },
        {
            id: "28",
            title : "Input using Scanner class ",
            isActive: currentPath.includes("28"),
            

        },
        
    ];


  return (
    <>
        <div>
        <div className='flex flex-col justify-center items-center py-12'>
            {
                CoreJAVADetails.map((data)=>(
                    <CourseContent {...data} url="Core-Concept-Java"/>
                ))
            }
        </div>
    </div>
    </>
  )
}

export default CoreJava