/* eslint-disable */

import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const cardSuit = [
  { color: "#A64037", suit: "♥" },
  { color: "#A64037", suit: "♦" },
  { color: "#353535", suit: "♣" },
  { color: "#353535", suit: "♠" }
];

const cardDeck = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "💂",
  "👸",
  "🤴"
];

// On load solo le pido que ejecute la funcion que genera la carta y que haga que el botón funcione con la clase tryAgain

window.onload = function() {
  generateCard();

  document.querySelector(".tryAgain").addEventListener("click", generateCard);
};

// La funcion genera el numero y el palo de la carta a partir de un random que hay definido mas abajo, en el caso del palo, lo hace en dos partes que conforman un objeto (el color y el símbolo)

function generateCard() {
  const { color, suit } = randomNumber(cardSuit);
  const cardNumber = randomNumber(cardDeck);

  document.querySelectorAll("#suit").forEach(element => {
    element.style.color = color;
    element.innerHTML = suit;
  });

  document.querySelectorAll("#suit-2").forEach(element => {
    element.style.color = color;
    element.innerHTML = suit;
  });

  document.querySelector(".number").innerHTML = cardNumber;
}

function randomNumber(arr) {
  let Number = Math.floor(Math.random() * arr.length);
  return arr[Number];
}
