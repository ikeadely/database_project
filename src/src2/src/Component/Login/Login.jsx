import React from 'react'
import Form from './Form/Formku';
import "../Login/Login.css"

const Login = () => {
  return (
        <div className='bg'>
            <h2>Welcome</h2>
            <p>Let us know where your business is & we'll optimize Acoounting Books accordingly!</p>
            <div className='form'>
                <Form />
            </div>
        </div>
  )
}

export default Login;