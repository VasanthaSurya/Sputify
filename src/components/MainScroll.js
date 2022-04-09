import React from "react";
import CardsRow from './CardsRow';

const MainScroll = ()=>{
    return (
        <main className="position-absolute">
            <div className='mhandsc container flex-row'>
                     <div className=''>
                         <CardsRow cardRowName="India's Best"/>
                     </div>
                     <div className=''>
                         <CardsRow cardRowName="Charts"/>
                     </div>
                     <div className=''>
                         <CardsRow cardRowName="Focus"/>
                     </div>
                     <div className=''>
                         <CardsRow cardRowName="Pop"/>
                     </div>
                 </div>
        </main>
    )
}
export default MainScroll;
// class="os-viewport os-viewport-native-scrollbars-invisible"