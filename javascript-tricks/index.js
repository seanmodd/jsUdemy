//https://github.com/seanmodd/jsUdemy

var arr = [1, 2, 3];

console.log(arr.length);
//

var obj = { a: 1, b: 2 };

var thisarray = Object.keys(obj);
console.log(thisarray);

//Iterate Over an Object

var username = {
  first: 'John',
  last: 'Doe',
};

for (let u in username) {
  if (username.hasOwnProperty(u)) {
      console.log(u, username[u])
  }
    console.log(u);
}
