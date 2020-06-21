const coinFlip = require("../coinFlip");
const utils = require("../utils");

test("returns winner", () => {
  jest.spyOn(utils, "getCalledHeads")
  jest.spyOn(utils, "getCoinFlip")

  utils.getCalledHeads.mockImplementation((playerOne, playerTwo) => playerOne);
  utils.getCoinFlip.mockImplementation(() => "heads");

  const winner = coinFlip("llama", "dog");

  expect(winner).toBe("llama");
  expect(utils.getCalledHeads.mock.calls).toEqual([
    ["llama", "dog"],
    ["llama", "dog"],
    ["llama", "dog"],
  ]);

  utils.getCalledHeads.mockRestore()
  utils.getCoinFlip.mockRestore()
});
