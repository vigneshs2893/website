import React from 'react'
import "./body.css"
import background from "../images/prodjar/background.png"
const body = (props) =>
{
    return(
    <div>
        <div className="line"></div>
        <div className="main_class">
        <div>
             <h1 className="title">{props.title}</h1>
             <h3 className="sub_title">{props.sub_title}</h3>
             <h2 className="topic">{props.topic}</h2>
             <p className="description">{props.description}</p>
             <div className="table">
             <div>
                 <p className="table_content1">{props.table_content1}</p>
                 <p className="table_content2">{props.table_content2}</p>
             </div>
             <div>
                 <p className="table_content3">{props.table_content3}</p>
                 <p className="table_content4">{props.table_content4}</p>
             </div>
             </div>
        </div>
        <div>
            {/* <a href='#'> Click here</a> */}
            <img className="image" src={props.image}></img>
            <img className="background" src={background}></img>
        </div>
        </div>
        <div className="line_2"></div>
    </div>
);
}
export default body;