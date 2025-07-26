import { useState } from 'react';
import quotes from "./assets/quotes.json";
import './App.css';
import { FaTwitter, FaTumblr, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

interface Quote {
  quote: string;
  author: string;
}


const getRandomQuote = (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

const getRandomColor = (): string =>{
  const red = Math.floor(Math.random() * 180);
  const green = Math.floor(Math.random() * 180);
  const blue = Math.floor(Math.random() * 180);
  return `rgb(${red}, ${green}, ${blue})`;
}

const transition = "all 1.5s";

function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote())
  const [randomColor, setRandomColor] = useState<string>(getRandomColor())
  const changeQuote =() =>{
    setQuote(getRandomQuote());
    setRandomColor(getRandomColor());
  }
  return (<div className='background' style = {{ backgroundColor: randomColor, transition}}>
    <div id="quote-box">
      <div className="quote-content" style= {{color: randomColor, transition}}>
       
        <h2 id="text"> <FaQuoteLeft size="30" style={{marginRight: "10px"}}/>
          {quote.quote}    <FaQuoteRight size="30" style={{marginLeft: "10px"}}/>
        </h2>
    
        <h4 id="author">- {quote.author}</h4>
      </div>
      <div className="buttons">
        <a href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.quote}`}
        id='tweet-quote'
        style={{
          backgroundColor: '#1DA1F2',
          marginRight: "10px"
        }}
      >
        <FaTwitter color="white"/>
      </a>
      <a href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=${quote.author}&content=${quote.quote}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`}
        id='tumblr-quote'
        style={{
          backgroundColor: '#272a5eff',
          marginRight: "10px"
        }}
      >
        <FaTumblr color="white"/>
      </a>
      <button id="new-quote" onClick={changeQuote} style={{backgroundColor:randomColor, transition}}>New Quote</button>
      </div>
    </div>
  </div>
  );
}

export default App
