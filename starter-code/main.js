var cardOne = 'queen';
var cardTwo = 'queen';
var cardThree = 'king';
var cardFour = 'king';

/* if (cardOne === cardTwo) {
	alert('You found a match!');	
} else if (cardThree === cardFour) {
	alert('You found a match!');
} else {
  alert('Sorry, try again.');
} */

var board = document.getElementById('game-board');

function createBoard() {
	for (var i=0; i<cards.length; i++) {
		    var cardElement = document.createElement('div');
		     cardElement.className = 'card';
		     cardElement.setAttribute('data-card', cards[i]);
		     cardElement.addEventListener('click', isTwoCards);

	board.appendChild(cardElement);
    board.appendChild(cardElement);
  }

}


