import React from 'react'
import FormLogin from '../Dbform/FormLogin';
import "../Dbform/FormLogin.css"

const Login = () => {
  return (
        <div className='bg'>
            <h2>Siapkan profil anda</h2>
            <div className='FormLogin'>
                <FormLogin />
            </div>
        </div>
  )
}

export default FormLogin;