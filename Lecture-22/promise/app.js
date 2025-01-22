


// let p1 = new Promise()
// let p1 = new Promise( function(){ } )

// let p1 = new Promise( function(sam , vohra){ } )

// let p1 = new Promise( function(resolve , reject){ 
    // resolve()
    // reject()
// } )


// ------------------------------------------------------------


// let p1 = new Promise(function(resolve , reject){
//     let data = "100 rupees"
//     let err = "i am not giving hupp"
//     resolve(data)
//     // reject(err)
// })
// // console.log(p1);

// p1
// .then()
// .catch()
// .finally()

// ------------------------------------------------------------


// let p1 = new Promise(function(resolve , reject){
//     let data = "100 rupees"
//     let err = "i am not giving hupp"
//     resolve(data)
//     reject(err)
// })

// p1
// .then( function(resp){
//     console.log(resp , "then");
// } )
// .catch( function(resp){
//     console.log(resp , "catch");
// } )
// .finally( function(){
//     console.log("finally");
// } )

// .then -> resolved
// .catch -> reject
// .finally -> any (all)

// ------------------------------------------------------------

// create instagram with promise (4 steps) => 4s 2s 5s 3s

// function step1(){
//     return new Promise(function(resolve , reject){
//         console.log("Please wait i am selecting image...");
//         setTimeout(function(){
//             resolve("Selected Image");
//         } , 4000)
//     })
// }
// function step2(image){
//     return new Promise(function(resolve , reject){
//         console.log(`Please wait adding filter to ${image}...`);
//         setTimeout(function(){
//             resolve("Filtered Image");
//         } , 2000)
//     })
// }
// function step3(filter){
//     return new Promise(function(resolve , reject){
//         console.log(`Please wait adding caption to ${filter}...`);
//         setTimeout(function(){
//             resolve("Captioned Image");
//         } , 5000)
//     })
// }
// function step4(caption){
//     return new Promise(function(resolve , reject){
//         console.log(`Please wait uploading the ${caption}...`);
//         setTimeout(function(){
//             resolve("Uploaded Image");
//         } , 3000)
//     })
// }

// step1()
// .then( function(data){
//     console.log(data);
//     return step2(data)
// } )
// .then( function(d){
//     console.log(d);
//     return step3(d)
// } )
// .then(function(resp){
//     console.log(resp);
//     return step4(resp)
// })
// .then(function(yourwish){
//     console.log("finally " + yourwish);
// })
// .catch(function(err){
//     console.log(err);
// })














