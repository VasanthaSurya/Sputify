import React from "react";

const BottomFloat = ()=>{
    return (
        <div className="d-flex justify-content-between flex-wrap fixed-bottom gradbtm ps-4 pe-3">
            <div className="p-2">
                <p className="text-light m-0 small-text">PREVIEW OF SPUTIFY</p>
                <b className="text-light text-wrap">Sign up to get unlimited songs and podcasts with occasional ads.No credit card needed.</b>
            </div>
            <div className="p-2">
                <button className="rounded-pill largebtn">
                    <b>Sign up free</b>
                </button>
            </div>
        </div>
    )
}

export default BottomFloat;