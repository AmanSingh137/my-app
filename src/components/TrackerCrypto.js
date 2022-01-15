import axios from "axios";
import React, { useState, useEffect } from "react";
import './TrackerCrypto.css';
import Coin from "./Coin";

function TrackerCrypto() {

    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('')

    useEffect(() => {
        axios
            .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
            )
            .then(res => {
                setCoins(res.data)
            })
            .catch(error => console.log(error));
    }, []);

    const handleChange = e => {
        setSearch(e.target.value)
    }

    //function to filter the actual coin
    const filteredCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    )


    return (
        <div className="coin-app">
            <div className="coin-search">
                <h1 className="coin-text">
                    Search a Currency
                </h1>
                <form>
                    <input type='text' placeholder="search" className="coin-input" onChange={handleChange} />
                </form>
                <div className='coin-container'>
                    <div className='coin-row'>
                        <div className='coin-data'>
                            <p className='' >Coin</p> &nbsp; &nbsp; &nbsp; &nbsp;
                            <p className=''>Symbol</p> 
                            <p className='coin-price'>Price</p>
                            <p className='coin-marketCap'>Market-Cap</p>
                            <p>Price Change</p>
                            <p className="coin-volume">
                                Volume
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {filteredCoins.map(coin => {
                return (
                    <Coin
                        key={coin.id}
                        name={coin.name}
                        image={coin.image}
                        symbol={coin.symbol}
                        marketCap={coin.market_cap}
                        price={coin.current_price}
                        priceChange={coin.price_change_percentage_24h}
                        volume={coin.total_volume}
                    />
                )
            })}
        </div>
    );
}

export default TrackerCrypto;


