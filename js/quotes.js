const quotes = [
    {
        quote:"He is richest who is content with the least.",
        author:"Socrates",
    },
    {
        quote:"It's not that I'm so smart, it's just that I stay with problems longer.",
        author:"Albert Einstein",
    },
    {
        quote:"Big jobs usually go to the men who prove their ability to outgrow small ones.",
        author:"Ralph Waldo Emerson",
    },
    {
        quote:"Only those who dare to fail greatly can ever achive greatly.",
        author:"John F.Kennedy",
    },
    {
        quote:"It always seems impossible until its done.",
        author:"Nelson Mandela",
    },
    {
        quote:"A person who never made a mistake never tried anything new.",
        author:"Albert Einstein",
    },
    {
        quote:"Our greatest glory is not in never falling, but in rising every time we fall",
        author:"Confucius",
    },
    {
        quote:"If you really look closely, most overnight successes took a long time.",
        author:"Steven Paul Jobs",
    },
    {
        quote:"The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will.",
        author:"Vince Lombardi",
    },
    {
        quote:"Build a dreamm and the dream will build you.",
        author:"Robert J.Shiller",
    }
];

const quote = document.querySelector("#quote span:first-child"); 
const author = document.querySelector("#quote span:last-child"); 
const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];



quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;
