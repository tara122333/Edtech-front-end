

import HomeHOC from "./HOC/HomeHOC";
import Home from "./Page/Home";
// import CourseHoc from "./HOC/Course/CourseHoc";
import CoreCppHoc from "./HOC/CoreCPPHOC/CoreCppHoc";
import CoreCppCourse from "./Components/Course/CoreCPP/CoreCppCourse";
import Token from "./Page/Token";

import TokenHOC from "./HOC/TokenHOC";
import Register from "./Page/Register";

function App() {
  return (
    <div className="App">
      {/* <HomeHOC path="/:type" exact element={Home}/> */}
      <HomeHOC path="/" exact element={Register}/>

      {/* <TokenHOC path="/token" exact element={Token}/> */}
      {/* <HomeHOC path="/course/:id" exact element={CoreCpp}/> */}
      {/* <CoreCppHoc path="/course/Core-Concept-C++/:id" exact element={CoreCppCourse}/> */}
    </div>
  );
}

export default App;
