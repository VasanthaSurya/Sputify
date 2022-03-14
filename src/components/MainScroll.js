import React from "react";
import CardsRow from './CardsRow';

const MainScroll = ()=>{
    return (
        <main className="position-absolute">
            <div className='container flex-row'>
                     <div className='flex-row overflow-scroll'>
                         <CardsRow cardRowName="India's Best"/>
                     </div>
                     <div className='flex-row overflow-scroll'>
                         <CardsRow cardRowName="Charts"/>
                     </div>
                     <div className='flex-row overflow-scroll'>
                         <CardsRow cardRowName="Focus"/>
                     </div>
                     <div className='flex-row overflow-scroll'>
                         <CardsRow cardRowName="Pop"/>
                     </div>
                 </div>
        </main>
    )
}
export default MainScroll;
// class="os-viewport os-viewport-native-scrollbars-invisible"