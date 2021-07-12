/************************************************
Treehouse Techdegree:
Project 4 - Random Quote Generator in JavaScript
*************************************************/

/*** 
 * `quotes` array 
***/

const quotes = [
  {
    quote: "The journey of a thousand miles begins with one step.",
    source: "Lao Tzu"
  },
  {
    quote: "Hope for the best but prepare for the worst.",
    source: "Benjamin Disraeli",
    citation: "The Wondrous Tale of Alroy: The rise of Iskander",
    year: 1833
  },
  {
    quote: "Don't count the days. Make the days count.",
    source: "Muhammad Ali"
  },
  {
    quote: "When you teach your son, you teach your son's son.",
    source: "The Talmud"
  },
  {
    quote: "Just keep swimming.",
    source: "Dory",
    citation: "Finding Nemo",
    year: 2003
  }
]
/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
  const randomQuote = Math.floor(Math.random() * quotes.length);
  return quotes[randomQuote];
}

/***
 * `printQuote` function
***/

function printQuote() {
  const print = getRandomQuote();
  let printed = `<p class="quotes">${print.quote}</p><p class="source">${print.source}`;
  if (print.citation !== undefined) {
    printed = printed + `<span class="citation">${print.citation}</span>`;
    return printed;
  }
  if (print.year !== undefined) {
    printed = printed + `<span class="year">${print.year}</span>`;
    return printed;
  }
  printed = printed + `</p>`
  return printed;
  } 

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);