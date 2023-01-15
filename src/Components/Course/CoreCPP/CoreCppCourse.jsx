import React from 'react'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';


import Video from '../Video';
const CoreCppCourse = () => {
    const {id} = useParams();
  toast.success("Video fetched");
    
  return (
    <>
        <div>
        {id === "01" && <Video video = "686570362?h=bcb2adb46c" />}
        {id === "02" && <Video video = "686570362?h=bcb2adb46c" />}
        {id === "03" && <Video video = "686570362?h=bcb2adb46c" />}
        {id === "04" && <Video video = "686570362?h=bcb2adb46c" />}
        {id === "05" && <Video video = "686570362?h=bcb2adb46c" />}
        {id === "06" && <Video video = "686570362?h=bcb2adb46c" />}
        {id === "07" && <Video video = "686570362?h=bcb2adb46c" />}
        {id === "08" && <Video video = "686570362?h=bcb2adb46c" />}
        {id === "09" && <Video video = "686570362?h=bcb2adb46c" />}
        {id === "10" && <Video video = "686570362?h=bcb2adb46c" />}
        {id === "11" && <Video video = "686570362?h=bcb2adb46c" />}
        {id === "12" && <Video video = "686570362?h=bcb2adb46c" />}
        {id === "13" && <Video video = "686570362?h=bcb2adb46c" />}
        {id === "14" && <Video video = "686570362?h=bcb2adb46c" />}
        {id === "15" && <Video video = "686570362?h=bcb2adb46c" />}
        {id === "16" && <Video video = "686570362?h=bcb2adb46c" />}
        {id === "17" && <Video video = "686570362?h=bcb2adb46c" />}
        {id === "18" && <Video video = "686570362?h=bcb2adb46c" />}
        {id === "19" && <Video video = "686570362?h=bcb2adb46c" />}
        {id === "20" && <Video video = "686570362?h=bcb2adb46c" />}
        {id === "21" && <Video video = "686570362?h=bcb2adb46c" />}
        {id === "22" && <Video video = "686570362?h=bcb2adb46c" />}
        {id === "23" && <Video video = "686570362?h=bcb2adb46c" />}
        {id === "24" && <Video video = "686570362?h=bcb2adb46c" />}
        {id === "25" && <Video video = "686570362?h=bcb2adb46c" />}
        {id === "26" && <Video video = "686570362?h=bcb2adb46c" />}
        {id === "27" && <Video video = "686570362?h=bcb2adb46c" />}
        {id === "28" && <Video video = "686570362?h=bcb2adb46c" />}
        {id === "29" && <Video video = "686570362?h=bcb2adb46c" />}
        {id === "30" && <Video video = "686570362?h=bcb2adb46c" />}
        {id === "31" && <Video video = "686570362?h=bcb2adb46c" />}
        {id === "32" && <Video video = "686570362?h=bcb2adb46c" />}
        {id === "33" && <Video video = "686570362?h=bcb2adb46c" />}
        {id === "34" && <Video video = "686570362?h=bcb2adb46c" />}
        {id === "35" && <Video video = "686570362?h=bcb2adb46c" />}
      </div>
    <ToastContainer />

    </>
  )
}

export default CoreCppCourse;