import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import FormLogin from '../src/Component/Dbform/FormLogin'
import TampilanLogin from "./Component/Login/Form/Formku";
// import { Router, Routes,Route } from "react-router-dom";
// import { Home } from './Component/Pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<TampilanLogin/>} />
          <Route path='/formlogin' element={<FormLogin/>} />
    
        </Routes>
      </Router>
    </div>

  );
}

export default App;

// import React from "react";
// import FormLogin from '../src/Component/Dbform/FormLogin'

// function App() {
//   return (
//     <div className="App">
//       <FormLogin />
//     </div>
//   );
// }