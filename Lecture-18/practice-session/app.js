// let arr = [1,2,3,4,5,10,20];

// way-1
// function task(arrr){
//     let newArr = arrr.map(function(item , index){
//         return 2*item;
//     })
//     let filArr = newArr.filter(function(item,index){
//         if(item>=10){
//             return true
//         }
//     })
//     console.log(newArr);
//     console.log(filArr);
    
// }

// way-2
// function task(arrr){
//     let newArr = arrr.map(function(item , index){
//         return 2*item;
//     }).filter(function(item,index){
//         if(item>=10){
//             return true
//         }
//     })
//     console.log(newArr);
// }

// task(arr)

// ------------------------------------------


// let arr = [1,2,3,4,5,6,7,8,9,10];

// function sum(arrr){
//     let ans = arrr.reduce(function(acc , curr){
//         return acc + curr
//     } , 0)
//     console.log(ans); 
// }

// sum(arr)

// ------------------------------------------
// push -> adding at the last of array
// pop -> removing from the last of array
// unshift ->  adding at the starting of array
// shift -> removing from the starting of the array


// let arr = [10,"sam" , true , false , "vohra" , 65];

// function get(arrr , fn){
//     let result = [];
//     for(let item of arrr){
//         if( fn(item) ){
//             result.push(item);
//         }
//     }
//     return result
// }
// function getString(item){
//     if( typeof(item) === 'string' ){ return true }
// }
// function getNumber(item){
//      if( typeof(item) === 'number' ){ return true }
// }
// function getBoolean(item){
//      if( typeof(item) === 'boolean' ){ return true }
// }


// console.log( get(arr , getString) );
// console.log( get(arr , getNumber) );
// console.log( get(arr , getBoolean) );

// --------------------------------------------

// privatisation of variable
function counter(){
    let count = 0;
    return {
        getCount: function(){
            console.log(count);
        } ,
        increment: function(){
            count++;
        } ,
        decrement: function(){
            count--;
        } ,
        reset: function(){
            count = 0;
        }
    }
}
 
let out = counter();
out.getCount()
out.increment(); out.increment(); out.increment()
out.getCount()
out.decrement(); out.getCount()
out.reset()
out.getCount()
