import { Animal } from "../animal";
import { getAnimal } from "../zoo";

const alex: Animal = getAnimal("Alex");
const marty: Animal = getAnimal("Marty");
const melman: Animal = getAnimal("Melman");
const gloria: Animal = getAnimal("Gloria");

const lionFood = ["meat"];
const zebraFood = ["grass", "leaves", "shrubs", "bark"];
const giraffeFood = ["leaves", "hay", "carrots"];
const hippoFood = ["grass", "reeds", "shoots"];

const badFood = ["shrimp", "potatoes", "pizza", "icecream"];

describe("feeding animals", () => {
  test("Alex likes the food we expect", () => {
    lionFood.forEach((food) => {
      console.log(alex.feed(food))
    })
    // console.log(alex.feed(lionFood[0]))
    // console.log(alex.feed(badFood[0]))
  });
  test("Marty likes the food we expect", () => {
    zebraFood.forEach((food) => {
      console.log(marty.feed(food))
    })
  });
  test("Melman likes the food we expect", () => {
    giraffeFood.forEach((food) => {
      console.log(melman.feed(food))
    })
  });
  test("Gloria likes the food we expect", () => {
    hippoFood.forEach((food) => {
      console.log(gloria.feed(food))
    })
  });
  test('Alex does not like:', () => {
    badFood.forEach((food) => {
      console.log(alex.feed(food))
    })
  });
  test("Marty does not like", () => {
    badFood.forEach((food) => {
      console.log(marty.feed(food))
    })
  });
  test('Melman bad food', () => {
    badFood.forEach((food) => {
      console.log(melman.feed(food))
    })
  });
  test('Glorias bad food', () => {
    badFood.forEach((food) => {
      console.log(gloria.feed(food))
    })
  });
  
});


// console.log(alex.feed("meat"));
// console.log(alex.feed("shrimp"));

