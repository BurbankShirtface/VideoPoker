"use strict";

const deck = [
  {
    suit: "clubs",
    value: 2,
    rank: 2,
    img: "PlayingCards/fronts/clubs_2.svg",
  },
  {
    suit: "clubs",
    value: 3,
    rank: 3,
    img: "PlayingCards/fronts/clubs_3.svg",
  },
  {
    suit: "clubs",
    value: 4,
    rank: 4,
    img: "PlayingCards/fronts/clubs_4.svg",
  },
  {
    suit: "clubs",
    value: 5,
    rank: 5,
    img: "PlayingCards/fronts/clubs_5.svg",
  },
  { suit: "clubs", value: 6, rank: 6, img: "PlayingCards/fronts/clubs_6.svg" },
  {
    suit: "clubs",
    value: 7,
    rank: 7,
    img: "PlayingCards/fronts/clubs_7.svg",
  },
  {
    suit: "clubs",
    value: 8,
    rank: 8,
    img: "PlayingCards/fronts/clubs_8.svg",
  },
  {
    suit: "clubs",
    value: 9,
    rank: 9,
    img: "PlayingCards/fronts/clubs_9.svg",
  },
  {
    suit: "clubs",
    value: 10,
    rank: 10,
    img: "PlayingCards/fronts/clubs_10.svg",
  },
  {
    suit: "clubs",
    value: 10,
    rank: "jack",
    img: "PlayingCards/fronts/clubs_jack.svg",
  },
  {
    suit: "clubs",
    value: 10,
    rank: "queen",
    img: "PlayingCards/fronts/clubs_queen.svg",
  },
  {
    suit: "clubs",
    value: 10,
    rank: "king",
    img: "PlayingCards/fronts/clubs_king.svg",
  },
  {
    suit: "clubs",
    value: 1,
    rank: "ace",
    img: "PlayingCards/fronts/clubs_ace.svg",
  },
  {
    suit: "diamonds",
    value: 2,
    rank: 2,
    img: "PlayingCards/fronts/diamonds_2.svg",
  },
  {
    suit: "diamonds",
    value: 3,
    rank: 3,
    img: "PlayingCards/fronts/diamonds_3.svg",
  },
  {
    suit: "diamonds",
    value: 4,
    rank: 4,
    img: "PlayingCards/fronts/diamonds_4.svg",
  },
  {
    suit: "diamonds",
    value: 5,
    rank: 5,
    img: "PlayingCards/fronts/diamonds_5.svg",
  },
  {
    suit: "diamonds",
    value: 6,
    rank: 6,
    img: "PlayingCards/fronts/diamonds_6.svg",
  },
  {
    suit: "diamonds",
    value: 7,
    rank: 7,
    img: "PlayingCards/fronts/diamonds_7.svg",
  },
  {
    suit: "diamonds",
    value: 8,
    rank: 8,
    img: "PlayingCards/fronts/diamonds_8.svg",
  },
  {
    suit: "diamonds",
    value: 9,
    rank: 9,
    img: "PlayingCards/fronts/diamonds_9.svg",
  },
  {
    suit: "diamonds",
    value: 10,
    rank: 10,
    img: "PlayingCards/fronts/diamonds_10.svg",
  },
  {
    suit: "diamonds",
    value: 1,
    rank: "ace",
    img: "PlayingCards/fronts/diamonds_ace.svg",
  },
  {
    suit: "diamonds",
    value: 10,
    rank: "jack",
    img: "PlayingCards/fronts/diamonds_jack.svg",
  },
  {
    suit: "diamonds",
    value: 10,
    rank: "king",
    img: "PlayingCards/fronts/diamonds_king.svg",
  },
  {
    suit: "diamonds",
    value: 10,
    rank: "queen",
    img: "PlayingCards/fronts/diamonds_queen.svg",
  },
  {
    suit: "hearts",
    value: 2,
    rank: 2,
    img: "PlayingCards/fronts/hearts_2.svg",
  },
  {
    suit: "hearts",
    value: 3,
    rank: 3,
    img: "PlayingCards/fronts/hearts_3.svg",
  },
  {
    suit: "hearts",
    value: 4,
    rank: 4,
    img: "PlayingCards/fronts/hearts_4.svg",
  },
  {
    suit: "hearts",
    value: 5,
    rank: 5,
    img: "PlayingCards/fronts/hearts_5.svg",
  },
  {
    suit: "hearts",
    value: 6,
    rank: 6,
    img: "PlayingCards/fronts/hearts_6.svg",
  },
  {
    suit: "hearts",
    value: 7,
    rank: 7,
    img: "PlayingCards/fronts/hearts_7.svg",
  },
  {
    suit: "hearts",
    value: 8,
    rank: 8,
    img: "PlayingCards/fronts/hearts_8.svg",
  },
  {
    suit: "hearts",
    value: 9,
    rank: 9,
    img: "PlayingCards/fronts/hearts_9.svg",
  },
  {
    suit: "hearts",
    value: 10,
    rank: 10,
    img: "PlayingCards/fronts/hearts_10.svg",
  },
  {
    suit: "hearts",
    value: 1,
    rank: "ace",
    img: "PlayingCards/fronts/hearts_ace.svg",
  },
  {
    suit: "hearts",
    value: 10,
    rank: "jack",
    img: "PlayingCards/fronts/hearts_jack.svg",
  },
  {
    suit: "hearts",
    value: 10,
    rank: "king",
    img: "PlayingCards/fronts/hearts_king.svg",
  },
  {
    suit: "hearts",
    value: 10,
    rank: "queen",
    img: "PlayingCards/fronts/hearts_queen.svg",
  },
  {
    suit: "spades",
    value: 2,
    rank: 2,
    img: "PlayingCards/fronts/spades_2.svg",
  },
  {
    suit: "spades",
    value: 3,
    rank: 3,
    img: "PlayingCards/fronts/spades_3.svg",
  },
  {
    suit: "spades",
    value: 4,
    rank: 4,
    img: "PlayingCards/fronts/spades_4.svg",
  },
  {
    suit: "spades",
    value: 5,
    rank: 5,
    img: "PlayingCards/fronts/spades_5.svg",
  },
  {
    suit: "spades",
    value: 6,
    rank: 6,
    img: "PlayingCards/fronts/spades_6.svg",
  },
  {
    suit: "spades",
    value: 7,
    rank: 7,
    img: "PlayingCards/fronts/spades_7.svg",
  },
  {
    suit: "spades",
    value: 8,
    rank: 8,
    img: "PlayingCards/fronts/spades_8.svg",
  },
  {
    suit: "spades",
    value: 9,
    rank: 9,
    img: "PlayingCards/fronts/spades_9.svg",
  },
  {
    suit: "spades",
    value: 10,
    rank: 10,
    img: "PlayingCards/fronts/spades_10.svg",
  },
  {
    suit: "spades",
    value: 1,
    rank: "ace",
    img: "PlayingCards/fronts/spades_ace.svg",
  },
  {
    suit: "spades",
    value: 10,
    rank: "jack",
    img: "PlayingCards/fronts/spades_jack.svg",
  },
  {
    suit: "spades",
    value: 10,
    rank: "king",
    img: "PlayingCards/fronts/spades_king.svg",
  },
  {
    suit: "spades",
    value: 10,
    rank: "queen",
    img: "PlayingCards/fronts/spades_queen.svg",
  },
];

