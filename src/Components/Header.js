import { useContext, useState } from "react";
import { logo_url } from "../utils/constants";   
import { Link } from "react-router-dom";
import userContext from "../utils/UserContext";
import { useSelector } from "react-redux";



const Header = () => {
    const { loggedInUser } = useContext(userContext);
    const [loginButton, setLoginButton] = useState("Login");
    const cartItems = useSelector((store) => store.cart.items);
    return (
        <div className="flex justify-between bg-slate-400  shadow-lg rounded-md sm:bg-yellow-50 lg:bg-green-50 px-4">
            <div className="flex bg-white  p-2 rounded-md">
                <img className="w-50 cursor-pointer" 
                src= {logo_url} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4  space-x-6 font-bold text-gray-600">
                    <li className="px-4 hover:bg-slate-50 py-4 rounded-xl"><Link to="/">Home</Link></li>
                    <li className="px-4 hover:bg-slate-50 py-4 rounded-xl"><Link to="/about">About Us</Link></li>
                    <li className="px-4 hover:bg-slate-50 py-4 rounded-xl"><Link to="/contact">Contact Us</Link></li>
                     <li className="px-4 hover:bg-slate-50 py-4 rounded-xl font-bold text-xl">
                        <Link to="/cart"><span>Cart - ({cartItems.length} items)</span></Link>
                    </li>
                                <li className="px-4 py-4 font-bold text-green-700 ">
                      {loggedInUser}
                    </li>
                    <button 
                    className="px-4 bg-slate-50  py-4 rounded-xl"
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