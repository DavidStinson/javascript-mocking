const utils = require("./utils");

// What it coinFlip does:

/* 2 players play a best 3 out of 5 coin flipping game
 ** Each flip a player calls heads in the utils.getCalledHeads function
 ** The coin is then flipped by the utils.getCoinFlip function
 ** The winner is then determined for that round.
 ** When a player has 3 wins that player is returned
 */

function coinFlip(playerOne, playerTwo) {
  const coinFlipsToWin = 3;
  let playerOneWins = 0;
  let playerTwoWins = 0;
  while (playerOneWins < coinFlipsToWin && playerTwoWins < coinFlipsToWin) {
    // Gets the player that called heads
    const calledHeads = utils.getCalledHeads(playerOne, playerTwo);
    const winner = utils.getCoinFlip();
    if (winner === "heads") {
      calledHeads === playerOne ? playerOneWins++ : playerTwoWins++;
    } else if (winner === "tails") {
      calledHeads === playerOne ? playerTwoWins++ : playerOneWins++;
    }
  }
  return playerOneWins > playerTwoWins ? playerOne : playerTwo;
}

console.log(coinFlip("player1", "player2"));

module.exports = coinFlip;
