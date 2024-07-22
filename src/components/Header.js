import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

    const [btnName, setBtnName] = useState("Login")

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo"
                    src="https://png.pngtree.com/template/20191024/ourmid/pngtree-food-delivery-logo-design-fast-delivery-service-sign-image_323015.jpg"
                />
            </div>
            <div className="navItems">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="AboutUs">AboutUs</Link></li>
                    <li><Link to="ContactUs">Contact us</Link></li>
                    <li>Cart</li>
                    <button className="logButton" onClick={() => {
                        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login") 
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
};

export default Header;