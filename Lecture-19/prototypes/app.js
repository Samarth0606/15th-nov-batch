



// let obj = {
//     a:10,
//     b:20,
//     fn:function(){
//         console.log("hi");   
//     }
// }
// console.log(obj.a); // 10
// console.log(obj.b); // 20
// obj.fn() // hi


// --------------------------


// let obj = {
//     a:10,
//     b:20,
//     fn:function(){
//         console.log("hi");   
//     }
// }
// console.log(obj.c); // undef
// console.log(obj.g); // undef
// obj.sam() // error

// --------------------------

// let obj = {
//     a:10,
//     b:20,
//     fn:function(){
//         console.log("hi");   
//     }
// }
// console.log(obj.sam); // undef
// console.log(obj.vohra); // undef
// obj.toString()  // error
// // obj.vohra()  // error



// --------------------------


// constructor fn
function Sam(){
    this.naam = "samarth"
}

Sam.prototype.greet = function(){
        console.log("hi");  
}

let p1 = new Sam();
let p2 = new Sam();


// p1 // object

