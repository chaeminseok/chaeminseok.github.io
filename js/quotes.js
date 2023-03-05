const quotes=[
{
    quote:"All progress takes place outside the comfort zone.",
    author:"-Michael Jojn Bobak"
},
{
    quote:"The way to get started is to quit talking and begin doing.",
    author:"-Walt Disney"
},
{
    quote:"In order to succeed, we must first believe that we can.",
    author:"-Nikos Kazantzakis"
},
{
    quote:"The only place where succes comes before work is in the dictionary.",
    author:"-Vidal Sassoon"
},
{
    quote:"Sometimes even to live is an act of courage.",
    author:"-Seneca"
},
{
    quote:"Life is either a daring adventure or nothing.",
    author:"-Helen Keller"
},

{
    quote:"The unexamined life is not worth living.",
    author:"-Socrates"
},
{
    quote:"The future ain't what it used to be.",
    author:"-Yogi Berra"
},
{
    quote:"It is a bad plan that admits of no modification.",
},
{
    quote:"The journey is the reward.",
    author:"-Steve Jobs"
},
{
    quote:"The multitude of books is making us ignorant.",
    author:"-Voltaire"
}
]
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todayQuote=quotes[Math.floor(Math.random()*quotes.length)];
quote.innerText=todayQuote.quote;
author.innerText=todayQuote.author;
