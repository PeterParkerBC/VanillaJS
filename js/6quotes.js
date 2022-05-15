const quotes = [
    {
        quote: "Noting is impossible. The world itself says 'I'm possible!'",
        author: "Audrey Hepburn",   
    },
    {
        quote: "All our dreams can come true, if we have the courage to pursue them.",
        author: "Walt Disney",   
    },
    {
        quote: "I've failed over and over and over again in my life and that is why I succeed.",
        author: "Michael Jordan",   
    },
    {
        quote: "If people are doubting how far you can go, go so far that you can't hear them anymore.",
        author: "Michele Ruiz",   
    },
    {
        quote: "Failure is not opposite of success, it's part of success.",
        author: "Ariana Huffington",   
    },
    {
        quote: "If you take shortcuts, you get cut short.",
        author: "Gary Busey",   
    },
    {
        quote: "I learned the hard way that taking shortcuts and living for free is not really living free.",
        author: "Sophia Amoruso",   
    },
    {
        quote: "Success is the sum of small efforts, repeated.",
        author: "R Collier", 
    },
    {
        quote: "Short-cuts make long delays.",
        author: "J.R.R. Tolkien", 
    },
    {
        quote: "In life, most short cuts end up taking longer than taking the longer route.",
        author: "Suzy Kassem",
    },
]; 

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
//[0] = 1 첫번째 , [1] = 2 두번째 , -> [] 순서를 나타는 것 
quote.innerText = todaysQuote.quote; 
author.innerText = todaysQuote.author;


/* Math Function 
1. Math.round - 반올림 (+-) ex. 1.4 = 1, 1.5 = 2
2. Math.ceil - 꼭 대기 (+) ex. 1.01 = 2 
3. Math.floor - 바닥   (-) ex. 1.9 = 1 
*/