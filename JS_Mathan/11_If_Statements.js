const id = 100;

// //EQUAL To
// if (id == 100) {
//   console.log("Correct");
// } else {
//   console.log("Incorrect");
// }

// //NOT EQUAL To
// if (id != 100) {
//   console.log("correct statement");
// } else {
//   console.log("Not correct");
// }

// // EQUAL To Value and Type
// if (id === 100) {
//   console.log("correct statement");
// } else {
//   console.log("Incorrect");
// }

// //EQUAL To Value and Type
// if (id !== 100) {
//   console.log("Correct Statement");
// } else {
//   console.log("Incorrect Statement");
// }

// //Test If the Id Is undefined Or Not
// if (typeof id !== "undefined") {
//   console.log(`the Id is ${id}`);
// } else {
//   console.log("no Id");
// }

// //GREATER THAN OR LESS THAN
// if (id > 200) {
//   console.log("Correct");
// } else {
//   console.log("In correct Statement");
// }

// if (id < 200) {
//   console.log("Correct");
// } else {
//   console.log("In correct Statement");
// }

// //Using Else If Statements
// const color = "yellow";
// if (color === "red") {
//   console.log("color red");
// } else if (color === "blue") {
//   console.log("Color is blue");
// } else {
//   console.log("color is not red r blue");
// }

const name = "steve";
const age = 20;

// //AND && Signs and Usages
// if (age > 0 && age < 12) {
//   console.log(`${name} is a child`);
// } else if (age >= 13 && age <= 19) {
//   console.log(`${name} is a teenager`);
// } else {
//   console.log(`${name} is an adult`);
// }

//OR || of its usages
if (age < 16 || age > 65) {
  console.log(`${name} can not run In The Race`);
} else {
  console.log(`${name} is registered for the race`);
}

//TERNARY OPERATOR
console.log(id === 100 ? "correct" : "Incorrect");

//WITHOUR BRACES
if (id === 100) console.log("Correct");
else console.log("Incorrect");
