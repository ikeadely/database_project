import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import FormLogin from './Component/Dbform/FormLogin';
// import ListCard from './Component/List/ListCard'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <FormLogin /> */}
    {/* <ListCard /> */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
