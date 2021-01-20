// 📌 Coding Exercise 21 📌
/*
Our First Conditional Exercise
Let's get some practice with conditional statements!  In order to make your code repeatable and testable, I'm asking you to write your code inside a pre-defined function (something we have not yet covered in the course).   

Write your code between the two comments in index.js

You will automatically have access to a variable called num.  Please do not try and define num or change num in any way! I will be setting the value of num when I test your code, so that I can test different outcomes

If num is an even number, print out "even".  Don't do anything if num is an odd number.
*/
function isEven(num) {
  //WRITE YOUR CODE BETWEEN THIS LINE: ↓ ↓ ↓ ↓
  if (num % 2 == 0) {
    console.log('even');
  }
  //AND THIS LINE ↑↑↑↑↑
}

// 📌 Coding Exercise 22 📌
/*
getColor Conditional Exercise
Let's get some practice with conditional statements!  In order to make your code repeatable and testable, I'm asking you to write your code inside a pre-defined function (something we have not yet covered in the course).   

Write your code between the two comments in index.js

You will automatically have access to a variable called phrase.  Please do not try and define phrase or change phrase in any way! I will be setting the value of phrase when I test your code.

Your job is to print out a color based upon the following rules:

if phrase is 'stop', you should print out 'red'
if phrase is 'slow', you should print out 'yellow'
if phrase is 'go', you should print out 'green'
if phrase is anything else, you should print out 'purple'
*/
function getColor(phrase) {
  //WRITE YOUR CODE BETWEEN THIS LINE: ↓ ↓ ↓ ↓
  if (phrase === 'stop') {
    console.log('red');
  } else if (phrase === 'slow') {
    console.log('yellow');
  } else if (phrase === 'go') {
    console.log('green');
  } else {
    console.log('purple');
  }
  //AND THIS LINE ↑↑↑↑↑
}
let phrase = 'go';
getColor(phrase);
// 📌 Coding Exercise 23 📌
/*
Nested Conditionals Practice
Time for something a little bit different. I've given you a nested conditional that uses a variable called num.  I would like for you to change the value of num to another number, so that "YOU GOT ME!" is printed out. Don't change anything other than the value of num!  Leave the conditional alone!
*/
// Change the value of num, so that "YOU GOT ME!" prints out
const num = 102; // THIS IS THE ONLY LINE YOU SHOULD CHANGE :)

// DO NOT TOUCH ANYTHING BELOW (please)
if (num <= 100) {
  if (num >= 50) {
    console.log('HEY!');
  }
} else {
  if (num < 103) {
    if (num % 2 === 0) {
      console.log('YOU GOT ME!');
    }
  }
}
// 📌 Coding Exercise 24 📌
/*
Logical AND Mystery Exercise
I've provided you with a conditional statement that uses a variable called mystery  Please change the value of mystery so that the conditional is true and "YOU GOT IT" is printed to the console.  Do not change anything other than the value of mystery on line 1!
*/
const mystery = 'Poooooo7'; //CHANGE THIS VALUE TO MAKE THE CONDITIONAL BELOW TRUE

// LEAVE THIS CODE ALONE! (pretty please)
if (mystery[0] === 'P' && mystery.length > 5 && mystery.indexOf('7') !== -1) {
  console.log('YOU GOT IT!!!');
}

// 📌 Coding Exercise 25 📌
/*
Lotto Numbers Exercise
Let's get some practice creating arrays. Please define a variable called lottoNumbers and set it equal to an array containing any 6 numbers.  It's simple, but we've got to start somewhere!
*/
const lottoNumbers = [1, 2, 3, 4, 5, 6];

// 📌 Coding Exercise 26 📌
/*
Array Access Exercise
I've provided you with a leaderboard array, which consists of 4 strings.  Without touching line 1, please make the following changes:

Unfortunately, I misspelled the 2nd name in the leaderboard array.  I meant to write "Luna" instead of "Lua".  Please update it to "Luna" (without changing line 1)

Bellatrix has fallen off the leaderboard and has been replaced by Draco! Please update the last element of the array so that it holds "Draco" instead of "Bellatrix" (once again, please do this without changing line 1)
*/
const leaderboard = ['Harry', 'Lua', 'Hermione', 'Bellatrix']; //DON'T TOUCH THIS LINE!

// YOUR CODE BELOW HERE:
leaderboard[1] = 'Luna';
leaderboard[3] = 'Draco';
console.log(leaderboard);

// 📌 Coding Exercise 27 📌
/*
Push/Pop/Shift/Unshift Practice
I've provided you with an array called planets. Unfortunately, I'm an idiot who doesn't know much about our solar system and I made some mistakes.  Please help me fix the planets array!  Using the array methods we just learned...

Remove the first element, "The Moon", from the planets array.  The moon is not a planet!

Add in "Saturn" at the very end of the planets array

Add "Mercury" as the first element in the planets array.

At the end of your hard work, planets should look like this: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn"]

(This one is super easy to cheat on.  Please use the array methods we just covered, rather than simply changing the values in planets directly)
*/
const planets = ['The Moon', 'Venus', 'Earth', 'Mars', 'Jupiter']; //DO NOT TOUCH THIS LINE!

