import React, { useState } from "react";
import "./NewsFeed.css";
import {useEffect} from "react";
import axios from "axios";
const NewsFeed = () => {

    const [article, setArtical] = useState(null)
    useEffect(() => {

        const options = {
            method: 'GET',
            url: 'https://crypto-news15.p.rapidapi.com/news',
            headers: {
              'x-rapidapi-host': 'crypto-news15.p.rapidapi.com',
              'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
            }
          }
          
          axios.request(options).then((response) => {
              console.log(response.data);
              setArtical(response.data)
          }).catch((error) => {
              console.error(error);
          }) 


   /* const options = {
    method: 'GET',
    url: 'https://crypto-news-live.p.rapidapi.com/news',
    headers: {
        'x-rapidapi-host': 'crypto-news-live.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
    }
    }
                                                                      
    axios.request(options).then((response) => {
	    console.log(response.data);
        setArtical(response.data)
    }).catch((error) => {
	    console.error(error)
    })*/ 

    }, []) 

    console.log(article)

    const first7Article = article?.slice(0,10)
    return (
        <div className="news-feed">
            <h1>News Feeds</h1>
            {first7Article?.map((article, _index) => (<div>
                <a href={article.url}> <p>{article.title}</p> </a>
                </div>))}
        </div>
    )
}

export default NewsFeed;