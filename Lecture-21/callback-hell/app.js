// function step1(fn){
//     console.log("Please wait i am selecting image...");
//     setTimeout( function(){
//         console.log("image selected")
//         fn("selected image")
//     } , 4000 )  
// }
// function step2(image , fn){
//     console.log(`please wait adding filter to ${image}...`);
//     setTimeout(function(){
//         console.log("image is filtered");
//         fn("filtered image")
//     } , 2000)
// }
// function step3(filter , fn){
//     console.log(`please wait adding caption to ${filter}...`);
//     setTimeout(function(){
//         console.log("caption is added");
//         fn("captioned image")
//     } , 5000)
// }
// function step4(caption){
//     console.log(`please wait uploading the ${caption}`);
//     setTimeout(function(){
//         console.log("image finally uploaded");
//     } , 3000)
// }

// // callback hell (nesting of cb fn)
// step1( function(image){
//     step2(image , function(filter){
//         step3(filter , function(caption){
//             step4(caption)
//         } )
//     } )
// } )



// ------------------------------------------



// s1 -> s2 -> s3 -> s4

function step1(fn){
    console.log("please wait i am selecting the image...");
    setTimeout( function(){
        console.log("hey image is selected");
        fn("selected image") 
    } , 4000 ) 
}
function step2(image , fn){
    console.log(`please wait i am adding filter to the ${image}...`);
    setTimeout( function(){
        console.log("filter is applied");
        fn("filtered image")
    } , 2000 ) 
}
function step3(filter , fn){
    console.log(`please wait i am adding caption to the ${filter}...`);
    setTimeout( function(){
        console.log("caption is added");
        fn("captioned image")
    } , 5000 )
}
function step4(caption){
    console.log(`please wait i am uploading the ${caption}`);
    setTimeout(function(){
        console.log("image finally uploaded");
    } , 3000)
}


// callback hell => nesting of cb fn
step1( function(image){    
    step2(image , function(filter){
        step3(filter , function(caption){
            step4(caption)
        } )
    } )
} )
















