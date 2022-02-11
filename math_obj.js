// Operations with 'Math' Object

var x = 25;
var y = 3;
var z = -10; // -ve number

// find square root of a number
console.log(Math.sqrt(x));

// find |x| value
console.log(Math.abs(z)); // | - 19 | >> 10

// find minimum (lowest)
console.log(Math.min(10,5,100,1,80)); // >> 1

// find maximun 
console.log(Math.max(10,5,100,1,80)); // >> 100

// exponent ( power )
console.log(Math.pow(2,2)); // means 2 * 2
console.log(Math.pow(2,3)); // 2*2*2
console.log(Math.pow(3,2)); // 3*3

// floor , ceil , round
var a = 3.5;
var b = 4.2;
var c = 2.9;
console.log(Math.floor(a)); // >> 3
console.log(Math.floor(b)); // >> 4
console.log(Math.floor(c)); // >> 2
//  --  -- -- -- -- -- -- -- --
console.log(Math.ceil(a)); // >> 4
console.log(Math.ceil(b)); // >> 5
console.log(Math.ceil(c)); // >> 3
//  --  -- -- -- -- -- -- -- --
console.log(Math.round(a)); // >> 4
console.log(Math.round(b)); // >> 4
console.log(Math.round(c));  // >> 3

// random
var x;
x = Math.random();
console.log(x); 

// Define range for random number
var range = Math.floor(x*10); // 0 - 9
console.log(range);
