
//Creatibng and declearing variables in the javascript ES6
//var 
//let 
//const

//Creating a variable and printing value in console.log
var name ='Mathan';
console.warn("This is a warnning "+"Variable value is :"+name);
console.log(name);
    //Assigning value to the local variable
    name="Anu";
    console.log(name);

//Inital variable 
var greetings;
console.log(greetings);
    //Assigning values to variables
    greetings="Hello this is a greeting !!";
    console.log(greetings);

//variables with leters, numbers and speical characters
//can not start  a variable name with number
var name="Mathan is a normal variable";
console.warn(name);
// Error in thi line : var 1name="Mathan";\
var $name1="Mathan with $";
console.warn($name1);

//Name with _ symbol
var _name="Mathan With underscope _";
console.warn(_name);

 //Multi Word variables
 var firstname="mathan";  //lowercase variables
 var FirstName="Mathan"; //uppercase Variables
 var first_name="mathan_"; //pascal case variables
 var firstname;  //variable without value

 //LET VARIABLE CREATION
//  let name ="Mathan";
//  console.log(name);
//  name="Mathangan";
//  console.log(name);

 //As Similar to the Var variable creation


//CONST ---Constant variable creation this variable is cannot changable
//Cant changing value in thi variable

const namex="mathan const name";
console.log(namex);
// name="Anu";
// console.log(name);
//--- Can  not reassign ---

//Have To Assign a value no any empty object takenS
//const greetingss;

//CREATING OBJECT USING CONST
const person={
    name:"Mathan object",
    age:24
}
console.table(person);
//In here we can re Assign value in to the object table or bvalue in the object
person.name="anu";
person.age=20
console.log(person);

//Const arrays
const numbers=[1,2,3,4,5,6];
numbers.push(7);
console.log(numbers);

//in constant the object values and array values are the thing that can be re assigned or re modifies



