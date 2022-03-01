import React from "react";
import logoimg from "./kolly.png";
import play from "./play.png";


const Card = (props) =>{
    return (
        <div className="card bg-dark" id="card-background" style={{width:"12rem",height:"18rem"}}>
            <img className="card-img-top p-2 w-100 h-60 position-relative" src={logoimg} alt="Card" />
            <a className="position-absolute top-50 end-0" href="">
                <img src={play} 
                    alt="play_button" 
                    width="45px" 
                    height="45px"
                    id="hiddenplaybutton"
                    className="rounded-circle d-none"
                    />
            </a>
            <div className="card-body overflow-hidden">
                <h6 className="font-weight-bold card-title text-white">{props.cardTitle}</h6>
                <p className="card-text text-white">Some quick example text to build on the card.</p>
            </div>
        </div>
    )
}

export default Card;