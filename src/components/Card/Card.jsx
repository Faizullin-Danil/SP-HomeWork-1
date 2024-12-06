import React from "react";
import "./Card.css"
import Img from "../Img/Img.jsx"
import Textinfo from "../Textinfo/Textinfo.jsx"

const Card = ({text, src, alt}) => {

    return(
        <div className="card">
            {src && <Img src={src} alt="Dog"/>}
            <Textinfo text={text}/>
        </div>
    )
}
export default Card;