// YOUR CODE GOES BELOW THIS LINE:

planets.shift();
planets.push('Saturn');
planets.unshift('Mercury');

console.log(planets);

// 📌 Coding Exercise 28 📌
/*
Nested Arrays Exercise
I've provided you with an array called airplaneSeats, which represents the rows of seats on a flight.  Our friend Hugo is looking to book a seat on our flight. Fortunately, there is one middle seat available (it's set to null currently).  Please update the array element that is currently null, to instead be "Hugo". (Please don't directly change the code on line 6 where I'm initially setting it to null.  This is an exercise in accessing data in nested arrays!)
*/
// DO NOT TOUCH!!! (please)
const airplaneSeats = [
  ['Ruth', 'Anthony', 'Stevie'],
  ['Amelia', 'Pedro', 'Maya'],
  ['Xavier', 'Ananya', 'Luis'],
  ['Luke', null, 'Deniz'],
  ['Rin', 'Sakura', 'Francisco'],
];

// YOUR CODE GOES BELOW THIS LINE:

airplaneSeats[3][1] = 'Hugo';
console.log(airplaneSeats);

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
  flavors: ['grape', 'apple', 'cherry'],
};

console.log(product);
// 📌 Coding Exercise 30 📌
/*
Object Access Exercise
In index.js (below) you'll find a restaurant object that contains a name, address, city, state, and zipcode. 

Your task to is to create a variable named fullAddress that points to a string using the information from restaurant. 

fullAddress should point to a string that includes the address, city, state, and zipcode from the restaurant object.

To make it harder to "cheat" by copy and pasting, I've randomly generated the address portion.    For example, if address was "64 Johnson Ave", the fullAddress variable would look like this:

fullAddress //"64 Johnson Ave, Brooklyn, NY 11206"
*/
const restaurant = {
  name: 'Ichiran Ramen',
  address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
  city: 'Brooklyn',
  state: 'NY',
  zipcode: '11206',
};
const fullAddress = `${restaurant.address}, ${restaurant.city}, ${restaurant.state}, ${restaurant.zipcode}`;
console.log(fullAddress);

// 📌 Coding Exercise 31 📌
/*
Our First For Loop Practice
Please use a for loop to print out the classic chorus lyrics of "I'm Blue" by Eiffel 65.  Use a for loop to print out the string "Da ba dee da ba daa" exactly 6 times.  No more, and no less.
*/

for (let i = 1; i <= 6; i++) {
  console.log('Da ba dee da ba daa');
}

// 📌 Coding Exercise 32 📌
/*
More For Loops Practice
Let's try writing a for loop that counts down, rather than up. Please write a for loop that prints the following numbers (in this order):

25
20
15
10
5
0
*/
for (let i = 25; i >= 0; i -= 5) {
  console.log(i);
}

// 📌 Coding Exercise 33 📌
/*
Iterating Arrays Exercise
I've provided you with an array of strings called people. Loop over the people array with a for loop, printing out each name in uppercase letters.  Your result should look something like:

SCOOBY
VELMA
DAPHNE
SHAGGY
FRED
Hint: use i from your loop as an array index!
*/
const people = ['Scooby', 'Velma', 'Daphne', 'Shaggy', 'Fred']; //DONT TOUCH THIS LINE!

// WRITE YOUR LOOP BELOW THIS LINE:
for (let i = 0; i < people.length; i++) {
  console.log(people[i].toUpperCase());
}

// 📌 Coding Exercise 34 📌
/*
For...Of Practice
Let's practice using for...of. I've provided you with an array called numbers.  Please use a for...of loop to loop over it, and print out the square of each value (the number multiplied by itself).

NOTES:

1. Udemy's coding exercise platform does NOT support the ** operator.
2. You could accomplish this by using a while loop or a for loop, but please use a for...of loop! Unfortunately, I can't enforce the type of loop you use, but please I'm begging you to use a for...of.  I will hunt you down if you don't.  Thank you and have a great day!

Your output should look like this:

1
4
9
16
25
36
49
64
81
*/
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //DON'T CHANGE THIS LINE PLEASE!

// WRITE YOUR LOOP BELOW THIS LINE:
for (let i of numbers) {
  console.log(i * i);
}
// 📌 Coding Exercise 35 📌
/*
Heart Function Exercise
It's time to write our first function!

Define a function called printHeart that prints out the string "<3"

Execute your function once
*/
// Write your function here:
function printHeart() {
  console.log('<3');
}

printHeart();

