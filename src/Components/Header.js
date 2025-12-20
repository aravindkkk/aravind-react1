import { logo_url } from "../utils.js/constants";   


const Header = () => {
    return (
        <div className="haeder">
            <div className="logo-container">
                <img className="logo" 
                src= {logo_url} />
            </div>
            <div className="nev-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}


export default Header;