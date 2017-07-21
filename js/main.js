// Testing our JS
console.log("Up and running!");

// Our empty selected cards array for cards that are selected
var cardsInPlay = [];

//OLD CODE THAT WE DON'T NEED ANYMORE! Leaving it here for the moment until I have the new stuff written

/*

var cards = ["queen", "queen", "king", "king"];

var cardOne = cards[0];
var cardTwo = cards[2];

cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);

cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);
*/

//The action that the cards will take when they are selected by the user

var cards = [
	{
		rank: "Queen",
		suit: "Hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "Queen",
		suit: "Diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "King",
		suit: "Hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "King",
		suit: "Diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
]

var flipCard = function (cardId) {
	cardsInPlay.push(cards[cardId].rank);
	console.log("User flipped " + cards[cardId].rank);
	console.log("User flipped " + cards[cardId].suit);
	console.log("User flipped " + cards[cardId].cardImage);
		if (cardsInPlay.length === 2) {
			if (cardsInPlay[0] === cardsInPlay[1]) {
				alert("You found a match!");
			} else {alert("Sorry, try again.");}
		}
	}

flipCard(0);
flipCard(2);