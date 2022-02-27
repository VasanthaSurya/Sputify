import React from "react";
import Card from './Card';

const CardsRow = (props) =>{
    return (
        <div className="flex-column">
            <div className="w-100">
                <h4>{props.cardRowName}</h4>
            </div>
            <div className="w-100 d-inline-flex flex-row">
            <div className="p-2">
                <Card cardTitle="Bollywood Blutters"/>
            </div>
            <div className="p-2">
                <Card cardTitle="Kollywood creams"/>
            </div>
            <div className="p-2">
                <Card cardTitle="Punjabi Hits"/>
            </div>
            <div className="p-2">
                <Card cardTitle="Tollywood Pearls"/>
            </div>
            <div className="p-2">
                <Card cardTitle="Indie India"/>
            </div>
            <div className="p-2">
                <Card cardTitle="Radar india"/>
            </div>
        </div>
        </div>
    )
}

export default CardsRow;