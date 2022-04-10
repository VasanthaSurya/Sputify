import React from "react";
import sputify from "./spotify.png";

const Logo = () =>{
    return (
        <div className="container logo fw-bold p-2 d-flex">
            <img height={'50rem'} width={'50rem'} src={sputify} alt="Spotify logo" />
            <p className="p-2">Sputify</p>
        </div>
    )
}

export default Logo;