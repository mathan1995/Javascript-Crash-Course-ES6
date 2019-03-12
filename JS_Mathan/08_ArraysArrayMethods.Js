//Create some arrays
const numbers = [12, 55, 99, 32, 56, 41, 25, 36];
const numbers2 = new Array(22, 4, 5, 99, 52, 47, 75);
const fruit = ["Apple", "mango", "grapes", "jerry"];
const mixed = [12, 5, 66, "Pinapple", null, { a: 1, b: 1 }, new Date()];

let val;

//Get the array length
val = numbers.length;
//Check If it is array
val = Array.isArray(numbers);
//Get single value
val = numbers[2];
val = numbers[0];
//Insert in to Array
numbers[2] = 100;
//Find A value using Index
val = numbers.indexOf(32);

//MUTATING ARRAYS

//Add new value to array
numbers.push(250);
//add on front
numbers.unshift(111);
//Take off From End
numbers.pop();
//take off from front
numbers.shift();
//Spice values
numbers.splice(1, 1); // Thi use to delete the perticular array value using index map
//reverse array
numbers.reverse();
//Concaternate arrays
val = numbers.concat(numbers2);
//sorting Arrays
val = fruit.sort();
val = numbers.sort(); //Comment all to run this

//use compare functions
//Assending order
val = numbers.sort(function(x, y) {
  return x - y;
});

//Decending Order
val = numbers.sort(function(x, y) {
  return y - x;
});

//Find
//This function Works when you need to comment all the section in the above sections
function under50(num) {
  return num < 50;
}
val = numbers.find(under50);

//Output
console.table(val);
console.table(numbers);
