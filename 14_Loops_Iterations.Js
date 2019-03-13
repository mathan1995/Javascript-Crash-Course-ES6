console.warn("#Loops and iterations here");
// //FOR LOOP
// for (let i = 0; i < 10; i++) {
//   //
//   if (i === 2) {
//     console.log("two is my favourite number");
//     continue;
//   }

//   //Break and continue loop statements
//   if (i === 5) {
//     console.log("Stop Then Loop");
//     break;
//   }
//   console.log("Number " + i);
// }

// // WHILE LOOP
// let i = 0;
// while (i < 10) {
//   console.log("Number " + i);
//   i++;
// }

// //DO WHILE LOOP
// let i = 0;
// do {
//   console.log("Number " + i);
//   i++;
// } while (i < 10);

//LOOPS THROUGH ARRAYS
const cars = ["honda", "toyata", "lambogini", "ferrari"];

// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i]);
// }

// //FOR EACH LOOP -- USED IN ARRAYS becasue it cleane and make scence
// cars.forEach(function(car) {
//   console.log(car);
// });

// //MAP
// const users = [
//   { id: 1, name: "mathan" },
//   { id: 2, name: "Anu" },
//   { id: 3, name: "jeya" }
// ];

// const ids = users.map(function(user) {
//   return user.id;
// });

// console.log(ids);

// //FOR EACH LOOP -- USED IN ARRAYS becasue it cleane and make scence
// cars.forEach(function(car, index, array) {
//   console.log(`${index}:${cars}`);
//   console.log(array);
// });

// //USING LOOPS IN OBJECTS
// const user = {
//   FirstName: "Mathan",
//   lastName: "Jeya",
//   age: 24
// };
// for (let x in user) {
//   console.log(`${x} : ${user[x]}`);
// }
