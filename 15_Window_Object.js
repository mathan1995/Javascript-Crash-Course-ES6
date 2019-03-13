console.warn("#A look in to OBJECT Windows");
console.warn("window metghods object properties");

//WINDOW METHODS /OBJECTS ?PROPERTIES

console.log(123);
// //Alert
// alert("Hello alert");

// const input = prompt();
// alert(input);

//confirm Message

// if (confirm("Are You Sure")) {
//   console.log("YES");
// } else {
//   console.log("NO");
// }

let val;
//outter height and width
val = window.outerHeight;
val = window.outerWidth;

//inner Height and inner width
val = window.innerWidth;
val = window.innerHeight;

//Scroll Points
val = window.scrollY;
val = window.scrollX;

//Location object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

// //Redirect the page
// window.location.href = "http://www.google.com";
// window.location.reload();

window.history.go(-2);
console.log(val);
