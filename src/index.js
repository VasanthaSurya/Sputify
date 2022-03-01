import React from 'react';
import ReactDOM from 'react-dom';
import CardsRow from './components/CardsRow';
import LeftNav from './components/LeftNav';
import Card from './components/Card';

const App = () =>{
    return (
        <div className='w-100 bg-dark'>
            <div className='d-flex flex-row'>
                <LeftNav />
                <div className='container w-90 flex-row' style={{backgroundColor:"#4d4d4d"}}>
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
            <Card cardTitle="Bollywood Blutters"/>
        </div>
    )
}
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);