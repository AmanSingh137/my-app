import React, {useState} from "react";
import './NavBar.css';
import CurrencyConvertor from "./CurrencyConvertor";
import TrackerCrypto from "./TrackerCrypto";

function NavBar() {

    const [count, setCount]= useState(0)
    

    function Convertor(){
        setCount(0)
        document.getElementById("btn").style.backgroundColor="#FCD535"
        document.getElementById("btn1").style.backgroundColor="white"
    }

    function Tracker(){
        setCount(1)
        document.getElementById("btn").style.backgroundColor="white"
        document.getElementById("btn1").style.backgroundColor="#FCD535"
    }


    return(
    <div className="title">
        <button id="btn" className="CurConv" style={{backgroundColor: '#FCD535'}} onClick={Convertor}>
        CurrencyConvertor</button>
        <span>
             <button id="btn1" className="CurConv1" onClick={Tracker}>CryptoTracker</button>
        </span>
        {count === 0 ? <CurrencyConvertor /> : <TrackerCrypto />}
       
    </div>
    )
}


export default NavBar;