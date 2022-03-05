import React from "react";
import Logo from "./Logo";

const leftNav = () =>{
    return (
        <div className='container flex-column dark'>
            <Logo />
            <div className="h-20">
                <div className='p-4 d-flex flex-row'>
                    <div>
                        <img src='' alt="home logo"/>
                    </div> 
                    <div>  
                    <a href='#'>Home</a>
                    </div>    
                </div>
                <div className='p-4 d-flex flex-row'>
                    <div>
                        <img src='' alt="search logo"/>
                    </div> 
                    <div>  
                    <a href='#'>Search</a>
                    </div>    
                </div>
                <div className='p-4 d-flex flex-row'>
                    <div>
                        <img src='' alt="your logo"/>
                    </div> 
                    <div>  
                    <a href='#'>Your library</a>
                    </div>    
                </div>
            </div>
            <div className="h-50">
                <div className='p-4 d-flex'><a href='#'>Create Playlist</a></div>
                <div className='p-4 d-flex'><a href='#'>Liked Songs</a></div>
            </div>
            <div className="h-20">
                <div className='p-4 d-flex'><a href='#'>Cookies</a></div>
                <div className='p-4 d-flex'><a href='#'>Privacy</a></div>
            </div>
        </div>
    )
}

export default leftNav;