const assert = require("assert").strict;

const coinFlip = require("../coinFlip");
const utils = require("../utils");

function fn(implementation) {
  const mockFunction = (...args) => {
    mockFunction.mock.calls.push(args);
    return implementation(...args);
  };
  mockFunction.mock = { calls: [] };
  return mockFunction;
}

const initialGetCalledHeads = utils.getCalledHeads;
const initialGetCoinFlip = utils.getCoinFlip;

utils.getCalledHeads = fn((playerOne, playerTwo) => playerOne);
utils.getCoinFlip = () => "heads";

const winner = coinFlip("llama", "dog");

console.log(`${winner} wins!`);
assert.strictEqual(winner, "llama");
assert.strictEqual(utils.getCalledHeads.mock.calls, [
  ["llama", "dog"],
  ["llama", "dog"],
  ["llama", "dog"],
]);

utils.getCalledHeads = initialGetCalledHeads;
utils.getCoinFlip = initialGetCoinFlip;
