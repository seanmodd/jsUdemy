//https://github.com/seanmodd/jsUdemy

const { number } = require('prop-types');

/* 
🗓 SECTION 2 --- WORKING WITH OBJECTS
*/

/* 2.)📌  Get Length of Object */
//Get length of Array
var arr = [1, 2, 3];
console.log(arr.length);

//Turn object into array so you can get the length of object
var obj = { a: 1, b: 2, c: 3 };
var llength = Object.keys(obj);
console.log(llength);
var length = Object.keys(obj).length;
console.log(length);

/* 3.)📌   Iterate Over an Object */
var username = {
  first: 'John',
  last: 'Doe',
};
//for in loop... the caveat of working with for in loops is that they iterate over every property on an object including its prototype, so you need to check using an if statement using only the values we define!
for (let u in username) {
  if (username.hasOwnProperty(u)) {
    console.log(u, username[u]);
  }
  console.log(u);
}
//for of loop... you must turn the object into an array... this makes the username iterable! As an object it is not iterable!
for (let u of Object.keys(username)) {
  console.log(u, username[u]);
}

//Object.entries is a ES6 feature and when we pass in our username object it creates an array and it has a couple of elements each containing a key and corresponding value
//Here we are using array destructuring!
var vww = {
  first: 'John',
  last: 'Doe',
};

Object.entries(vww).forEach(([key, value]) => console.log(key, value));

/* 4.)📌 Convert Object to Array */
var person = { name: 'Amy', age: 40 };
//First approach using forEach
var result = Object.keys(person);
console.log(result);
var arr = [];
Object.keys(person).forEach((key) => arr.push([key, person[key]]));
console.log(arr);
//Second approach using map
var resultt = Object.keys(person);
var resulttt = resultt.map((key) => [key, person[key]]);
console.log(resulttt);
//Third approach using Object.entries
console.log(Object.entries(person));

/* 5.)📌 Check if Property is in Object */
var user = {
  name: 'John',
  address: {
    street: '111 Main Street',
    city: 'New York',
    state: 'NY',
  },
};
var property = 'address' in user;
console.log(property);
var property = 'name' in user;
console.log(property);
var property = 'state' in user;
console.log(property);
var property = 'state' in user.address;
console.log(property);
var property = 'constructor' in user;
console.log(property);
var property = 'toString' in user;
console.log(property);

var property = user.hasOwnProperty('name');
console.log(property);
var property = user.hasOwnProperty('address');
console.log(property);
var property = user.address.hasOwnProperty('street');
console.log(property);
var property = user.hasOwnProperty('street');
console.log(property);

/* 6.)📌 Prevent Object Properties Being Added */
var user = {
  name: 'John',
  email: 'jeff@gmail.com',
};
Object.getOwnPropertyDescriptors(user); //gets all the info on the object!
Object.preventExtensions(user);
user.password = 'jeff123';
console.log(user);

/* 7.)📌 Prevent Object Properties from Being Added or Deleted */
var userr = {
  name: 'John',
  email: 'jeff@gmail.com',
};
Object.seal(userr);
console.log(Object.getOwnPropertyDescriptors(userr)); //you'll notice the configurable is set to false!
console.log(Object.isSealed(userr));

/* 8.)📌 Prevent Object Properties from Being Changed At All */
var user = {
  name: 'John',
  email: 'jeff@gmail.com',
};
console.log(Object.getOwnPropertyDescriptors(user));
console.log(Object.freeze(user));
//freeze will make it impossible to do anything, but you can still make it iterable, however you can't change any property value!
console.log(Object.isFrozen(user));

/* 9.)📌 Merge Multiple Objects into One Object */
var defaultUser = {
  name: '',
  email: '',
  subscribed: true,
};

var actualUser = {
  name: 'Don',
  email: 'don@gmail.com',
};
//first approach
var userData = Object.assign(defaultUser, actualUser);
console.log(userData);
//second approach ES7 feature is the object spread!
var userData = { ...defaultUser, ...actualUser };
console.log(userData);

