import React from 'react'
import { useEffect } from 'react';


import { useLocation } from "react-router-dom";
import CourseContent from '../Poster/CourseContent';

const CoreCpp = () => {

    const location = useLocation();

    const currentPath = location.pathname;

    useEffect(()=>{
        var accessTokenObj = localStorage.getItem("tokenData");
        console.log("Token is  :");
        console.log(accessTokenObj);

        if(!localStorage.tokenData)  ( window.location.href = `/token`);

    },[]);

    const CoreCPPDetails = [
        {
            id: "01",
            title : "What is C++",
            isActive: currentPath.includes("01"),
        },
        {
            id: "02",
            title : "Introduction to C++",
            isActive: currentPath.includes("02"),
            
        },
        {
            id: "03",
            title : "Arrays",
            isActive: currentPath.includes("03"),

        },
        {
            id: "04",
            title : "Operators in C++",
            isActive: currentPath.includes("04"),

        },
        {
            id: "05",
            title : "Functions in C++",
            isActive: currentPath.includes("05"),

        },
        {
            id: "06",
            title : "Loops in C++",
            isActive: currentPath.includes("06"),

        },
        {
            id: "07",
            title : "IO in C++",
            isActive: currentPath.includes("07"),

        },
        {
            id: "08",
            title : "Conditional Statements in C++",
            isActive: currentPath.includes("08"),

        },
        {
            id: "09",
            title : "Comments in C++",
            isActive: currentPath.includes("09"),

        },
        {
            id: "10",
            title : "Reference Variables in C++",
            isActive: currentPath.includes("10"),

        },
        {
            id: "11",
            title : "Variables and Data types",
            isActive: currentPath.includes("11"),

        },
        {
            id: "12",
            title : "Strings in C++",
            isActive: currentPath.includes("12"),

        },
        {
            id: "13",
            title : "Pointer , Call by reference",
            isActive: currentPath.includes("13"),

        },
        {
            id: "14",
            title : "Pointer Arithmetic 2",
            isActive: currentPath.includes("14"),

        },
        {
            id: "15",
            title : "Pointer Arithmetic",
            isActive: currentPath.includes("15"),

        },
        {
            id: "16",
            title : "Pointer and Dynamic mem alloc",
            isActive: currentPath.includes("16"),

        },
        {
            id: "17",
            title : "Access Specifiers",
            isActive: currentPath.includes("17"),

        },
        {
            id: "18",
            title : " Friend Functions and friend class",
            isActive: currentPath.includes("18"),

        },
        {
            id: "19",
            title : "Constructors and Destructors ",
            isActive: currentPath.includes("19"),

        },
        {
            id: "20",
            title : "Types of Inheritance",
            isActive: currentPath.includes("20"),

        },
        {
            id: "21",
            title : "Static Members of a Class",
            isActive: currentPath.includes("21"),

        },
        {
            id: "22",
            title : " Polymorphism ",
            isActive: currentPath.includes("22"),

        },
        {
            id: "23",
            title : "Object Oriented Programming in C++",
            isActive: currentPath.includes("23"),

        },
        {
            id: "24",
            title : " Multipath inheritance ",
            isActive: currentPath.includes("24"),

        },
        {
            id: "25",
            title : " Inheritance",
            isActive: currentPath.includes("25"),

        },
        {
            id: "26",
            title : "Function Overloading",
            isActive: currentPath.includes("26"),

        },
        {
            id: "27",
            title : " Pure virtual functions and abstract class",
            isActive: currentPath.includes("27"),

        },
        {
            id: "28",
            title : "Runtime polymorphism",
            isActive: currentPath.includes("28"),

        },
        {
            id: "29",
            title : "Function overriding ",
            isActive: currentPath.includes("29"),

        },
        {
            id: "30",
            title : "Operator Overloading",
            isActive: currentPath.includes("30"),

        },
        {
            id: "31",
            title : " File Handling in C++",
            isActive: currentPath.includes("31"),

        },
        {
            id: "32",
            title : "Exception Handling ",
            isActive: currentPath.includes("32"),

        },
        {
            id: "33",
            title : " Lambda Functions ",
            isActive: currentPath.includes("33"),

        },
        {
            id: "34",
            title : "Smart Pointers ",
            isActive: currentPath.includes("34"),

        },
        {
            id: "35",
            title : "Templates in C++",
            isActive: currentPath.includes("35"),

        },
        

    ];

  return (
    <>
    <div>
        <div className='flex flex-col justify-center items-center py-12'>
            {
                CoreCPPDetails.map((data)=>(
                    <CourseContent {...data} url="Core-Concept-C++"/>
                ))
            }
        </div>
    </div>

    </>
  )
}

export default CoreCpp;