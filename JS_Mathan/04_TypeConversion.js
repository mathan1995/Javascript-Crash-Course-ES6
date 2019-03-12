//Type conversion using JS ES6

//number to string
let val;
val = 5;
//output
console.log(val);
console.warn("Type of the variable val is :" + typeof val);
//Here .length function is only worked for string values
console.log(val.length);

//Convert Number to string
val = String(58);
val = String(4 + 4);
console.log(val);
console.log(typeof val);

//convert a boolean to String

valboolean = String(true);
console.log(valboolean);
console.log(typeof valboolean);

//Convert Date To String
val = String(new Date());

//Convert   Array To string
val = String([1, 15, 5, 8, 6]);

//toString() --Method use to convert number in to string value
val = (5).toString();
val = true.toString();

//String to Numbers
val = Number("5");
val = Number(true);
val = Number(false);
val = Number("hello");
val = Number([1, 2, 3, 4, 5, 6]);

//using Methods
val = parseInt("100.30");
val = parseFloat("100.3256"); //you need decimal numbers you use this float data type

//OUT PUT ALL,
console.log(val);
console.log(typeof val);
//console.log(val.length);
console.log(val.toFixed());

//Adding Two numbers using JS
const val1 = 5;
const val2 = 10;
const sum = val1 + val2;

//output
console.log(sum);
console.log(typeof sum);
