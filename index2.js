//Pretty epic fail. I a lot of work yet to do. I'll be coming ot office hours. -Matthew

//var gamePrompt = require('game-prompt');
//
//function processAnswer(answer) {
//  console.log('Hello ' + answer);
//}
//
//gamePrompt([
//  'Hello, welcome to the game',
//  'What is your name?'
//], processAnswer);

//Create 52 card deck

//create and array of card suits
var suits = ['hearts', 'clubs', 'spades', 'diamonds']

//create an array of card ranks
var ranks = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']

//Assign a score to card ranks
var rankScores = {
  ace: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  jack: 11,
  king: 12,
  queen: 13
}

Constructor function 
function Card(suit, rank) {
  this.suit = suit
  this.rank = rank
  this.title = rank + ' of ' + suit 
  this.score = rankScores[rank] 
}

//Create a a deck of cards
function Deck( ) {
  this.createNewDeck = function() {
    var deck = []

    for (var i = 0; i < suits.length; i++) {
      for (var j = 0; j < ranks.length; j++) {
        deck.push(new Card(suits[i], ranks[j]))
      }
    }
    return deck
  }
  
//var testDeck = new Deck()
//testDeck.createNewDeck()

 this.cards = this.createNewDeck()

  this.dealHand = function(length) {

    if (this.cards.length === 0) {
      this.cards = this.createNewDeck()
    }

    var handLength = length || 1
    
    if (handLength === 1) {
      return this.cards[ Math.random() * this.cards.length ]
    } else {
      var hand = []

      for (var i = 0; i < handLength; i++) {
        var card = this.cards.splice( Math.random() * this.cards.length, 1 )
        hand.push( card )
      }
      return hand
    }
  }
}

var testDeck = new Deck()
testDeck.createNewDeck()

var playerOneDeck = testDeck.cards.slice(0,25)
var playerTwoDeck = testDeck.cards.slice(26)

console.log(playerOneDeck)