// 📌 Coding Exercise 29 📌
/*
Our First Object Exercise
It's time to practice creating your own object literal.  Please define a new variable called product.  It should be an object literal with the following properties:

name - set to the string "Gummy Bears"

inStock - set to the boolean true

price  - set to the number 1.99
*/
const product = {
  name: 'Gummy Bears',
  inStock: true,
  price: 1.99,
  flavors: ['grape', 'apple', 'cherry']
};


// 📌 Coding Exercise 30 📌
/*
Object Access Exercise
In index.js, you'll find a restaurant object that contains a name, address, city, state, and zipcode. 

Your task to is to create a variable named fullAddress that points to a string using the information from restaurant. 

fullAddress should point to a string that includes the address, city, state, and zipcode from the restaurant object.

To make it harder to "cheat" by copy and pasting, I've randomly generated the address portion.    For example, if address was "64 Johnson Ave", the fullAddress variable would look like this:

fullAddress //"64 Johnson Ave, Brooklyn, NY 11206"
*/







// 📌 Coding Exercise 37 📌
//https://www.udemy.com/course/the-web-developer-bootcamp/learn/quiz/5031222#questions
// 📌 Coding Exercise 38 📌
/*
Return Value Practice
It's time to practice returning values from a function! Write a simple function 'multiply' which accepts two numerical arguments and returns their product (multiply them together). Make sure to return the value instead of printing it!
i.e. multiply(2,3) //6
i.e. multiply(9,9) //81
i.e. multiply(5,4) //20
*/
function multiply(num1, num2) {
  return num1 * num2;
}
multiply(2, 3);

// 📌 Coding Exercise 39 📌
/*
isShortsWeather Function
I often struggle to know whether I should wear shorts or pants on a given day. Please help me decide by writing me a function called isShortsWeather. 

a.) It should accept a single number argument, which we will call temperature(but you can name it whatever you want, of course). 
b.) If temperature is greater than or equal to 75, return true. 
c.) Otherwise, return false.   
d.) This exercise assumes temperature is in Fahrenheit.  I apologize to all my Celsius-using students!

isShortsWeather(80) //true
isShortsWeather(48) //false
isShortsWeather(75) //true
*/

function isShortsWeather(temp) {
  if (temp >= 75) {
    return true;
  }
  {
    return false;
  }
}

isShortsWeather(60);

// 📌 Coding Exercise 40 📌
/*
Last Element Exercise
Please write a function called lastElement which accepts a single array argument.  The function should return the last element of the array (without removing the element).  If the array is empty, the function should return null.

lastElement([3,5,7]) //7
lastElement([1]) //1
lastElement([]) //null
*/
function lastElement(arr) {
  if (!arr.length) {
    return null;
  }
  return arr[arr.length - 1];
}

// 📌 Coding Exercise 41 📌
/*
Capitalize Exercise
Define a function called capitalize that accepts a string argument and returns a new string with the first letter capitalized (but the rest of the string unchanged).  For example:

capitalize('eggplant') // "Eggplant"
capitalize('pamplemousse') // "Pamplemousse"
capitalize('squid') //"Squid"
Hints:

Remember that strings are immutable, meaning that you cannot simply change the first letter in the original string.  You will need to make a new string that you return.

Single out the first letter and capitalize it. (use a string method to help!)

Add that first letter to the rest of the original string, sliced to omit the original first letter (use a string method to help!)

For example: 'eggplant' becomes 'E' + 'ggplant'
*/

function capitalize(str) {
  let firstLetter = str.charAt(0).toUpperCase();
  let sliceStr = str.slice(1);
  str = firstLetter + sliceStr;
  return str;
}

// 📌 Coding Exercise 42 📌
/*
Sum Array Exercise
Write a function called sumArray which accepts a single argument: an array of numbers.  It should return the sum of all the numbers in the array.

sumArray([1,2,3]) // 6
sumArray([2,2,2,2]) // 8
sumArray([50,50,1]) // 101
Hints:

You'll need a variable to keep track of the total.  It should start out as zero.

Loop over the array and for each element, add it to the total variable.

After you have added every number to total, return total.

*/
function sumArray(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total = total + arr[i];
  }
  return total;
}

let arr = [1, 3, 4, 5];

sumArray(arr);

// 📌 Coding Exercise 43 📌
/*

Days Of The Week Exercise
Write a function called returnDay. this function takes in one parameter (a number from 1-7) and returns the day of the week (1 is Monday, 2 is Tuesday, etc.)  If the number is less than 1 or greater than 7, the function should return null. In some countries Sunday is treated as the first day of the week, but for this exercise we will use Monday as the first day.

Hint: store the days of the week in an array, or use an object with numerical keys.  When the function is called, plug the number into the array/object you've created to retrieve the corresponding day name and then return that value.

returnDay(1) // "Monday"
returnDay(7) // "Sunday"
returnDay(4) // "Thursday"
returnDay(0) // null
  */

function returnDay(num) {
  const DaysOfWeek = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday',
  };
  if (num < 1 || num > 7) {
    return null;
  } else {
    return DaysOfWeek[num];
  }
}
console.log(returnDay(1));

// 📌 Coding Exercise 44 📌
/*
Function Expression Exercise
Define a function that returns the square of a number. Define the function as a function expression, stored in a variable called square.  NOTE: Udemy's coding exercise platform does NOT support the ** operator. 

square(4) //16
square(3) //9
*/
const square = function (num1) {
  return num1 * num1;
};

square(555);

// 📌 Coding Exercise 45 📌
/*
Methods Exercise
Define an object called square, which will hold methods that have to do with the geometry of squares. It should contain two methods, area and perimeter 

area should accept the length of a side (all sides are the same in a square) and then return the side squared. 

perimeter should accept the length of a side and return that side multiplied by 4.

square.area(10) //100
square.perimeter(10) //40
*/

const sq = {
  area(num) {
    return num * num;
  },
  perimeter(num) {
    return num * 4;
  },
};

sq.perimeter(5);

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
const hen = {
  name: 'Helen',
  eggCount: 0,
  layAnEgg() {
    this.eggCount++;
    return 'EGG';
  },
};

console.log(hen.layAnEgg());

// 📌 Coding Exercise 47 📌
/*
Map Practice
It's time to get practice with the map method! Define a function called cleanNames.  It should accept an array of strings, which may contain additional space characters at the beginning and end. The cleanNames function should use the array map method to return a new array, full of trimmed names.  For example:

cleanNames([" timothee", "   darth_hater", "sassyfrassy   ", " elton john   "]);
// => ["timothee", "darth_hater", "sassyfrassy", "elton john"]


Hint: use a string method to TRIM each string.
*/
function cleanNames(arr) {
  const newArrTrim = arr.map(function (arrTrim) {
    return arrTrim.trim();
  });
  return newArrTrim;
}

// 📌 Coding Exercise 48 📌
/*



*/
const greet = (name) => {
  return `Hey ${name}`;
};
console.log(greet('Jason'));
