/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.getRandomCard = function getRandomCard() {
  const card = {
    symbol: null,
    value: null
  };
  const cardSymbol = ["♦", "♥", "♠", "♣"];
  const cardValue = [2, 3, 4, 5, 6, 7, 8, 9, 10, "K", "Q", "J", "A"];
  card.symbol = cardSymbol[Math.floor(Math.random() * cardSymbol.length)];
  card.value = cardValue[Math.floor(Math.random() * cardValue.length)];
  document.querySelector("#card").innerHTML = `
    <div class="card-body bg-white rounded " id="bodyCard">
      <p class="card-text text-start fixed-top px-4" id="symbolCard">${card.symbol}</p>
      <h1 class="card-text mw-100 text-center fw-bold" id="valor">${card.value}</h1>
      <p class="card-text text-end fixed-bottom px-4" id="symbolCard">${card.symbol}</p>
    </div>`;
};

getRandomCard();
