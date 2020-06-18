const coinFlip = require("../coinFlip");
const utils = require("../utils");

test("returns winner", () => {
  const initialGetCalledHeads = utils.getCalledHeads;
  const initialGetCoinFlip = utils.getCoinFlip;

  utils.getCalledHeads = jest.fn((playerOne, playerTwo) => playerOne);
  utils.getCoinFlip = () => "heads";

  const winner = coinFlip("llama", "dog");

  console.log(utils.getCalledHeads.mock.calls)
  expect(winner).toBe("llama");
  expect(utils.getCalledHeads.mock.calls).toEqual([
    ["llama", "dog"],
    ["llama", "dog"],
    ["llama", "dog"],
  ]);

  utils.getCalledHeads = initialGetCalledHeads;
  utils.getCoinFlip = initialGetCoinFlip;
});
