import React from "react";
import "./style.css";

const Header= () => {
    return(
        <div className="options">
        <div>Shopping Cart</div>
        <div className="right-options">
            <span><a href="index.html">Home Page</a></span>
            <span><a href="cart.html">Cart Page</a></span>
        </div>
        </div>
    )
}

export default Header;