// Copyright (c) 2025 Anastasiia Lebedenko All rights reserved
//
// Created by: Anastasiia Lebedenko
// Created on: April 2025
// This file contains the JS functions for index.html

"use strict";
/**
 * This function makes random numbers and user has to guess
 */
function calculateGuessNumber() {
  const MAX = 14;
  const MIN = 1;
  // Get users guess
  let userGuess = parseInt(document.getElementById('random-number').value);

  // Generate random correct guess
  let correctGuess = Math.floor((Math.random() * (1+MAX-MIN)) + MIN);

  // Compare the randoms guess

  if (correctGuess == userGuess) {

    // Display
    document.getElementById('answers').innerHTML = 'You have guessed it right! Enter your new guess into the textbox to continue to play'

  }
  if (correctGuess != userGuess) {

    // Display
    document.getElementById('answers').innerHTML = 'You are wrong, the number was ' + correctGuess + '. Enter your new guess into the textbox to continue to play'

  }

  
}