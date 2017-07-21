// Testing our JS
console.log("Up and running!");

// Our empty array for cards that are selected
var cardsInPlay = [];

// Object array containing our cards and their properties
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
//flip card function
var flipCard = function () {
	var cardId = this.getAttribute("data-id");
    console.log("User flipped " + cardId);

    console.log(cards[cardId].cardImage);

    console.log(cards[cardId].suit);

    cardsInPlay.push(cards[cardId].rank);

    this.setAttribute('src', cards[cardId].cardImage);

    if (cardsInPlay.length === 2){
    	if (cardsInPlay[0] === cardsInPlay[1]) {
				alert("You found a match!");
			} else { alert("Sorry, try again.");
		}
		cardsInPlay = [];
	}
};

//game board function
var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {

		var cardElement = document.createElement("img");

			cardElement.setAttribute("src", "images/back.png");
			cardElement.setAttribute("data-id", i);
			cardElement.addEventListener("click", flipCard);

    	document.getElementById('game-board').appendChild(cardElement);
}
}

//making the board
createBoard();