

import HomeHOC from "./HOC/HomeHOC";
import Home from "./Page/Home";
import CoreCppCourse from "./Components/Course/CoreCPP/CoreCppCourse";
import Token from "./Page/Token";
import TokenHOC from "./HOC/TokenHOC";
import Register from "./Page/Register";
import CoreCppHoc from "./HOC/CoreCPPHOC/CoreCppHoc";
import CoreJavaHoc from "./HOC/CoreJAVAHOC/CoreJavaHoc";
import CoreJavaCourse from "./Components/Course/CoreJAVA/CoreJavaCourse";
import CppWithDsaHoc from "./HOC/CPPWithDSAHOC/CppWithDsaHoc";
import Temp from "./Components/Temp";

function App() {
  return (
    <div className="App">
      <HomeHOC path="/:type" exact element={Home}/>
      <HomeHOC path="/" exact element={Register}/>

      <TokenHOC path="/token" exact element={Token}/>
      <CoreCppHoc path="/course/Core-Concept-C++/:id" exact element={CoreCppCourse}/>
      <CppWithDsaHoc path="/course/DSA-C++/:id" exact element={Temp}/>
      <CoreJavaHoc path="/course/Core-Concept-Java/:id" exact element={CoreJavaCourse}/>
    </div>
  );
}

export default App;
