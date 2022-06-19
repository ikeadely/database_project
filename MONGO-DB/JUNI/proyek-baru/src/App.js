import React from "react";
// import Home from "./Component/Home/Home";
// import Home from "./Component/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Daftar from "./Component/Home/Daftar";
import Data from "./Component/Home/Data";




function App(){
  return(
    <header>
   <Router>
      <Routes>
      <Route path="/" element={<Data/>}/>
      </Routes>
     
    </Router>
    
    

    </header>
 
    
  )
}

export default App;
