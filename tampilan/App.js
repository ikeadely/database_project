import React from 'react';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import './App.css';
import Login from './Component/Login/Login';
  // import Get from './Get';
// import { Login } from './Component/Form/Login';

// import { Home } from './Component/Pages/Home';
// import { Form } from 'antd';

function App() {
  return (
  <div className='App'>
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  </div>
  );
}

export default App;