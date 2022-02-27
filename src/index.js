import React from 'react';
import ReactDOM from 'react-dom';

const App = () =>{
    return (
        <div className='container'>
            <div className='border w-25 border-round'>
                <h1>
                    Sputify
                </h1>
                <p>Lets Replicate Spotify.</p>
            </div>
        </div>
    )
}
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);