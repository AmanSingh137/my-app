import React, {useState} from "react";
import './NavBar.css';
import ReactDOM from 'react-dom';
import CurrencyConvertor from "./CurrencyConvertor";
import TrackerCrypto from "./TrackerCrypto";

function NavBar() {

    const [count, setCount]= useState(0)
   
    function Convertor(){
        setCount(0)

    }

    function Tracker(){
        setCount(1)
    }

    function style() {
        document.getElementById("btn").style.backgroundColor="yellow"
    }

    return(
    <div className="title">
        <button id="btn" className="CurConv" onClick={Convertor}>
        CurrencyConvertor</button>
        <span>
             <button className="CurConv1" onClick={Tracker}>CryptoTracker</button>
        </span>
        {count === 0 ? <CurrencyConvertor /> : <TrackerCrypto />}
       
    </div>
    )
}


export default NavBar;