/* 10.)📌 Computed Object Properties */

/* 11.)📌 Delete or Filter Property of Object */

/* 12.)📌 Get all Values in Object */
var user = {
  name: 'John',
  email: 'jeff@gmail.com',
};

//first approach
var values = Object.keys(user).map((key) => user[key]);
console.log(values);
//second approach
var values = Object.values(user);
console.log(values);

/* 
🗓 SECTION 3 --- WORKING WITH ARRAYS
*/

/* 13.)📌 Shallow Copy and Clone Array */
var fruits = ['apple', 'banana'];
console.log(fruits);
//the first way will change the original array and it is as follows
var newFruits = fruits;
console.log(newFruits);
newFruits.push('cherry');
console.log(newFruits);
console.log(fruits);
//second approach is the .slice method to which you can pass no arg or the arg 0 which is the same and now you won't impact the original array
var fruits = ['apple', 'banana'];
var newFruits = fruits.slice(0);
console.log(newFruits);
newFruits.push('cherry');
console.log(newFruits);
console.log(fruits);
//third approach is to add an empty array to the new array then add on the concatenate method and then pass concat into the array we want to copy, in this case it's fruits
var fruits = ['apple', 'banana'];
var newFruits = [].concat(fruits);
console.log(newFruits);
newFruits.push('cherry');
console.log(newFruits);
console.log(fruits);
//fourth approach and the most powerful way now is using the ES6 spread operator
var fruits = ['apple', 'banana'];
var newFruits = [...fruits, 'cherry'];
console.log(newFruits);
newFruits.push('cherry');
console.log(newFruits);
console.log(fruits);
/* 14.)📌 Get Random Element from Array */
var ages = [12, 32, 98, 45, 76];
let index = Math.round(Math.random() * ages.length);
console.log(index);
console.log(ages[index]);
/* 15.)📌 Remove Falsy Values in Array */
/*
False values are as follows:
  1. Empty string 
  2. 0 
  3. Null 
  4. Undefined 
  5. NaN
Falsy values are NOT AS FOLLOWS:
  1. Empty array
  2. Empty string
  3. String of zero i.e. "0"
  */
if (false) {
  console.log('truthy');
} else {
  console.log('falsy');
}
if (1) {
  console.log('truthy');
} else {
  console.log('falsy');
}
if (0) {
  console.log('truthy');
} else {
  console.log('falsy');
}
if ('') {
  console.log('truthy');
} else {
  console.log('falsy');
}
//we want to remove undefined which is a falsy value... its a value which when converted to a boolean always provide false
var temps = [72, 68, 65, undefined, 0, NaN, 80];
var newTemps = temps.filter((temp) => temp);
var newTemps = temps.filter((temp) => Boolean(temp));
console.log(newTemps);
console.log(Boolean(temps[0]));
console.log(Boolean(temps[1]));
console.log(Boolean(temps[2]));
console.log(Boolean(temps[3]));
console.log(Boolean(temps[4]));
console.log(Boolean(temps[5]));
console.log(Boolean(temps[6]));

/* 16.)📌 Remove Items from Array */
var nums = [48, 29, 30, 31, 33, 111];
nums.splice();
console.log(nums);
var removed = nums.splice(0, 2);
console.log(nums);
console.log(removed);
//different from slice! splice actually mutates the original array when slice doesn't! we can also put elements in the place of the elements we deleted!
var str = 'hello world'.split('');
console.log(str);
console.log(str.splice(0, 1));
console.log(str.splice(str.length - 1, 1));
console.log(str);
console.log(str.join(''));
//second approach is with filter method, however filter does not modify the original array unless you run map and splice with return...
var ints = [4, 5, 6];
var result = ints
  .filter((el) => el > 5)
  .map((el) => {
    ints.splice(ints.indexOf(el), 1);
    return el;
  });
console.log(result);
console.log(ints);
//third approach didn't make sense...

/* 17.)📌 Fill Array with Values */

