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
            title : "Welcome To Alpha",
            isActive: currentPath.includes("01"),
            access_Link : "https://www.google.com/"
            
        },
        {
            id: "02",
            title : "Course Introduction",
            isActive: currentPath.includes("02"),
            access_Link : "https://www.google.com/"
            
            
        },
        {
            id: "03",
            title : "Prerequisites",
            isActive: currentPath.includes("03"),
            access_Link : "https://www.google.com/"
            

        },
        {
            id: "04",
            title : "Flowcharts",
            isActive: currentPath.includes("04"),
            access_Link : "https://www.google.com/"
            

        },
        {
            id: "05",
            title : "Variable & Data Structure",
            isActive: currentPath.includes("05"),
            access_Link : "https://www.google.com/"
            

        },
        {
            id: "06",
            title : "Operators",
            isActive: currentPath.includes("06"),
            access_Link : "https://www.google.com/"
            

        },
        {
            id: "07",
            title : "Conditional Sttatement",
            isActive: currentPath.includes("07"),
            access_Link : "https://www.google.com/"
            

        },
        {
            id: "08",
            title : "Loops",
            isActive: currentPath.includes("08"),
            access_Link : "https://www.google.com/"
            

        },
        {
            id: "09",
            title : "Patterns (Part -I)",
            isActive: currentPath.includes("09"),
            access_Link : "https://www.google.com/"
            

        },
        {
            id: "10",
            title : "Function & Methods",
            isActive: currentPath.includes("10"),
            access_Link : "https://www.google.com/"
            

        },
        {
            id: "11",
            title : "Pattern Advanced (Part-II)",
            isActive: currentPath.includes("11"),
            access_Link : "https://www.google.com/"
            

        },
        {
            id: "12",
            title : "Arrays",
            isActive: currentPath.includes("12"),
            access_Link : "https://www.google.com/"
            

        },
        {
            id: "13",
            title : "Basic Sorting Algorithm",
            isActive: currentPath.includes("13"),
            access_Link : "https://www.google.com/"
            

        },
        {
            id: "14",
            title : "2-D Arrays",
            isActive: currentPath.includes("14"),
            access_Link : "https://www.google.com/"
            

        },
        {
            id: "15",
            title : "Strings",
            isActive: currentPath.includes("15"),
            access_Link : "https://www.google.com/"
            

        },
        {
            id: "16",
            title : "Bit Manipulation",
            isActive: currentPath.includes("16"),
            access_Link : "https://www.google.com/"
            

        },
        {
            id: "17",
            title : "Oops",
            isActive: currentPath.includes("17"),
            access_Link : "https://www.google.com/"
            

        },
        {
            id: "18",
            title : "Recursion",
            isActive: currentPath.includes("18"),
            access_Link : "https://www.google.com/"
            

        },
        {
            id: "19",
            title : "Divide And Conquer",
            isActive: currentPath.includes("19"),
            access_Link : "https://www.google.com/"
            

        },
        {
            id: "20",
            title : "Time Complexity",
            isActive: currentPath.includes("20"),
            access_Link : "https://www.google.com/"
            

        },
        {
            id: "21",
            title : "Backtracking",
            isActive: currentPath.includes("21"),
            access_Link : "https://www.google.com/"
            

        },
        {
            id: "22",
            title : "Array List",
            isActive: currentPath.includes("22"),
            access_Link : "https://www.google.com/"
            

        },
        {
            id: "23",
            title : "Linked List (part-I)",
            isActive: currentPath.includes("23"),
            access_Link : "https://www.google.com/"
            

        },
        {
            id: "24",
            title : "Linked List (part-II)",
            isActive: currentPath.includes("24"),
            access_Link : "https://www.google.com/"
            

        },
        {
            id: "25",
            title : "Stacks",
            isActive: currentPath.includes("25"),
            access_Link : "https://www.google.com/"
            

        },
        {
            id: "26",
            title : "Queues",
            isActive: currentPath.includes("26"),
            access_Link : "https://www.google.com/"
            

        },
        {
            id: "27",
            title : "Greedy Algorithm",
            isActive: currentPath.includes("27"),
            access_Link : "https://www.google.com/"
            

        },
        {
            id: "28",
            title : "Binary Trees (part-I)",
            isActive: currentPath.includes("28"),
            access_Link : "https://www.google.com/"
            
        },
        {
            id: "29",
            title : "Binary Trees (part-II)",
            isActive: currentPath.includes("28"),
            access_Link : "https://www.google.com/"
            
        },
        {
            id: "30",
            title : "Binary Trees (part-III)",
            isActive: currentPath.includes("28"),
            access_Link : "https://www.google.com/"
            
        },
        {
            id: "31",
            title : "Binary Search Trees (part-I)",
            isActive: currentPath.includes("28"),
            access_Link : "https://www.google.com/"
            
        },
        {
            id: "32",
            title : "Binary Search Trees (part-II)",
            isActive: currentPath.includes("28"),
            access_Link : "https://www.google.com/"
            
        },
        {
            id: "33",
            title : "Heap",
            isActive: currentPath.includes("28"),
            access_Link : "https://www.google.com/"
            
        },
        {
            id: "34",
            title : "Hashing",
            isActive: currentPath.includes("28"),
            access_Link : "https://www.google.com/"
            
        },
        {
            id: "35",
            title : "Tries",
            isActive: currentPath.includes("28"),
            access_Link : "https://www.google.com/"
            
        },
        {
            id: "36",
            title : "Graphs (part-I)",
            isActive: currentPath.includes("28"),
            access_Link : "https://www.google.com/"
            
        },
        {
            id: "37",
            title : "Graphs (part-II)",
            isActive: currentPath.includes("28"),
            access_Link : "https://www.google.com/"
            
        },
        {
            id: "38",
            title : "Graphs (part-III)",
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