//Object Literalls
const person = {
  firstname: "steve",
  age: 24,
  email: "m@get.com",
  afddress: "Kondavil",
  hobbies: ["sports", "movies"],
  address: {
    city: "jaffna",
    number: 44,
    state: "nothern"
  },
  getBirthYear: function() {
    return 2019 - this.age;
  }
};

let val;

val = person;
//get Specific value
val = person.firstname;
val = person.age;
val = person.address;
val = person.hobbies;
val = person.getBirthYear();

//Other way ==== //val=person['firstname'];
const people = [
  { name: "Mathan", age: 24 },
  { name: "anu", age: 20 },
  { name: "brin", age: 25 }
];

for (let i = 0; i < people.length; i++) {
  console.table(people[i].name);
}
//Output
console.log(val);
console.table(val);
