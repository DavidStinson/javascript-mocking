const assert = require('assert').strict

const coinFlip = require("../coinFlip")
const utils = require("../utils")

const initialGetCalledHeads = utils.getCalledHeads
const initialGetCoinFlip = utils.getCoinFlip

utils.getCalledHeads = (playerOne, playerTwo) => playerOne
utils.getCoinFlip = () => "heads"

const winner = coinFlip("llama", "dog")

console.log(`${winner} wins!`)
assert.strictEqual(winner, "llama")

utils.getCalledHeads = initialGetCalledHeads
utils.getCoinFlip = initialGetCoinFlip