import React from 'react'
import Form from '../Login/Form/Form';
import "../Login/Login.css"

const Login = () => {
  return (
        <div className='bg'>
            <h2>Masuk</h2>
            <p>untuk mengakses financial accounting home</p>
            <div className='form'>
                <Form />
            </div>
        </div>
  )
}

export default Login;