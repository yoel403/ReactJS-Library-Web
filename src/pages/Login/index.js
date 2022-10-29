import React, { useState } from 'react'
import Formscomp from '../../components/Forms/login';
import "../../styles/pages/login.css"

import Auth from '../../layout/auth';
import { Link } from 'react-router-dom';

const Logintab = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const usernameChange = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  };

  const passwordChange = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const checkUser = (e) => {
    e.preventDefault();
    if (username === "yoel@gmail.com") {
      if (password === "yoel120804") {
        alert("Success Login!");
        window.location.replace("/Home");
      } else {
        alert("Password salah, silahkan ulangi!");
      }
    } else {
      alert("User tidak ditemukan, silahkan regis terlebih dahulu!");
    }
  };
  return <Auth>
      <form className='mt-5 pt-3'>
      <h2>Login</h2>
      <p>Welcome back, please login to go to your account</p>
          <div className='mt-3 input'>
            <input
              type={"text"}
              placeholder="Username"
              onChange={(e) => usernameChange(e)}
            />
          </div>
          <div className='input mt-2'>
            <input
              type={"password"}
              placeholder="Password"
              onChange={(e) => passwordChange(e)}
            />
          </div>
          <div className="form-check mb-2 d-flex justify-content-between mt-3">
                <div className="remember d-flex align-items-center">

                  <input className="form-check-input" type="checkbox" value="" id="rememberPasswordCheck" />
                  <label className="form-check-label" for="rememberPasswordCheck">Remember Me</label>

                </div>

                <div className="text-center">
                  <a className="small" href="#">Forgot password?</a>
                </div>

              </div>
          <div className="btn-login">
            <Link to='/Home'>
              <button className="login" type="submit" onClick={(e) => checkUser(e)} value="Enter">Login</button>
            </Link>
            <Link to='/Register'><button className="signup">Sign Up</button></Link>
          </div>
        </form>
  </Auth>
}

export default Logintab;