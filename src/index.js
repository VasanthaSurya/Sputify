// import React from 'react';
// import ReactDOM from 'react-dom';
// import CardsRow from './components/CardsRow';
// import LeftNav from './components/LeftNav';

// const App = () =>{
//     return (
//         <div className='bg-dark'>
//             <div className='d-flex flex-row'>
//                 <LeftNav />
//                 <div className='container w-90 flex-row'>
//                     <div className='container flex-row'>
//                         <CardsRow cardRowName="India's Best"/>
//                     </div>
//                     <div className='flex-row'>
//                         <CardsRow cardRowName="Charts"/>
//                     </div>
//                     <div className='flex-row'>
//                         <CardsRow cardRowName="Focus"/>
//                     </div>
//                     <div className='flex-row'>
//                         <CardsRow cardRowName="Pop"/>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
// ReactDOM.render(
//     <App />,
//     document.querySelector('#root')
// );

import React from "react";
import ReactDOM from 'react-dom';
import LeftNavigation from "./components/LeftNavigation";
import TopFloat from "./components/TopFloat";
import MainScroll from "./components/MainScroll";
import BottomFloat from "./components/BottomFloat";

const App = ()=>{
    return (
        <div className="container-fluid d-flex flex-wrap mr-0 bg-dark">
            <div className="d-flex">
                <div className="p-2">
                    <LeftNavigation />
                </div>
                <div className="p-2 flex-wrap container-fluid">
                    <TopFloat />
                    <MainScroll />
                </div>
            </div>
            <div><BottomFloat /></div>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
)