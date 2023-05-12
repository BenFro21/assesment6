const shuffle = require("../src/shuffle");
const botsData = require('../src/botsData')

describe("shuffle should return an array with a length of 5 each game being 5 shuffles robots", () => {
  // CODE HERE
  test('the shuffle array has a length of 5', () => {
    let shuffleTest = shuffle(botsData)
    expect(shuffleTest).toHaveLength(10)
  })
  test('check that shuffle changes the order of items return', () => {
    let orginalData = botsData
    let shuffleTest = shuffle(botsData)
    expect(orginalData[0].name).not.toEqual(shuffleTest[0].name)
  })

});