//if we want to replace the numbers in the array (all of them) with a specific number like say 1 for example, how would we do that?
var phoneNumber = '555-525-5252';
var newNumber = phoneNumber.split('');
console.log(newNumber);
//remove the dashes
var cleanNumber = newNumber.filter((num) => num !== '-');
console.log(cleanNumber);
var newcleanNumber = cleanNumber.fill('*', 0, 3).join('');
console.log(newcleanNumber);

/* 18.)📌 Find Certain Element and Index or Indices of Array */
var people = ['John', 'Mary', 'Joe', 'John'];
var result = people.find((person) => person === 'Mary');
console.log(result);
//if we turn it into an object this is how we do it
var people = ['John', 'Mary', { name: 'Joe' }, 'John'];
var result = people.find((person) => person.name === 'Joe');
console.log(result);
//if we turn the find to findIndex it finds the first element and returns to us the index
var people = ['John', 'Mary', 'Joe', 'John'];
var result = people.findIndex((person) => person === 'Mary');
console.log(result);
//if we want to find multiple indices, we create a function which we'll call findIndexAll
var people = ['John', 'Mary', 'Joe', 'John'];
var result = people.findIndex((person) => person === 'Mary');
console.log(result);

function findIndexAll(arr, value) {
  let indices = [];
  arr.forEach((el, i) => {
    if (el === value) {
      indices.push(i);
    }
  });
  return indices;
}
var res = findIndexAll(people, 'Joe');
console.log(res);
/* 19.)📌 Make Range of Numbers within Array */
var range = Array.from({ length: 5 }, (value, index) => index);
console.log(range);

var range = Array.from({ length: 10 }, (value, index) => index * 5);
console.log(range);

var range = Array.from({ length: 10 }, (value, index) => index % 3);
console.log(range);

var range = Array.from({ length: 10 }, (value, index) => index + 5);
console.log(range);

/* 20.)📌 Get Unique Values in an Array */

var usernames = ['Jeff', 'Doug', 'John', 'John'];
//remove the duplicate values and keep only the unique values in the array
var firstApproach = usernames.filter((name, index, array) => {
  if (array.indexOf(name) === index) {
    return name;
  }
});
console.log(firstApproach);
//second Approach:
var newUsernames = usernames.filter((name, index, array) =>
  array.indexOf(name) === index ? name : ''
);
console.log(newUsernames);
//third approach using ES6 method of Set
var set = new Set([1, 2, 2, 3]);
console.log(set);

var set = new Set(usernames);
console.log(usernames);
console.log(set);
console.log(Array.isArray(set));
//it's not an array so we have to wrap it in brackets as follows!
var set = [...new Set(usernames)];
console.log(set);
console.log(Array.isArray(set));

/* 21.)📌 Find Difference Between Two Arrays */
var arr1 = ['fred', 'doug', 'amy', 'amy'];
var arr2 = ['fred', 'doug', 'joe'];

var result = arr1.filter((el) => arr2.includes(el));
console.log(result);

var result = arr1.filter((el) => !arr2.includes(el));
console.log(result);

var result = [...new Set(arr1)].filter((el) => !arr2.includes(el));
console.log(result);

/* 22.)📌 Remove Items from Left or Right Side of Array */
var nums = [23, 987, 45, 89];

var removeFromLeft = nums.slice(0, 2);
console.log(removeFromLeft);

var removeFromRight = nums.slice(2);
console.log(removeFromRight);

console.log(nums);
//notice it doesn't mutate the original array so we do the following!

var getNthItem = (arr, num) => arr.slice(num - 1, num)[0];

var res = getNthItem(nums, 3);

console.log(res);

//we can use slice for more complex functions such as following:
function offsetArray(arr, offset) {
  return [...arr.slice(offset), ...arr.slice(0, offset)];
}

var result = offsetArray([1, 2, 3, 4], 2);
console.log(result);

var result = offsetArray([1, 2, 3, 4], 3);
console.log(result);

var result = offsetArray([1, 2, 3, 4], -1);
console.log(result);

