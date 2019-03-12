const num1 = 100;
const num2 = 155;
let val;

//simple math with numbers
val = num1 + num2;
val = num1 - num2;
val = num1 / num2;
val = num1 * num2;
val = num1 % num2;

//math object
val = Math.PI;
val = Math.E;
val = Math.round(2.4);
val = Math.ceil(2.4);
val = Math.floor(2.8);
val = Math.sqrt(64);
val = Math.abs(-4);
val = Math.pow(8, 2);
val = Math.min(2, 5, 77, 88, 3, 55, 66, 22, -9);
val = Math.max(2, 5, 77, 88, 3, 55, 66, 22, -9);
val = Math.random(); //Create a randiom number in decimal
val = Math.floor(Math.random() * 20); //print random number in whole values

//output
console.log(val);
