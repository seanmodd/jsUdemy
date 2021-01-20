let min = 0;
let max = 10;
function makeBetween(num) {
  if (num > min && num < max) {
    return `Yes it is in between, the number is ${num}`;
  } else {
    return `No`;
  }
}

let num = 5;
console.log(makeBetween(num));
//
//
const square = {
  area(num) {
    return num * num;
  },
  perimeter(num) {
    return num * 4;
  },
};

const squaree = {
  area(num) {
    return num * num;
  },
  perimeter(num) {
    return num * 4;
  },
};

// 📌 Coding Exercise 46 📌
/*
Egg Laying Exercise
Define an object called hen.  It should have three properties:

name should be set to 'Helen'

eggCount should be set to 0

layAnEgg should be a method which increments the value of eggCount by 1 and returns the string "EGG".  You'll need to use this.

hen.name // "Helen"
hen.eggCount // 0
hen.layAnEgg() // "EGG"
hen.layAnEgg() // "EGG"
hen.eggCount // 2
*/
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(function (num) {
  return num * 2;
});

console.log(numbers);
console.log(doubled);

function cleanNames(arr) {
  const newArrTrim = arr.map(function (newArrTrim) {
    return newArrTrim.trim();
  });

  return newArrTrim;
}
let arr = ["    hey", "new    ", "hehe"]

console.log(cleanNames(arr))