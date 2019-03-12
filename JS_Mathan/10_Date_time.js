let val;
const today = new Date();

let birthday = new Date("march 10 1995");

val = today.getMonth();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getMilliseconds();
val = today.getTime(); //The amount of time passed

birthday.setMonth(2);
birthday.setDate(13);
birthday.setFullYear(2019);
birthday.setHours(3);
birthday.setMinutes(10);
birthday.setSeconds(100);
console.log(birthday);
// console.log(typeof val);
