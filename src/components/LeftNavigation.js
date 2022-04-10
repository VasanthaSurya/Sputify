import React from "react";
import Logo from "./Logo";

const LeftNavigation = ()=>{
    return (
        <div className="navlinks d-flex flex-column">
            <div className="mb-auto">
                <Logo />
                <div className='p-2'>
                    <div className="d-flex">
                        <span class="material-icons p-2 pt-0">home</span>  
                        <a href='/' className="navlinks">Home</a>
                    </div>    
                </div>
                <div className='p-2'>
                    <div className="d-flex">  
                        <span class="material-icons p-2 pt-0">search</span>
                        <a href='/' className="navlinks">Search</a>
                    </div>    
                </div>
                <div className='p-2'>
                    <div className="d-flex">  
                        <span class="material-icons p-2 pt-0">library_music</span>
                        <a href='/' className="navlinks">Your library</a>
                    </div>    
                </div>
                <div className='p-2 small-text d-flex'>
                    <span class="material-icons p-2 pt-0">add</span>
                    <a href='/' className="navlinks">Create Playlist</a>
                </div>
                <div className='p-2 small-text d-flex'>
                    <span class="material-icons p-2 pt-0">favorite</span>
                    <a href='/' className="navlinks">Liked Songs</a>
                </div>
                <hr/>
            </div>
            <div>
                <div className='p-2 ps-4 small-text'><a href='/' className="navlinks">Cookies</a></div>
                <div className='p-2 ps-4 small-text'><a href='/' className="navlinks">Privacy</a></div>
            </div>
        </div>
    )
}
export default LeftNavigation;