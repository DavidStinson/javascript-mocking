function getCalledHeads(playerOne, playerTwo) {
  if (Math.round(Math.random())) {
    return playerOne
  } else {
    return playerTwo
  }
}

function getCoinFlip() {
  if (Math.round(Math.random())) {
    return "heads";
  } else {
    return "tails";
  }
}

module.exports = {getCalledHeads, getCoinFlip}