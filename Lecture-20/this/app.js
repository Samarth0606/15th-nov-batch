
// "this depends on how it is being called upon"
// ----------------------------------------------

// 1. direct/functional calling -> window

// function sam(){
//     console.log(this);
// }

// sam(); //direct/functional calling

// ----------------------------------------------
// object of the method inside which this keyword is used
// 2. method calling -> object

// let obj = {
//     a: 10,
//     fn: function(){
//         console.log(this);
//     }
// }

// obj.fn()

// ----------------------------------------------
// "this depends on how it is being called upon"

// let objj = {
//     a: 10,
//     fn: function(){
//         console.log(this , "1"); // objj
//         function sam(){
//             console.log(this , "2"); // window
//         }
//         sam()
//     }
// }

// objj.fn()

// -------------------------------------------

// let objjj = {
//     a: 10,
//     fn: function(){
//         console.log(this , "1"); // window
//         function sam(){
//             console.log(this , "2"); // window
//         }
//         sam()
//     }
// }

// let abc = objjj.fn;
// abc()


// -------------------------------------------

// 3. constructor functions -> newly created object

// function Sam(){
//     this.age = 20;
//     this.favColor = "blue"
// }

// let p1 = new Sam()
// let p2 = new Sam()

// -------------------------------------------

// 4. indirect calling => ```call, apply, bind``` -> changing the reference/address of this keyword

// let obj1 = {
//     a: 50
// }

// let obj2 = {
//     a: 10,
//     fn: function(x , y){
//         console.log(this.a , x , y); 
//     }
// }


// changing the reference/address of this keyword

// obj2.fn();         // 10
// arguments
// obj2.fn.call(obj1 , "sam" , "vohra") 
// obj2.fn.apply(obj1, ["sam" , "vohra"]) 

// let copyFn = obj2.fn.bind(obj1 , "sam" , "vohra") // creates a copy of that fn 

// copyFn()

// -------------------------------------------

// 5. arrow fn calling 
// this keyword depends on parents this keyword
// let obj = {
//     a: 10,
//     fn: function(){
//         console.log(this , "1"); // obj
//         let ans = ()=>{
//             console.log(this , "2"); //obj
//         }
//         ans();
//     }
// }

// obj.fn();

// ---------------------------

// let obj = {
//     a: 10,
//     fn: function(){
//         console.log(this , "1"); // window
//         let ans = ()=>{
//             console.log(this , "2"); //window
//         }
//         ans();
//     }
// }

// let ans = obj.fn;
// ans();

// // --------------------------

// let obj = {
//     a: 10,
//     fn: ()=>{
//         console.log(this , "1"); //window
//         let ans = ()=>{
//             console.log(this , "2"); //window
//         }
//         ans();
//     }
// }

// obj.fn();


// --------------------------



// let obj = {
//     a: 10,
//     fn: ()=>{
//         console.log(this , "1"); //window
//         let ans = function(){
//             console.log(this , "2"); //window
//         }
//         ans();
//     }
// }

// obj.fn();
