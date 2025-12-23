import { useState } from "react";
import { logo_url } from "../utils/constants";   
import { Link } from "react-router-dom";



const Header = () => {
    const [loginButton, setLoginButton] = useState("Login");
    return (
        <div className="haeder">
            <div className="logo-container">
                <img className="logo" 
                src= {logo_url} />
            </div>
            <div className="nev-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <button 
                    className="login-btn"
                    onClick={ () => {
                        loginButton === "Login" ? setLoginButton("Logout") : setLoginButton("Login");
                    } }

                    >{loginButton}</button>
                </ul>
            </div>
        </div>
    )
}


export default Header;