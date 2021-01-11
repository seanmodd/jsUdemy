//https://github.com/seanmodd/jsUdemy

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
var values = Object.keys(user).map(key => user[key])
console.log(values);
//second approach
var values = Object.values(user);
console.log(values)


/* 
🗓 SECTION 3 --- WORKING WITH ARRAYS
*/

/* 13.)📌 Shallow Copy and Clone Array */

/* 14.)📌 Get Random Element from Array */

/* 15.)📌 Remove Falsy Values in Array */

/* 16.)📌 Remove Items from Array */

/* 17.)📌 Fill Array with Values */

/* 18.)📌 Find Certain Element and Index or Indices of Array */

/* 19.)📌 Make Range of Numbers within Array */

/* 20.)📌 Get Unique Values in an Array */

/* 21.)📌 Find Difference Between Two Arrays */

/* 22.)📌 Remove Items from Left or Right Side of Array */

/* 23.)📌  Find Shared Values Between Two Arrays */

/* 24.)📌 Get Last Item and or Everything Before in Array */

/* 25.)📌 Return Last Item of Array, Create findLast or findLastIndex Functions */

/* 
🗓 SECTION 4 --- WORKING WITH FUNCTIONS
*/

/* 26.)📌 Debounce Function */

/* 27.)📌 'Once' Function */

/* 28.)📌 Measure Time For Function to Run */

/* 
🗓 SECTION 5 --- WORKING WITH STRINGS
*/

/* 29.)📌 Check if String Contains Substring */

/* 30.)📌 Iterate Over a String */

/* 31.)📌 Capitalize First Word of String */

/* 32.)📌 Capitalize Every Word in String */

/* 
🗓 SECTION 6 --- WORKING WITH NUMBERS OR MATH OPERATIONS
*/

/* 33.)📌 Change Length of Decimals */

/* 34.)📌 Fixing Math Errors with Decimals */

/* 35.)📌 Get Random Integer in Range */

/* 36.)📌 Round Decimals to Integers */

/* 37.)📌 Get Random Decimal in Range */

/* 
🗓 SECTION 7 --- GENERAL TRICKS
*/

/* 38.)📌 Shortcircuiting with Logical 'And' */

/* 39.)📌 Use Function Declarations for Greater Flexibility */

/* 40.)📌 Use Ternary Operator */

/* 41.)📌 Use 'break' and 'continue' with For Loops */

/* 
🗓 SECTION 8 --- ES6 TRICKS
*/

/* 42.)📌 Private Data Using IIFEs or Block Scope */

/* 43.)📌 Array Destructuring to Swap Variables */
