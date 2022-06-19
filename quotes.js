const quotes = [
    {
        quote: "A discovery is said to be an accident meeting a prepared mind.",
        author: "Albert Szent-Gyorgyi"
    },
    {
        quote: "A pessimist sees the difficulty in every opportunity; an optimist sees the opportunity in every difficulty.",
        author: "Sir Winston Churchill"
    },
    {
        quote: "Success is the ability to go from one failure to another with no loss of enthusiasm.",
        author: "Sir Winston Churchill"
    },
    {
        quote: "The strongest of all warriors are these two -- Time and Patience.",
        author: "Leo Tolstoy"
    },
    {
        quote: "A great secret of success is to go through life as a man who never gets used up.",
        author: "Albert Schweitzer"
    },
    {
        quote: "To be mature means to face, and not evade, every fresh crisis that comes.",
        author: "Fritz Kunkel"
    },
    {
        quote: "Our greatest glory is not in never falling, but in rising every time we fall.",
        author: "Confucius"
    }

];       
   
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;