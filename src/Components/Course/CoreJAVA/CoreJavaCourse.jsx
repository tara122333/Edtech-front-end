import React from 'react'
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
// import Video from '../Video';

import Visited from '../Visited';
const CoreJavaCourse = () => {

    const {id} = useParams();
  toast.success("Video fetched");

  return (
    <>
        <div>
        {id === "01" && <Visited access_Link="https://mega.nz/folder/Pdo2wISS#76DupvNz6IPxZgbF1_i-sg/folder/mAojQB5b" title="Welcome To Alpha"/>}
        {id === "02" && <Visited access_Link="https://mega.nz/folder/Pdo2wISS#76DupvNz6IPxZgbF1_i-sg/folder/XcplwTza" title="Course Introduction"/>}
        {id === "03" && <Visited access_Link="https://mega.nz/folder/Pdo2wISS#76DupvNz6IPxZgbF1_i-sg/folder/iEgHyJjR" title="Prerequisites"/>}
        {id === "04" && <Visited access_Link="https://mega.nz/folder/Pdo2wISS#76DupvNz6IPxZgbF1_i-sg/folder/fc4DXZZb" title="Flowcharts"/>}
        {id === "05" && <Visited access_Link="https://mega.nz/folder/Pdo2wISS#76DupvNz6IPxZgbF1_i-sg/folder/rF5RWb6C" title="Variable & Data Structure"/>}
        {id === "06" && <Visited access_Link="https://mega.nz/folder/Pdo2wISS#76DupvNz6IPxZgbF1_i-sg/folder/fJ5lELzD" title="Operators"/>}
        {id === "07" && <Visited access_Link="https://mega.nz/folder/Pdo2wISS#76DupvNz6IPxZgbF1_i-sg/folder/yY41XLjZ" title="Conditional Sttatement"/>}
        {id === "08" && <Visited access_Link="https://mega.nz/folder/Pdo2wISS#76DupvNz6IPxZgbF1_i-sg/folder/OV4BURrT" title="Loops"/>}
        {id === "09" && <Visited access_Link="https://mega.nz/folder/Pdo2wISS#76DupvNz6IPxZgbF1_i-sg/folder/6dpVkBRK" title="Patterns (Part -I)"/>}
        {id === "10" && <Visited access_Link="https://mega.nz/folder/Pdo2wISS#76DupvNz6IPxZgbF1_i-sg/folder/Xc4jmRYZ" title="Function & Methods"/>}
        {id === "11" && <Visited access_Link="https://mega.nz/folder/Pdo2wISS#76DupvNz6IPxZgbF1_i-sg/folder/md5zzLgb" title="Pattern Advanced (Part-II)"/>}
        {id === "12" && <Visited access_Link="https://mega.nz/folder/Pdo2wISS#76DupvNz6IPxZgbF1_i-sg/folder/rFp3jZpZ" title="Arrays"/>}
        {id === "13" && <Visited access_Link="https://mega.nz/folder/Pdo2wISS#76DupvNz6IPxZgbF1_i-sg/folder/Sdo1HJQT" title="Basic Sorting Algorithm"/>}
        {id === "14" && <Visited access_Link="https://mega.nz/folder/Pdo2wISS#76DupvNz6IPxZgbF1_i-sg/folder/nUp3DJoa" title="2-D Arrays"/>}
        {id === "15" && <Visited access_Link="https://mega.nz/folder/Pdo2wISS#76DupvNz6IPxZgbF1_i-sg/folder/PEoREBTQ" title="Strings"/>}
        {id === "16" && <Visited access_Link="https://mega.nz/folder/Pdo2wISS#76DupvNz6IPxZgbF1_i-sg/folder/LAwjgTpQ" title="Bit Manipulation"/>}
        {id === "17" && <Visited access_Link="https://mega.nz/folder/Pdo2wISS#76DupvNz6IPxZgbF1_i-sg/folder/SU4FDRxa" title="Oops"/>}
        {id === "18" && <Visited access_Link="https://mega.nz/folder/Pdo2wISS#76DupvNz6IPxZgbF1_i-sg/folder/LRonHRSb" title="Recursion"/>}
        {id === "19" && <Visited access_Link="https://mega.nz/folder/Pdo2wISS#76DupvNz6IPxZgbF1_i-sg/folder/mFpTxR7a" title="Divide And Conquer"/>}
        {id === "20" && <Visited access_Link="https://mega.nz/folder/Pdo2wISS#76DupvNz6IPxZgbF1_i-sg/folder/nZxVEZQb" title="Time Complexity"/>}
        {id === "21" && <Visited access_Link="https://mega.nz/folder/Pdo2wISS#76DupvNz6IPxZgbF1_i-sg/folder/3Uo3TbgQ" title="Backtracking"/>}
        {id === "22" && <Visited access_Link="https://mega.nz/folder/Pdo2wISS#76DupvNz6IPxZgbF1_i-sg/folder/jUwB1RIT" title="Array List"/>}
        {id === "23" && <Visited access_Link="https://mega.nz/folder/Pdo2wISS#76DupvNz6IPxZgbF1_i-sg/folder/yFolDTiS" title="Linked List (part-I)"/>}
        {id === "24" && <Visited access_Link="https://mega.nz/folder/Pdo2wISS#76DupvNz6IPxZgbF1_i-sg/folder/DYpzQJAI" title="Linked List (part-II)"/>}
        {id === "25" && <Visited access_Link="https://mega.nz/folder/Pdo2wISS#76DupvNz6IPxZgbF1_i-sg/folder/7IwxlT7a" title="Stacks"/>}
        {id === "26" && <Visited access_Link="https://mega.nz/folder/Pdo2wISS#76DupvNz6IPxZgbF1_i-sg/folder/uZo1SJRY" title="Queues"/>}
        {id === "27" && <Visited access_Link="https://mega.nz/folder/Pdo2wISS#76DupvNz6IPxZgbF1_i-sg/folder/uF5DFDTS" title="Greedy Algorithm"/>}
        {id === "28" && <Visited access_Link="https://mega.nz/folder/Pdo2wISS#76DupvNz6IPxZgbF1_i-sg/folder/XVhBFLzQ" title="Binary Trees (part-I)"/>}
        {id === "29" && <Visited access_Link="https://mega.nz/folder/Pdo2wISS#76DupvNz6IPxZgbF1_i-sg/folder/LM5xHTzY" title="Binary Trees (part-II)"/>}
        {id === "30" && <Visited access_Link="https://mega.nz/folder/Pdo2wISS#76DupvNz6IPxZgbF1_i-sg/folder/XEoVRJJL" title="Binary Trees (part-III)"/>}
        {id === "31" && <Visited access_Link="https://mega.nz/folder/Pdo2wISS#76DupvNz6IPxZgbF1_i-sg/folder/jEpzERCa" title="Binary Search Trees (part-I)"/>}
        {id === "32" && <Visited access_Link="https://mega.nz/folder/Pdo2wISS#76DupvNz6IPxZgbF1_i-sg/folder/rF41ELCa" title="Binary Search Trees (part-II)"/>}
        {id === "33" && <Visited access_Link="https://mega.nz/folder/Pdo2wISS#76DupvNz6IPxZgbF1_i-sg/folder/SY5HzRzJ" title="Heap"/>}
        {id === "34" && <Visited access_Link="https://mega.nz/folder/Pdo2wISS#76DupvNz6IPxZgbF1_i-sg/folder/iI5nFTia" title="Hashing"/>}
        {id === "35" && <Visited access_Link="https://mega.nz/folder/Pdo2wISS#76DupvNz6IPxZgbF1_i-sg/folder/fM5VibRR" title="Tries"/>}

        {id === "36" && <Visited access_Link="https://mega.nz/folder/Pdo2wISS#76DupvNz6IPxZgbF1_i-sg/folder/WJxBTbQB" title="Graphs (part-I)"/>}
        {id === "37" && <Visited access_Link="https://mega.nz/folder/Pdo2wISS#76DupvNz6IPxZgbF1_i-sg/folder/6FxzARTZ" title="Graphs (part-II)"/>}
        {id === "38" && <Visited access_Link="https://mega.nz/folder/Pdo2wISS#76DupvNz6IPxZgbF1_i-sg/folder/qEoxiRAQ" title="Graphs (part-III)"/>}
      </div>


        {/* <div>
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
      </div> */}
    <ToastContainer />
    </>
  )
}

export default CoreJavaCourse