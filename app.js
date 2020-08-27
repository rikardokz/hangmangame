const wordEl = document.getElementById("word");
const wrongLettersEl = document.getElementById("wrong-letters");
const playAgainBtn = document.getElementById("play-button");
const popup = document.querySelector(".popup-container");
const notification = document.getElementById("notification-container");
const finalMessage = document.getElementById("final-message");

const figureParts = document.querySelectorAll(".figure-part");

const words = ["ativista", "professor", "minuto", "luta", "superar"];

let selectedWord = words[
  Math.floor(Math.random() * words.length)
].toLowerCase();

const correctLetters = [];
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

  const innerWord = wordEl.innerText.replace(/\n/g, "");

  if (innerWord === selectedWord.toLowerCase()) {
    finalMessage.innerText = "Parabéns! Ganhaste!";
    popup.style.display = "flex";
  }
}

// update the wrong letters
function updateWrongLettersEl() {
  // update where it says wrong
  wrongLettersEl.innerHTML = `
    ${wrongLetters.length > 0 ? "<p>Wrong</p>" : ""}
    ${wrongLetters.map((letter) => `<span>${letter}</span>`)}
  `;
  // add figure
  figureParts.forEach((part, index) => {
    const errors = wrongLetters.length;
    if (index < errors) {
      part.style.display = "block";
    } else {
      part.style.display = "none";
    }
  });
  // se if figure is done and show pop up
  if (wrongLetters.length === figureParts.length) {
    finalMessage.innerText = "Infelizmente Perdeste!";
    popup.style.display = "flex";
  }
}

// show notification that the letter was already used
function showNotification() {
  notification.classList.add("show"),
    setTimeout(() => notification.classList.remove("show"), 3000);
}

// keydown letter press
window.addEventListener("keydown", (e) => {
  if ((e.keyCode >= 65 && e.keyCode <= 90) || e.keyCode === 192) {
    const letter = e.key;
    if (selectedWord.includes(letter)) {
      if (!correctLetters.includes(letter)) {
        correctLetters.push(letter);
        displayWord();
      } else {
        showNotification();
      }
    } else {
      if (!wrongLetters.includes(letter)) {
        wrongLetters.push(letter);

        updateWrongLettersEl();
      } else {
        showNotification();
      }
    }
  }
});

playAgainBtn.addEventListener("click", () => {
  wrongLetters.length = 0;
  correctLetters.length = 0;
  selectedWord = words[Math.floor(Math.random() * words.length)];

  displayWord();

  updateWrongLettersEl();
  popup.style.display = "none";
  // figureParts.style.display = "none";
});

displayWord();
