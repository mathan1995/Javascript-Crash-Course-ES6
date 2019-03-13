// //FUNCTION USED IN THE JAVA SCRIPT
// function greet() {
//   //   console.log("Hello thi is a function");
//   return "Hello";
// }

// //Calling a functions
// greet();
// console.log(greet());

// //Function with Parameter Passing and Arguments
// function greet(FirstName) {
//   return "Hello " + FirstName;
// }
// console.log(greet("Mathan"));

// //Function with Multiple-Parameter Passing and Arguments
// function greet(FirstName, LastName) {
//   return "Hello " + FirstName + " " + LastName;
// }
// console.log(greet("Mathan", "Jeya"));

// //Function with Multiple-Parameter with out Passing
// function greet(FirstName, LastName) {
//   if (typeof FirstName === "undefined") {
//     FirstName = "Mathan X";
//   }
//   if (typeof LastName === "undefined") {
//     LastName = "Jeya X";
//   }

//   return "Hello " + FirstName + " " + LastName;
// }
// console.log(greet());

//FUNCTION EXPRESSIONS
const square = function(x = 3) {
  return x * x;
};

// console.log(square(8));

// //INITIALLY INVOKABLE FUNCTION EXPRESSIONS - IFIES
// //These are not run with some pranthasis - it means adding extra
// //(); after the code Finishes
// (function() {
//   console.log("IFIE RUN");
// })();

// (function(name, age) {
//   console.log("Hello " + name + " " + age);
// })("Mathan", 24);

//PROPERTY METHODS
const todo = {
  add: function() {
    console.log("Add to Do ...");
  },
  edit: function(id) {
    console.log(`Edit to Do ${id}`);
  }
};

todo.delete = function() {
  console.log("Delete to Do...");
};
todo.add();
todo.edit(22);
todo.delete();
