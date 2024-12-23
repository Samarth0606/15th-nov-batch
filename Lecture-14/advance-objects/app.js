

// let room = {
//     chair : 2,           //property
//     bed : 1,             //property
//     isAlmirah : true,    //property
//     isTable : false,     //property
//     acBrand: "voltas",   //property
//     clock : function(abc){  //methods 
//         console.log("tick tick tick tick" , abc); 
//     }
// }

// // console.log( room.isTable );


// console.log( room.clock );
// console.log( room.clock(100) )


// ------------------------------

//this is wrong definition  (we will have a class on this keyword)

// `this keyword` which is pointing to the object of the method inside which we are using it(this)

let person = {
    naam: "Samarth Vohra",
    age: 16,
    greet:function(){
        // console.log(`Good morning from samarth vohra`); 
        // console.log(`Good morning from ${person.naam}`); 
        console.log(`Good morning from ${this.naam}`); 
    }
}

console.log(person.naam);
person.greet()















