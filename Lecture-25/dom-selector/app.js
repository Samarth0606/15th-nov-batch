
// 1. selection ✅
// 2. manipualtion

// --------------------------

// 1. getElementsByTagName() //array

// let h1 = document.getElementsByTagName('h1');
// let h2 = document.getElementsByTagName('h2');
// console.log(h1);
// console.log(h2);
// console.log(h1[0]);
// console.log(h1[1]);

// // --------------------------

// // 2. getElementById() //single

// let samEle = document.getElementById('sam');
// console.log(samEle);


// --------------------------

// 3. getElementsByClassName() //array

// let classEle = document.getElementsByClassName('vohra');

// console.log(classEle[0]);
// console.log(classEle[1]);
// console.log(classEle[2]);

// -------------------------------------------------------------

// 1. selection ✅
// 2. manipualtion ✅


//  WET ❌
// let h1 = document.getElementsByTagName('h1');
// h1[0].style.color = "green"
// h1[0].style.backgroundColor = "orange"
// h1[0].style.fontSize = "70px"
// h1[0].style.border = "2px solid black"

// DRY ✅    
// let h1 = document.getElementsByTagName('h1');
// h1[0].style.cssText = `
//     color : red ;
//     background-color : orange;
//     font-size : 100px;
// `

// --------------------------------

// let h1 = document.getElementsByTagName('h1');
// h1[0].style.cssText = `
//     color : red ;
//     background-color : orange;
//     font-size : 100px;
// `
// h1[1].style.cssText = `
//     color : red ;
//     background-color : orange;
//     font-size : 100px;
// `

// --------------------------------

// let h1 = document.getElementsByTagName('h1');
// console.log(h1);

// for(let item of h1){
//     item.style.cssText = `
//         color : red ;
//         background-color : orange;
//         font-size : 100px;
//     `
// }


// -----------------------------------------------


// let tagEl  = document.querySelector('h1')     //single
// let tagEl2 = document.querySelector('.vohra') //single
// let tagEl3 = document.querySelector('#sam')   //single

// console.log(tagEl , tagEl2 , tagEl3)

// -----------

// let tagEl = document.querySelectorAll('h1')      //array
// let tagEl2 = document.querySelectorAll('.vohra') //array
// let tagEl3 = document.querySelectorAll('#sam')   //array

// console.log(tagEl , tagEl2 , tagEl3);





