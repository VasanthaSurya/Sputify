import React from "react";
import logoimg from "./kolly.png";

const Card = (props) =>{
    return (
        <div className="card bg-dark" style={{width:"12rem",height:"18rem"}}>
            <img className="card-img-top p-2 w-100 h-60" src={logoimg} alt="Card" />
            <div className="card-body overflow-hidden">
                <h6 className="font-weight-bold card-title text-white">{props.cardTitle}</h6>
                <p className="card-text text-white">Some quick example text to build on the card.</p>
            </div>
        </div>
    )
}

export default Card;