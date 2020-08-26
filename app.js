const wordEl = document.getElementById("word");
const wrongLettersEl = document.getElementById("wrong-letters");
const playAgainBtn = document.getElementById("play-again");
const popup = document.getElementById("popup-container");
const notification = document.getElementById("notification-container");
const finalMessage = document.getElementById("final-message");

const figureParts = document.querySelectorAll("figure-part");

const words = [
  "Ativista",
  "Professor",
  "Minuto",
  "Luta",
  "Guidão",
  "Lapso",
  "Cadeia",
  "Caro",
  "Tela",
  "Cuba",
  "Embaixador",
  "Jardim",
  "Ir",
  "Outono",
  "Promotor",
  "Greenpeace",
  "Alma",
  "Ainda",
  "Consumir",
  "Ofensor",
  "Atmosfera",
  "Gancho",
  "Puro",
  "Desviar",
  "Frágil",
  "Estréia",
  "Refúgio",
  "Entorpecido",
  "Onde",
  "Superar",
];

let selectedWord = words[Math.floor(Math.random() * words.length)];

const correctLetters = ["i"];
const wrongLetters = [];

// mostra a palavra escondida
function displayWord() {
  wordEl.innerHTML = `
    ${selectedWord
      .split("")
      .map(
        (letter) =>
          `<span class="letter">${
            correctLetters.includes(letter) ? letter : ""
          }</span>`
      )
      .join("")}
        `;

  const innerWord = wordEl.innerText.replace(/\n/g, " ");

  if (innerWord === selectedWord) {
    finalMessage.innerText = "Parabéns! Ganhaste!";
  }
}

displayWord();
