import React, { useState } from "react";
import "./RandomQuote.css";
import reload from "../assets/free-refresh-icon-3104-thumb.png";
import twitter from "../assets/new-x-twitter-logo-png-photo-1.png";

export default function RandomQuote() {

  async function loadQuote() {
    try{
      const response =  await fetch("https://api.api-ninjas.com/v1/quotes",{
        method: 'GET',          // or 'POST', 'PUT', etc.
        headers: {
          'x-api-key' : 'TsBdCmsHfCN3HR+7L5HcRA==sLerSBBJg8MuqC0i'
        }
      });
    let  quotes = await response.json();
    let latestQuote = quotes[0];
    setQuote(latestQuote);

    }
    catch(err){
      console.log(err);
    }
      
       

  }
  
  
 
  const [quote, setQuote] = useState({
    quote: "Difficulties increase the nearer we get to the goal .",
    author: "John Wolfgang",
  });

  return (
    <div className="container">
      <div className="quote">{quote.quote} </div>
      <div className="line"></div>
      <div className="bottom">
        <div className="author">Author : {quote.author}</div>
        <div className="icons">
          <img  src={reload} onClick={loadQuote} className="reload" />

        </div>
      </div>
    </div>
  );
}
