import { Route,Routes} from "react-router-dom";


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
import Error404 from "./Components/Error/Error404";

function App() {
  return (
    <div className="App">
      <HomeHOC path="/:type" exact element={Home}/>
      <HomeHOC path="/" exact element={Register}/>
      <Routes>
        <Route path="/registration/page" element={<Register />} />
      </Routes>
      <TokenHOC path="/auth/token" exact element={Token}/>
      {/* <CoreCppHoc path="/course/Core-Concept-C++/:id" exact element={CoreCppCourse}/> */}
      <CppWithDsaHoc path="/course/Core-Concept-C++/:id" exact element={Temp}/>
      <CppWithDsaHoc path="/course/DSA-C++/:id" exact element={Temp}/>
      <CoreJavaHoc path="/course/Core-Concept-Java/:id" exact element={CoreJavaCourse}/>
    </div>
  );
}

export default App;
