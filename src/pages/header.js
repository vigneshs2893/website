import React from "react"
import logo from "../images/prodjar/top_logo.png"
import prodjar from "../images/prodjar/prodjar.png"
import "./header.css"


const header = () => {
    return (
        <div className="head">
            <div>
                <img src={logo}></img>
            </div>
            <div className="sub_head">
            <div>
                <p className="para_1">Design Patnership with</p>
            </div>
            <div>
                <img className="prodjar" src={prodjar}></img>
            </div>
            <div>
                <p className="para_2">
                  Curious to know about who we are? Here it is.<br/><br/>
                  PRODJAR is going to be your wholesome product solution place. A one stop marketplace where you can make your dream product with the support of our expert jar.
                </p>
            </div>
            </div>
        </div>
    );
}
export default header;
