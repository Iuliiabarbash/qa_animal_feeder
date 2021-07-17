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
      let likeFood = alex.feed(food)
      expect(likeFood).toContain('like')
      // console.log(alex.feed(food))
    })
    // console.log(alex.feed(lionFood[0]))
    // console.log(alex.feed(badFood[0]))
  });
  test("Marty likes the food we expect", () => {
    zebraFood.forEach((food) => {
    let likeFood = marty.feed(food)
    expect(likeFood).toContain('like')
    })
  });
  test("Melman likes the food we expect", () => {
    giraffeFood.forEach((food) => {
    let likeFood = melman.feed(food)
    expect(likeFood).toContain('like')
    })
  });
  test("Gloria likes the food we expect", () => {
    hippoFood.forEach((food) => {
    let likeFood = gloria.feed(food)
    expect(likeFood).toContain('like')
    })
  });
  test('Alex does not like we expect:', () => {
    badFood.forEach((food) => {
      let bFood = alex.feed(food)
      expect(bFood).toContain('does not like')
    
    })
  });
  test("Marty does not like", () => {
    badFood.forEach((food) => {
      let bFood = marty.feed(food)
      expect(bFood).toContain('does not like')
    
    })
  });
  test('Melman does not like', () => {
    badFood.forEach((food) => {
      let bFood = melman.feed(food)
      expect(bFood).toContain('does not like')

    })
  });
  test('Glorias does not like we expect', () => {
    badFood.forEach((food) => {
      let bFood = gloria.feed(food)
      expect(bFood).toContain("does not like")
    })
  });
  
});


// console.log(alex.feed("meat"));
// console.log(alex.feed("shrimp"));