// 📌 Coding Exercise 36 📌
/*
Rant Exercise
Define a function called rant which accepts a string argument called message.  The function should print out an uppercased version of message 3 times (with 3 separate calls to console.log).  For example, rant("I hate beets") should print out:

I HATE BEETS
I HATE BEETS
I HATE BEETS

*/
//write your function below:

function rant(message) {
  console.log(message.toUpperCase());
  console.log(message.toUpperCase());
  console.log(message.toUpperCase());
}
rant('I hate beets');

// 📌 Coding Exercise 37 📌
/*
Multiple Args Exercise
In some dice games like Craps, a roll of two 1's is called "Snake Eyes".  It's generally not a good roll.  Please write a function called isSnakeEyes, which accepts two numbers as inputs, representing two dice.  If the two numbers are both 1's, please print "Snake Eyes!" otherwise print "Not Snake Eyes!"

isSnakeEyes(1,1) //Snake Eyes!
isSnakeEyes(1,5) //Not Snake Eyes!
isSnakeEyes(4,5) //Not Snake Eyes!
*/
function isSnakeEyes(dice1, dice2) {
  if (dice1 === 1 && dice2 === 1) {
    console.log('Snake Eyes!');
  } else {
    console.log('Not Snake Eyes!');
  }
}
isSnakeEyes(1, 1);

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
let sum = multiply(2, 3);
console.log(sum);

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
  if (parseInt(temp) >= parseInt(75)) {
    return true;
  } else {
    return false;
  }
}
console.log(isShortsWeather(655));

// 📌 Coding Exercise 40 📌
/*
Last Element Exercise
Please write a function called lastElement which accepts a single array argument.  The function should return the last element of the array (without removing the element).  If the array is empty, the function should return null.

lastElement([3,5,7]) //7
lastElement([1]) //1
lastElement([]) //null
*/
function lastElement(arrayNew) {
  if (arrayNew.length === 0) {
    return null;
  } else {
    return arrayNew[arrayNew.length - 1];
  }
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
console.log(hen.eggCount);

// 📌 Coding Exercise 47 📌
/*
Map Practice
It's time to get practice with the map method! Define a function called cleanNames.  It should accept an array of strings, which may contain additional space characters at the beginning and end. The cleanNames function should use the array map method to return a new array, full of trimmed names.  For example:

cleanNames([" timothee", "   darth_hater", "sassyfrassy   ", " elton john   "]);
// => ["timothee", "darth_hater", "sassyfrassy", "elton john"]


Hint: use a string method to TRIM each string.
*/
function cleanNames(arr1) {
  const newArrTrim = arr1.map(function (newArrTrim) {
    return newArrTrim.trim();
  });

  return newArrTrim;
}
let arr1 = ['    hey', 'new    ', 'hehe'];

console.log(cleanNames(arr1));

// 📌 Coding Exercise 48 📌
/*



*/
const greet = (name) => {
  return `Hey ${name}`;
};
console.log(greet('Jason'));

const greett = (str) => {
  return `Hey ${str}`;
};

let str = 'David';
console.log(greett(str));

// 📌 Coding Exercise 48 📌
/*
Filter Exercise
Let's get some practice using the filter method. Write a function called validUserNames that accepts an array of usernames (strings).  It should return a new array, containing only the usernames that are less than 10 characters. For example:

validUserNames(['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan']);
// => ["mark", "carrie98", "MoanaFan"]
*/

function validUserNames(arrUserNames) {
  return arrUserNames.filter((names) => names.length < 10);
}
let arrUserNames = ['tim', 'shayanseanmodjtehedi'];

// 📌 Coding Exercise 50 📌
/*
Some/Every Exercise
Define a function called allEvens that accepts a single array of numbers.  If the array contains all even numbers, return true.  Otherwise, return false.  Use some or every to help you do this!  (only one of them is actually useful here)

allEvens([2,4,6,8]) //true
allEvens([1,4,6,8]) //false
allEvens([1,2,3]) //false
*/

function allEvens(evenArr) {
  return evenArr.every((num) => num % 2 == 0);
}
console.log(allEvens([2, 4, 6, 8]));

/* 🗓 🗓 🗓 🗓 🗓 🗓 🗓 🗓 🗓 🗓 🗓 */

/* 🗓 SECTION 24: INTRODUCING THE WORLD OF THE DOM 🗓 */

/* 🗓 🗓 🗓 🗓 🗓 🗓 🗓 🗓 🗓 🗓 🗓 */

// 📌 Coding Exercise 51 📌
/*

*/

/* 🗓 🗓 🗓 🗓 🗓 🗓 🗓 🗓 🗓 🗓 🗓 */

/* 🗓 SECTION 25: THE DOM REVISITED 🗓 */

/* 🗓 🗓 🗓 🗓 🗓 🗓 🗓 🗓 🗓 🗓 🗓 */
