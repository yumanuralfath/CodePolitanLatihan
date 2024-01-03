const p1Btn = document.querySelector('#p1-button');
const p2Btn = document.querySelector('#p2-button');

const p1Display = document.querySelector('#p1-display');
const p2Display = document.querySelector('#p2-display');

const maxScore = document.querySelector('#maxScore');

let p1Score = 0;
let p2Score = 0;
let numMaxScore = Number(maxScore.value); // Initialize numMaxScore

// Function to update numMaxScore when the select value changes
function updateMaxScore() {
  numMaxScore = Number(maxScore.value);
  resetScores(); // Reset scores when maxScore changes
}

// Event listener for select element
maxScore.addEventListener('change', updateMaxScore);

p1Btn.addEventListener('click', () => {
  if (p1Score < numMaxScore && p2Score < numMaxScore) {
    p1Score += 1;
    p1Display.textContent = `${p1Score}`;
  }
});

p2Btn.addEventListener('click', () => {
  if (p2Score < numMaxScore && p1Score < numMaxScore) {
    p2Score += 1;
    p2Display.textContent = `${p2Score}`;
  }
});

const rstButton = document.querySelector('#reset');

rstButton.onclick = resetScores; // Use the same function for the reset button

// Function to reset scores
function resetScores() {
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = `${p1Score}`;
  p2Display.textContent = `${p2Score}`;
}
