import React from "react";
import './ExchangeRate.css';

const ExchangeRate = ({exchangeRate , chosenPrimaryCurrency , ChosenSecondryCurency}) =>{
    return(
        <>
        <div className="exchange-rate">
        <h3>ExchangeRate</h3>
        <h1>{exchangeRate}</h1>                                 
        <p> {chosenPrimaryCurrency} to {ChosenSecondryCurency} </p>    
        </div>
        </>
    );
}

export default ExchangeRate;