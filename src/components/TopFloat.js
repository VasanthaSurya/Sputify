import React from "react";

const TopFloat = ()=>{
    return (
        <div className="d-flex flex-col justify-content-between">
            <div className="p-2">
                <span className="material-icons p-3">arrow_back_ios</span>
                <span className="material-icons p-3">arrow_forward_ios</span>
            </div>
            <div className="p-2">
                <button className="btn btn-light p-2">Sign up</button>
                <button className="btn btn-dark p-2">login in</button>
            </div>
        </div>
    )
}
export default TopFloat;