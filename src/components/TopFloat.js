import React from "react";

const TopFloat = ()=>{
    return (
        <div className="d-flex flex-col justify-content-between dark-primary topfloat">
            <div className="p-2">
                <span className="material-icons rounded-circle dark-bg text-light p-2">arrow_back_ios</span><span> </span>
                <span className="material-icons rounded-circle dark-bg text-light p-2">arrow_forward_ios</span>
            </div>
            <div className="p-2">
                <button className="btnsml btn rounded-pill dark-primary text-light p-2">Sign up</button><span> </span>
                <button className="btnsml btn fw-bold btn-light rounded-pill p-2">Log in</button>
            </div>
        </div>
    )
}
export default TopFloat;