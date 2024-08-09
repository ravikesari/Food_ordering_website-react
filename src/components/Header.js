import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {

    const [btnName, setBtnName] = useState("Login");

    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems)

    return (
        <div className="flex justify-between border shadow-lg">
            <div className="logo-container">
                <img className="w-28 h-28"
                    src="https://png.pngtree.com/template/20191024/ourmid/pngtree-food-delivery-logo-design-fast-delivery-service-sign-image_323015.jpg"
                />
            </div>
            <div className="flex items-center">
                <ul className="flex">
                    <li className="px-5 mx-5 self-center"><Link to="/">Home</Link></li>
                    <li className="px-5 mx-5 self-center"><Link to="AboutUs">AboutUs</Link></li>
                    <li className="px-5 mx-5 self-center"><Link to="ContactUs">Contact us</Link></li>
                    <li className="px-5 mx-5 self-center"><Link to="/cart"> Cart({cartItems.length})</Link></li>
                    <button className="px-5 mx-5 w-24 p-2 bg-orange-300 rounded-lg" onClick={() => {
                            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
                        }}>{btnName}
                    </button>
                </ul>
            </div>
        </div>
    )
};

export default Header;