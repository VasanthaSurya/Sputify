import React from 'react';
import ReactDOM from 'react-dom';
import CardsRow from './components/CardsRow';
import LeftNav from './components/LeftNav';

const App = () =>{
    return (
        <div className='bg-dark'>
            <div className='d-flex flex-row'>
                <LeftNav />
                <div className='container w-90 flex-row'>
                    <div className='flex-row'>
                        <CardsRow cardRowName="India's Best"/>
                    </div>
                    <div className='flex-row'>
                        <CardsRow cardRowName="Charts"/>
                    </div>
                    <div className='flex-row'>
                        <CardsRow cardRowName="Focus"/>
                    </div>
                    <div className='flex-row'>
                        <CardsRow cardRowName="Pop"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);