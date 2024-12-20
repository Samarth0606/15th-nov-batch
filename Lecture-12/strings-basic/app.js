
// let a = "samarth"
// let b = 'samarth'
// let c = `samarth` //backticks ``


// console.log(a , b , c);
// console.log(typeof(a) , typeof(b) , typeof(c));

// ----------------------------------------------

// output: "I AM SAMARTH VOHRA AND I LIVE IN NEW DELHI AND I AM A WEB DEVELOPER"
let naam = "SAMARTH VOHRA"
let state = "NEW DELHI"
let profession = "WEB DEVELOPER"

// concatenation (+) => not a good way
let output = "I AM " + naam + " AND I LIVE IN " + state + " AND I AM A " + profession;
console.log(output);


// string template literals => best way
let output2 = `I AM ${naam} AND I LIVE IN ${state} AND I AM A ${profession} AND ${2+2} HORSES`
console.log(output2);


// console.log("1" + "2");
// console.log(1 + 2);







// ----------------------------------------------