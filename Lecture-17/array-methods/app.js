//array methods

// forEach() -> accepts a cb fn, which has 2 arguments (item,index) and doesnot returns anything
// let arr = [10,20,30,40,50,60];

// let ret = arr.forEach( function(item , index){
//     return item*item
// } )

// console.log(ret);


// --------------------------------
// map() -> accepts a cb fn, which has 2 arg (item,index) -> returns a new array of the same length
// let arr = [10,20,30,40,50,60]; //6

// let newArr = arr.map( function(item , index){
//     return item*2
// } )

// console.log(arr);
// console.log(newArr);



// --------------------------------
// filter() -> accepts a cb fn, which has 2 arg (item,index) -> returns a new array but length is not fixed
// (because it only returns the truthy value)

// let arr = [10,20,30,40,50,60];

// let retArr = arr.filter(function(item,index){
//     if(item%10 == 0){
//         return true
//     }
// })
// console.log(arr);
// console.log(retArr);



// --------------------------------
// reduce() (HW) - mdn
// --------------------------------
// sort() (HW) - mdn
// --------------------------------
// some()
// let arr = [10,20,30,40,50,60,70];
// let retArr = arr.some(function(item,index){
//     if(item%100 == 0){
//         return true
//     }
// })

// console.log(retArr);


// --------------------------------
// every()

let arr = [10,20,30,40,50,65,70];
let retArr = arr.every(function(item,index){
    if(item%10 == 0){
        return true
    }
})

console.log(retArr);







