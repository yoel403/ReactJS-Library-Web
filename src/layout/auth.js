import React from 'react'
import "../styles/pages/login.css"
import logoImage from "../assets/bookshelf.png"
import Copyright from '../components/Copyright';

const Auth = (props) => {
    const {children} = props;
  return (
    <div className="Wrapper">
        <div className="leftside">
            <h2>Study is harder <br /> than you know</h2>
        </div>
        <div className="rightside">
            <img src={logoImage} alt="" />
            {children}
            <div className="rights">
              <Copyright/>
            </div>
        </div>
    </div>
  )
}

export default Auth