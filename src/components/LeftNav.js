import React from "react";
import Logo from "./Logo";

const leftNav = () =>{
    return (
        <div className='container w-10 flex-column' style={{backgroundColor:"#000000"}}>
            <Logo />
            <div className='p-2'><a href='#'>Home</a></div>
            <div className='p-2'><a href='#'>Search</a></div>
            <div className='p-2'><a href='#'>Your Library</a></div>
        </div>
    )
}

export default leftNav;