// declaring variables
// cards
const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");
const card4 = document.getElementById("card4");
const card5 = document.getElementById("card5");
let userCardBoxes = [card1, card2, card3, card4, card5];
let usedCards = [];
let holdButton = document.querySelector(".hold-button");
// declaring deal button and adding event listener to it
const dealButton = document.querySelector(".deal-button");
const alert = document.querySelector(".alert");
dealButton.addEventListener("click", dealCards);

// this counter toggles between 2 game states. (game has 3 states. when window loads the counter is set to undefined)
// 1 = hand was dealt and player can decide how many cards to discard
// 2 = redraw is completed and hand is done
let counter = 2;

// shuffle the deck
// for 2000 turns, switch the values of two random cards
function shuffle(d) {
  for (let i = 0; i < 2000; i++) {
    let location1 = Math.floor(Math.random() * d.length);
    let location2 = Math.floor(Math.random() * d.length);
    let tmp = d[location1];

    d[location1] = d[location2];
    d[location2] = tmp;
  }
  // console.log("shuffled");
}

// when deal button is clicked this function is called
function dealCards() {
  if (counter == 1 || credsWagered > 0) {
    credsWagered = 0;
    creditsWageredDisplay.innerHTML = `Wagered: ${credsWagered}`;
    // shuffle deck when new hand is starting
    if (counter == 2) {
      for (let i of usedCards) {
        deck.push(i);
      }
      usedCards = [];
      shuffle(deck);
    }
    // toggle game state
    if (counter < 2) {
      counter++;
    } else {
      counter = 1;
    }

    for (let userCardBox of userCardBoxes) {
      // don't deal to cards the user has chosen to hold
      if (userCardBox.getAttribute("is-held-card") == "false") {
        // retrieve top card from the deck
        let card = deck.shift();
        // display cards
        userCardBox.lastElementChild.setAttribute("src", card.img);
        usedCards.push(card);
      }
    }
    // reset all held cards to false after a hand is done and remove yellow border
    for (let userCardBox of userCardBoxes) {
      if (counter == 2) {
        userCardBox.setAttribute("is-held-card", "false");
        userCardBox.firstElementChild.removeAttribute("style");
      }
    }
  } else {
    alert.style.visibility = "visible";
    alert.innerHTML = "You must choose an amount to wager";
  }
}

