import React from 'react'
import "../../styles/pages/register.css"
import logoImage from "../../assets/bookshelf.png"
import Signupcomp from '../../components/Forms/signup'
import Copyright from '../../components/Copyright'
import Auth from '../../layout/auth'

const Registertab = () => {
  return <Auth>
    <div className="formss">
      <h2>Register</h2>
      <p>Welcome back, please register to create your account</p>
      <Signupcomp/>
      </div>
  </Auth>
}

export default Registertab