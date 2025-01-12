
// function Person2(a,b,c){
//     this.name = a;
//     this.age = b;
//     this.isMale = c;
//     this.greet = function(){
//         console.log(`hello from ${this.name}`);
//     }
// }

// let p1 = new Person2("samarth" , 99 , true);
// p1.greet()

// -------------------------------------------------------

// classes
// class Person{
//     constructor(a,b,c){
//         this.name = a;
//         this.age = b;
//         this.isMale = c;
//     }
//     greet(){
//         console.log(`hello from ${this.name}`);
//     }
// }
// let p2 = new Person("maverick" , 99 , true);
// p2.greet()


// ----------------------------------------------


// function Sam2(x , y){
//     this.naam = x;
//     this.age = y;
// }
// Sam2.prototype.greet = function(){
//         console.log("hello");
// }

// let p1 = new Sam2("sam" , 10)
// let p2 = new Sam2("mav" , 3)
// console.log(p1);
// console.log(p2);
// -----------------------------


// class Sam{
//     constructor(x , y){
//         this.naam = x;
//         this.age = y;
//     }
//     greet(){
//         console.log("hello");
//     }
// }

// class Person{
//     constructor(x , y){
//         this.naam = x;
//         this.age = y;
//     }
//     greet(){
//         console.log("hello");
//     }
// }

// let p3 = new Sam("sam" , 10)
// let p4 = new Person("mav" , 3)
// console.log(p3);
// console.log(p4);

// // -----------------------------

// class Sam{
//     constructor(x , y){
//         this.naam = x;
//         this.age = y;
//     }
//     greet(){
//         console.log("hello");
//     }
// }

// class Person extends Sam{
//     constructor(x,y,z){
//         super(x , y)
//         this.rollNo = z;
//     }
//     bye(){
//         console.log("tata");
//     }
// }

// let p3 = new Person("sam" , 10 , 1000)
// let p4 = new Person("mav" , 3 , 1001)
// console.log(p3);
// console.log(p4);


// -----------------------------

class Sam{
    constructor(x , y){
        this.naam = x;
        this.age = y;
    }
    greet(){
        console.log("hello");
    }
}

class Person extends Sam{
    constructor(x,y,z){
        super(x , y) //calling the constructor of the parent
        this.rollNo = z;
    }
    greet(){
        console.log("good morning");
    }
    bye(){
        console.log("tata");
    }
}

let p3 = new Person("sam" , 10 , 1000)
let p4 = new Person("mav" , 3 , 1001)
console.log(p3);
console.log(p4);