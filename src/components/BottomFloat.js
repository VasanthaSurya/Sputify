import React from "react";

const BottomFloat = ()=>{
    return (
        <div className="d-flex justify-content-between flex-wrap fixed-bottom bg-dark">
            <div className="p-2">
                <h6 className="text-light">Preview of Spotify</h6>
                <b className="text-light">Sign up to get unlimited songs and podcasts with occasional ads.No credit card needed.</b>
            </div>
            <div className="p-2">
                <button className="button button-primary">
                    Sign up free
                </button>
            </div>
        </div>
    )
}

export default BottomFloat;