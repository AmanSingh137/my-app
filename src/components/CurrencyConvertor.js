import React, { useState } from "react";
import './CurrencyConvertor.css';
import ExchangeRate from "./ExchangeRate";
import axios from 'axios';
import btw from '../img/bit.png';
//import crypto from '../img/crypto.png';
const CurrencyConvertor = () =>{
    const currencies = ['BTC', 'ETH', 'USD', 'XRP', 'LTC', 'ADA'] // array of currency
    const [chosenPrimaryCurrency, setPrimaryCurrency] = useState('BTC') // to save the Primary chosen currency
    const [chosenSecondryCurrency, setSecondryCurrency] = useState('BTC') // to save the Secondry chosen currency
    const [amount, setAmount] = useState(1) // to set the amount
    const [exchangeRate, setExchangeRate] = useState(0)
    const [result, setResult] = useState(0)
    const [primaryCurrencyExchange, setPrimaryCurrencyExchange] = useState('BTC')
    const [secondaryCurrencyExchange, setSecondaryCurrencyExchange] = useState('BTC')
    console.log(amount) 

    const convert = () => {

        const options = {
            method: 'GET',
            url: 'https://alpha-vantage.p.rapidapi.com/query',
            params: {from_currency: chosenPrimaryCurrency , function: 'CURRENCY_EXCHANGE_RATE', to_currency: chosenSecondryCurrency},
            headers: {
                'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
                'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
            }
        }

        axios.request(options).then((response) => {
	        console.log(response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"])
            setExchangeRate(response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"])
            setResult(response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"] * amount)
            setPrimaryCurrencyExchange(chosenPrimaryCurrency)
            setSecondaryCurrencyExchange(chosenSecondryCurrency)
            console.log(result);
        }).catch((error) => {
	        console.error(error)
        })
    }

    console.log(exchangeRate)
    return(
        <div className="currency-convert">
            <h3>Welcome To Currency Converter</h3>
            <div className = "input-box">
                <table className="table">
                    <tbody>
                        <tr>
                            <td>
                                Primary Currency
                            </td>
                            <td>
                                <input 
                                type="number" 
                                name="currency 1" 
                                value={amount} 
                                onChange={(e) => setAmount(e.target.value)}
                                />
                            </td>
                            <td>
                                <select 
                                value={chosenPrimaryCurrency}
                                name="currency-option-1" 
                                className = "currency-option"
                                onChange={(e) => setPrimaryCurrency(e.target.value)}
                                >
                                    {currencies.map((currency, _index) => (<option key={_index}>{currency}</option>))}
                                </select>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                Secondary Currency
                            </td>
                            <td>
                                <input 
                                name="currency 2" 
                                value={result} 
                                disabled={true}
                                />
                            </td>
                            <td>
                                <select 
                                value={chosenSecondryCurrency}
                                name="currency-option-2" 
                                className = "currency-option"
                                onChange={(e) => setSecondryCurrency(e.target.value)}
                                >
                                    {currencies.map((currency, _index) => (<option key = {_index}>{currency}</option>))}
                                </select>
                            </td>
                        </tr>

                    </tbody>
                </table>
                
                <button className="btn" id="convert-button" onClick={convert}> <img className="emoji" src={btw} alt="emoji"></img> Convert</button>
                
            </div>
            <ExchangeRate 
                exchangeRate={exchangeRate}
                chosenPrimaryCurrency={primaryCurrencyExchange}
                ChosenSecondryCurency={secondaryCurrencyExchange}
            />
        </div>
    )
}

export default CurrencyConvertor;