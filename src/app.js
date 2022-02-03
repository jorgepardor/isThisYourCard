/* eslint-disable */

import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let suit = ["♦", "♥", "♠", "♣"];
  let card = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  function randomNumber(arr) {
    let Number = Math.floor(Math.random() * arr.length);
    return arr[Number];
  }

  let cardSuit = randomNumber(suit);

  let cardNumber = randomNumber(card);

  // console.log(cardNumber);
  // console.log(cardSuit);

  document.querySelector(".suit").innerHTML = cardSuit;
  document.querySelector(".suit-2").innerHTML = cardSuit;
  document.querySelector(".number").innerHTML = cardNumber;

  //   const btn = document.querySelector(".tryAgain");

  //   btn.addEventListener("click", randomNumber());
};
