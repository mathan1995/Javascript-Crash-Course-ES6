// alert("Hello this is string method ");
const firstname = "Mathan";
const lastname = "jeya";
const age = 24;
let val;

val = firstname + lastname;

//concantenation
val = firstname + " " + lastname;

//Append
//Append Mean: Here we add on to the variable
val = "Mathan";
val += "jeya"; //in here += use to appent both statements

val = "Hello My name is " + firstname + " and i am " + age + " old";

//Escaping
//val='That's awesome ,I Can't wait;
//Actual input above shown used back slash to re use all elements in th e components
val = "That's awesome ,I Can't wait";

//length
val = firstname.length;

//concat()
val = firstname.concat(" ", lastname);
//In here we use concat as + as used in the above

//Change Case
val = firstname.toLocaleUpperCase();
val = firstname.toLocaleLowerCase();

//give us the index in the data store in the variable
val = firstname[2];

//indexOf()
val = firstname.indexOf("1");
val = firstname.lastIndexOf("1");

//CharAt()
val = firstname.charAt("2");
//get last character
val = firstname.charAt(firstname.length - 1);

//output
console.log(val);
