

// function sam(){

// }
// console.log( sam() ); //undefined

// ----------------------------



// function sam(){

// }
// console.log( new sam() ); // {}

// ----------------------------

// async function sam(){

//     return 100
// }
// console.log(  sam() );  // promise

// ----------------------------

// async function sam(){

//     return new Promise(function(resolve , reject){
//         resolve("lol")
//     })
// }
// console.log(  sam() );  // promise


// ----------------------------



// function timeTakingTask(){
//     return new Promise(function(resolve , reject){
//         setTimeout(function(){
//             resolve("secret password")
//         } , 4000)
//     })
// }
// async function learnAsync(){
//     console.log(10);
//     console.log("please wait i am calling ```timeTakingTask fn``` ");
//     let resolvedData = await timeTakingTask(); //promise resolved
//     console.log(resolvedData , "data part");
//     console.log(20);
//     console.log(30);
// }
// function sam(){
//     console.log(100);
//     console.log(200);
//     console.log(300);
//     console.log(400);  
// }

// learnAsync()
// sam()


// ----------------------------------------------------------------


function timeTakingTask(){
    return new Promise(function(resolve , reject){
        setTimeout(function(){
            resolve("secret password")
        } , 4000)
    })
}
async function learnAsync(){
    console.log(10);
    console.log("please wait i am calling ```timeTakingTask fn``` ");
    let resolvedData = await timeTakingTask(); //promise resolved
    console.log(resolvedData , "data part");
    console.log(20);
    console.log(30);
}
async function sam(){
    console.log(100); 
    console.log(200);
    await timeTakingTask()
    console.log(300);
    console.log(400);  
}

learnAsync()
sam()