// QUESTION FOR JARED
// THIS CHANGES THE CLICK/ACTIVE EFFECT ON THE CARDS WHEN THE GAME STATE IS 2
// if (counter == 2) {
//   .cards img:active {
//     transform: none;
//   }
// }

// function is called when a card is clicked (indicating the player wants to hold this card)
// and the counter is set to 1 (indicating the game state where user decides what cards to keep and which ones to redraw)
function holdCard(event) {
  if (counter == 1) {
    // add yellow border and indicate card is being held
    if (event.currentTarget.getAttribute("is-held-card") == "false") {
      // console.log(event.currentTarget, this);
      // console.log(this.firstElementChild);
      let holdBorder = this.firstElementChild;

      holdBorder.style.border = "solid yellow 5px";
      // holdBorder.style.borderStyle = "inset";
      this.setAttribute("is-held-card", "true");
      // remove yellow border and don't hold card (this happens when the user clicks a card but changes their mind)
    } else if (event.currentTarget.getAttribute("is-held-card") == "true") {
      let holdBorder = this.firstElementChild;
      holdBorder.removeAttribute("style");
      this.setAttribute("is-held-card", "false");
    }
  }
  // console.log(counter);
  // console.log(this.getAttribute("is-held-card"));
}

// set event listener to each card so we know which ones to hold and which ones to redraw
card1.addEventListener("click", holdCard);
card2.addEventListener("click", holdCard);
card3.addEventListener("click", holdCard);
card4.addEventListener("click", holdCard);
card5.addEventListener("click", holdCard);

/************************************************************************ */

const creditsDisplay = document.querySelector("#credits");
const creditsWageredDisplay = document.querySelector("#credits-wagered");
const bet1 = document.querySelector("#bet1");
const betMax = document.querySelector("#bet-max");

let credsWagered = 0;
let totalCredits = 500;

creditsDisplay.innerHTML = `Credits: ${totalCredits}`;
creditsWageredDisplay.innerHTML = `Wagered: ${credsWagered}`;

bet1.addEventListener("click", bet1Credit);
betMax.addEventListener("click", betMaxCreds);

function bet1Credit() {
  if (counter != 1) {
    credsWagered++;
    if (credsWagered <= 5) {
      totalCredits--;
      creditsDisplay.innerHTML = `Credits: ${totalCredits}`;
      creditsWageredDisplay.innerHTML = `Wagered: ${credsWagered}`;
    } else {
      totalCredits = totalCredits + 5;
      credsWagered = 0;
      creditsDisplay.innerHTML = `Credits: ${totalCredits}`;
      creditsWageredDisplay.innerHTML = `Wagered: ${credsWagered}`;
    }
  }
}

function betMaxCreds() {
  if (counter != 1) {
    if (credsWagered < 5) {
      totalCredits = totalCredits - (5 - credsWagered);
      credsWagered = 5;
      creditsDisplay.innerHTML = `Credits: ${totalCredits}`;
      creditsWageredDisplay.innerHTML = `Wagered: ${credsWagered}`;
    } else {
      totalCredits = totalCredits + 5;
      credsWagered = 0;
      creditsDisplay.innerHTML = `Credits: ${totalCredits}`;
      creditsWageredDisplay.innerHTML = `Wagered: ${credsWagered}`;
    }
  }
}

alert.addEventListener("click", hideAlert);

function hideAlert() {
  if ((alert.style.visibility = "visible")) {
    alert.style.visibility = "hidden";
  }
}

/*




*/

// activate hold buttons
// choose wager from 1 and 5 with each deal, but only while counter = 1
// subtract amount wagered from total credits when deal button is clicked (when counter = 1)
// figure out if player has jacks or better (and what hand rank the user has)
// add credits won to total credits

/*









*/
// QUESTIONS FOR JARED
// although i don't want to use these 2 lines, i'm wondering why the second line doesn't work. error i get says
// cards.addEventListener is not a function
// let cards = document.querySelectorAll(".cards");
// cards.addEventListener("click", holdCard);
// why is there a border on the cards when i first load the page
