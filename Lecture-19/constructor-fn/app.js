



// function sam(){

// }

// console.log( sam() );


// ----------------

// function sam(){

// }

// console.log( new sam() );

// ----------------
// key : value

// function Sam(x , y){
//     this.naam = x;
//     this.age = y;
// }

// let p1 =  new Sam("maverick" , 2.5);
// let p2 =  new Sam("kashish" , 100);
// console.log(p1);
// console.log(p2);


// --------------------------------------------------------------

// constructor fn -> create objects


// function greet(){

// }

// general calling
// console.log( greet() ); //undefined
// constructor calling
// console.log( new greet() ); // {}

// --------------------------------------------------------------

// this points to the newly created object
// function Greet(a,b,c,d){
//     this.naam = a;
//     this.umar = b;
//     this.favColor = c;
//     this.isMale = d;
// }

// let p1 =  new Greet("maverick" , 2.5 , "brown" , true);
// let p2 =  new Greet("pooja" , 15 , "blue" , false);
// let p3 =  new Greet("kashish"  , 29 , "red" , true);

// console.log(p1);
// console.log(p2);
// console.log(p3);


// --------------------------------------------------------------

function Greet(a,b,c,d){
    this.naam = a;
    this.umar = b;
    this.favColor = c;
    this.isMale = d;
    this.hello = function(){
        console.log(`hello from ${this.naam}`);
    }
}

let p1 =  new Greet("maverick" , 2.5 , "brown" , true);
let p2 =  new Greet("pooja" , 15 , "blue" , false);
let p3 =  new Greet("kashish"  , 29 , "red" , true);

console.log(p1);
console.log(p2);
console.log(p3);




