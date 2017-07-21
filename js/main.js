// Testing our JS
console.log("Up and running!");

// Cards array, our empty selected cards array, and the cards that are selected
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

//OLD CODE THAT WE DON'T NEED ANYMORE! Leaving it here for the moment until I have the new stuff written

/*
var cardOne = cards[0];
var cardTwo = cards[2];

cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);

cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);
*/

//The action that the cards will take when they are selected by the user



var flipCard = function (cardId) {
	cardsInPlay.push(cards[cardId]);
	console.log("User flipped " + cards[cardId]);
		if (cardsInPlay.length === 2) {
			if (cardsInPlay[0] === cardsInPlay[1]) {
				alert("You found a match!");
			} else {alert("Sorry, try again.");}
		}
	}

flipCard(0);
flipCard(2);