/* 23.)📌  Find Shared Values Between Two Arrays */

var men = ['Jim', 'Doug', 'Fred'];
var over50 = ['Angie', 'Dave', 'Jessica', 'Jim'];

//first approach
var shared = men.filter((man) => over50.includes(man));
console.log(shared);

//second approach
var shared = over50.filter((person) => men.includes(person));
console.log(shared);

/* 24.)📌 Get Last Item and or Everything Before in Array */
var names = ['Bill', 'Fred', 'John', 'Angie'];

var lastName = names[2];
console.log(lastName);

var lastName = names[names.length - 1];
console.log(lastName);

//first approach
var beforeLastName = names.slice(0, names.length - 1);
console.log(beforeLastName);

//second approach
var beforeLastName = names.slice(0, -1);
console.log(beforeLastName);

/* 25.)📌 Return Last Item of Array, Create findLast or findLastIndex Functions */

//we want the last item returned to us and removed from the array!
var arr1 = [5, 6, 7, 8];

console.log(arr1.pop());
console.log(arr1);

var newArr1 = arr1.filter((el) => el > 5);
console.log(newArr1);

var newArr1 = arr1.filter((el) => el > 5).pop();
console.log(newArr1);

//next approach
function findLast(arr, fn) {
  return arr.filter(fn).pop();
}
console.log(findLast(arr1, (el) => el > 5));

//next approach
//didn't get this approach

/* 
🗓 SECTION 4 --- WORKING WITH FUNCTIONS
*/

/* 26.)📌 Debounce Function */
//Chrome needed
//onResize is a function expression, created as an arrow function and it is a callback function expression for const e and when it runs it's going to log two things. 1- the inner height  with innerHeight and the inner width innerWidth

/*
MUST REWATCH UGH
*/

/* 27.)📌 'Once' Function */

//Chrome Needed... screenshot is here https://cln.sh/4MaUzU

/*

>>>> var button = document.querySelector('button');
undefined

> var once = fn => {
    let called = false;
    return function() {
        if(!called) {
         called = true;
        return fn();
        }
    }
}

var onClick = () => console.log('clicked!!!!');

var button = document.querySelector('button');

button.addEventListener('click', once(onClick));
> undefined
> VM721:12 clicked!!!!



*/

/* 28.)📌 Measure Time For Function to Run */
//Chrome Needed... screenshot is here https://cln.sh/sQYUej
/*

//Measure time it takes function to run

var getUserData = async (user) => await fetch(`https://api.github.com/users/${user}`);
var time = (fn, ...args) => {
 console.time('time');
 let result = fn(...args);
 console.timeEnd('time');
 return result;
};

time(() => getUserData('wesbos'));
VM681:7 time: 0.401123046875 ms
Promise {<pending>}
VM681:3 Fetch finished loading: GET "https://api.github.com/users/wesbos".



*/

/* 
🗓 SECTION 5 --- WORKING WITH STRINGS
*/

/* 29.)📌 Check if String Contains Substring */
var URL = 'https://api/github.com/users/reedbarger';
var containsWord = URL.includes('user');
console.log(containsWord);

var URL = 'https://api/github.com/users/reedbarger';
var containsWord = URL.indexOf('user');
console.log(containsWord);

var URL = 'https://api/github.com/users/reedbarger';
var containsWord = URL.startsWith('github');
console.log(containsWord);

var URL = 'https://api/github.com/users/reedbarger';
var containsWord = URL.endsWith('reedbarger');
console.log(containsWord);

/* 30.)📌 Iterate Over a String */

var str = 'hello world';
//first approach
for (let i = 0; i < str.length; i++) {
  console.log(str.charAt(i));
}
//if we want to output an index we do the following:
for (let i = 0; i < str.length; i++) {
  console.log(str.charAt(i), i);
}

//second approach is for in loop
for (let s in str) {
  console.log(str.charAt(s));
}
//third approach is for of loop, an ES6 feature!
for (let s of str) {
  console.log(s);
}
//if we want to output an index we do the following (one more step):
//this includes DESTRUCTURING!
var newStr = str.split('');

