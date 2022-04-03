import React from "react";
import Logo from "./Logo";

const LeftNavigation = ()=>{
    return (
        <div className="p-2 bg-dark">
            <Logo />
            <div className='p-4'>
                    <div>
                        <img src='' alt="home logo"/>
                    </div> 
                    <div>  
                    <a href='/'>Home</a>
                    </div>    
            </div>
            <div className='p-4'>
                    <div>
                        <img src='' alt="search logo"/>
                    </div> 
                    <div>  
                    <a href='/'>Search</a>
                    </div>    
            </div>
            <div className='p-4'>
                    <div>
                        <img src='' alt="your logo"/>
                    </div> 
                    <div>  
                    <a href='/'>Your library</a>
                    </div>    
            </div>
            <div className='p-4'><a href='/'>Create Playlist</a></div>
            <div className='p-4'><a href='/'>Liked Songs</a></div>
            <div className='p-4'><a href='/'>Cookies</a></div>
            <div className='p-4'><a href='/'>Privacy</a></div>
        </div>
    )
}
export default LeftNavigation;