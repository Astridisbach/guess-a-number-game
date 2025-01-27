"use strict";

// 1. Opret en boolean-variabel for at kontrollere spillets løkke
let gameRunning = true;

// 2. Generér et tilfældigt tal mellem 0 og 100 som mål
const targetNumber = Math.floor(Math.random() * 101); // Tilfældig værdi mellem 0 og 100

console.log("Target number (for debugging):", targetNumber); // Debugging-hjælp

// 3. Start en while-løkke for brugerens gæt
while (gameRunning) {
  // 4. Bed brugeren om at gætte et tal
  const userGuess = parseInt(prompt("Guess a number between 0 and 100:"), 10);

  // 5. Sammenlign brugerens gæt med målet
  if (userGuess === targetNumber) {
    // Brugeren gættede rigtigt
    console.log("Congratulations! You guessed the correct number!");
    alert(`You guessed it! The number was ${targetNumber}.`);
    gameRunning = false; // Stop spillet
  } else if (userGuess < targetNumber) {
    // Brugeren gættede for lavt
    console.log("Too low! Try again.");
    alert("Too low! Try again.");
  } else if (userGuess > targetNumber) {
    // Brugeren gættede for højt
    console.log("Too high! Try again.");
    alert("Too high! Try again.");
  } else {
    // Hvis brugeren ikke indtastede et gyldigt tal
    console.log("Invalid input. Please enter a number.");
    alert("Invalid input. Please enter a number.");
  }
}