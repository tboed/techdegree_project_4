/************************************************
Treehouse Techdegree:
Project 4 - Random Quote Generator in JavaScript
*************************************************/
/*** 
 * `quotes` array 
 * array containing quotes to randomize
 ***/
 const quotes = [ {
	quote: "The journey of a thousand miles begins with one step.",
	source: "Lao Tzu"
}, {
	quote: "Hope for the best but prepare for the worst.",
	source: "Benjamin Disraeli",
	citation: "The Wondrous Tale of Alroy: The rise of Iskander",
	year: 1833,
	tags: "Books"
}, {
	quote: "Don't count the days. Make the days count.",
	source: "Muhammad Ali"
}, {
	quote: "When you teach your son, you teach your son's son.",
	source: "The Talmud"
}, {
	quote: "Just keep swimming.",
	source: "Dory",
	citation: "Finding Nemo",
	year: 2003,
	tags: "Movies"
}, {
	quote: "I cared for eight seconds, then I got distracted",
	source: "Gregory House",
	citation: "House",
	year: 2010,
	tags: "TV Series"
} ]
/***
 * `autoRefresh Function`
 * function to auto refresh page and print 
 * random quotes at regular intervals of 10s
 ***/
function autoRefresh() {
	setInterval( function() {
		printQuote();
	}, 10000 );
}
/***
 * `randomBgColor` function
 * function to return a random background color with each quote refresh
 ***/
function randomBgColor() {
	let red = Math.floor( Math.random() * 256 );
	let green = Math.floor( Math.random() * 256 );
	let blue = Math.floor( Math.random() * 256 );
	let randomBg = "rgb(" + red + ", " + green + ", " + blue + ")";
	document.body.style.background = randomBg;
}
/***
 * `getRandomQuote` function
 * function to return a randomized quote from quotes array
 ***/
function getRandomQuote() {
	const randomQuote = Math.floor( Math.random() * quotes.length );
	return quotes[ randomQuote ];
}
/***
 * `printQuote` function
 * function to print quote into a page everytime user clicks on the button to randomize quotes
 ***/
function printQuote() {
	const print = getRandomQuote();
	let printed = `<p class="quote">${print.quote}</p><p class="source">${print.source}`;
	if ( print.citation !== undefined ) {
		printed = printed + `<span class="citation">${print.citation}</span>`;
	}
	if ( print.year !== undefined ) {
		printed = printed + `<span class="year">${print.year}</span>`;
	}
	if ( print.tags !== undefined ) {
		printed = printed + `<span class="tags">${print.tags}</span>`
	}
	printed = printed + `</p>`
	document.getElementById( 'quote-box' ).innerHTML = printed;
	randomBgColor();
}
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/
document.getElementById( 'load-quote' ).addEventListener( "click", printQuote, false );
autoRefresh();