newStr;
for (let [i, n] of newStr.entries()) {
  console.log(n, i);
}

/* 31.)📌 Capitalize First Word of String */
var str = 'hello world';

//first approach
function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}
var result = capitalize(str);
console.log(result);

//second approach
function newCapitalize(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}
var result = newCapitalize(str);
console.log(result);

//third approach
var capitalize = ([first, ...rest]) => {
  console.log(first, rest);
};

var result = capitalize('hello world');

var capitalize = ([first, ...rest]) => {
  return first.toUpperCase() + rest.join('');
};

var result = capitalize('hello world');
console.log(result);

/* 32.)📌 Capitalize Every Word in String */

function capitalizeWords(str) {
  return str
    .split('')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join('');
}
var result = capitalizeWords('hello world');

console.log(result);

/* 
🗓 SECTION 6 --- WORKING WITH NUMBERS OR MATH OPERATIONS
*/

/* 33.)📌 Change Length of Decimals */

var dec = 1.23445644334556645;
console.log(dec);

var newDec = dec.toFixed(2);
console.log(dec);
console.log(newDec);

var newDec = dec.toPrecision(2);
console.log(dec);
console.log(newDec);

//convert them to numbers!

/* 34.)📌 Fixing Math Errors with Decimals */

/* 35.)📌 Get Random Integer in Range */

/* 36.)📌 Round Decimals to Integers */

/* 37.)📌 Get Random Decimal in Range */

/* 
🗓 SECTION 7 --- GENERAL TRICKS
*/

/* 38.)📌 Shortcircuiting with Logical 'And' */
var loggedIn = true;

if (loggedIn) {
  var i = 'he is logged in baby';
}

var cc = console.log(i);

//second approach
loggedIn && cc;
//doesn't work, the right side is supposed to run...

/* 39.)📌 Use Function Declarations for Greater Flexibility */

//hoisting allows you to assign variables before they've even been created yet!

age = 30;
var age;
console.log(age);

//you can't do this with var if you call a function BEFORE the function expression is made! UNLESS YOU run a function declaration which includes the word function!!!

/* 40.)📌 Use Ternary Operator */

var loggedIn = true;
var user = 'John';

if (loggedIn) {
  console.log(user + ' is logged in');
} else {
  console.log('no user :(');
}
//first approach
var loggedIn = true;
var user = 'Sam';
var tern = loggedIn ? user + ' is logged in' : 'no user';

console.log(tern);

//ternary expressions are just shorter if else statements

var loggedIn = false;
var user = 'Sam';
var tern = loggedIn ? user + ' is logged in' : 'no user';

console.log(tern);

/* 41.)📌 Use 'break' and 'continue' with For Loops */

var users = [
  { name: 'Don', country: 'England' },
  { name: 'Vladimir', country: 'Russia' },
  { name: 'Maria', country: 'Spain' },
];

for (let user of users) {
  console.log(user);
}

var russianUser;

for (let user of users) {
  console.log(user);
  if (user.country === 'Russia') {
    russianUser = user;
    break;
  }
}
console.log(russianUser);

//using the continue keyword

var newUsers = [];
for (let user of users) {
  console.log(user);
  if (user.name === 'Vladimir') continue;
  console.log(user);
  newUsers.push(user);
}
console.log(newUsers);

/* 
🗓 SECTION 8 --- ES6 TRICKS
*/

/* 42.)📌 Private Data Using IIFEs or Block Scope */

function getUserData() {
  var name = "John";
  var email = "john@gmail.com";
  var password = "alsdfjaskdf";

  return {
    name: name,
    email: email
  }
}
getUserData()
getUserData().email

//second approach you wrap the function in parantheses then immediately call it
function getUserData() {
  let name = "John";
  let email = "john@gmail.com";
  let password = "alsdfjaskdf";

  return {
    name: name,
    email: email
  }
}
getUserData()
getUserData().email




/* 43.)📌 Array Destructuring to Swap Variables */
