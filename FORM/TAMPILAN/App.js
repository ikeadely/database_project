import React from "react";
// import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
// import ListCard from '../src/Component/List/ListCard'
// import FormLogin from '../src/Component/Dbform/FormLogin'
import Dbform from '../src/Component/Dbform'
// import Login from './Component/Login/Login';
// import { Home } from './Component/Pages/Home';

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      {/* <ListCard /> */}
      <Dbform />
    </div>

  );
}

// export default App;

// import React from "react";
// import FormLogin from '../src/Component/Dbform/FormLogin'

// function App() {
//   return (
//     <div className="App">
//       <FormLogin />
//     </div>
//   );
// }