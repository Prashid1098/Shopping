import React from "react";
import  ReactDOM  from "react-dom";
import "./style.css";
import Header from "./Header.js";
import Info from "./Info.js";

function Display()
{
    return(
        <div>
            <Header />
            <div className="content">
                <div className="All-items">All Items</div>
            </div>
            <Info /> 
        </div>
    )
}



ReactDOM.render(<Display/>, document.getElementById('root')); 