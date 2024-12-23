


// fn definiton
// function maverick(){
//     console.log("woof woof");
// }

// maverick() //calling
// maverick() 
// maverick() 



// --------------------

// nature ? => return from a fn 👍

// function samarth(){
//     console.log("i am samarth vohra");
//     return "laddoo";
// }

// let ans; //js engine points i to undefined
// console.log(ans);


// function samarth(){
//     console.log("i am sam vohra");
// }

// let returnedValue = samarth()
// console.log( returnedValue ); //undefined


// -------------------------------------

// parametised functions

// function sum(a,b,c){ //paramters => accepting
//     let out = a+b+c;
//     // console.log(out);
//     return out;
// }

// let returnedValue = sum(10,20,30) //arguments => calling
// console.log(returnedValue);

// // or

// console.log( sum(10,20,30) );

// ----------------------------------


// function sam(){

//     return 100
// }
// let storing = sam();
// console.log(storing);
// // or
// console.log( sam() );


// -------------------------

// parametised functions

// function square(x){
//     return x*x
// }
// console.log( square(5) );

// -------------
// default paramterised functions


// function cube(b){
function cube(b=2){
    return b*b*b;
}
cube(7)
cube()


function square(x=7){
    return x*x
}

console.log( square() );
console.log( square(10) );





