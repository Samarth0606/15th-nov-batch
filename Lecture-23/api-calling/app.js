

//METHOD TO CALL AN API
// let API="https://api.tvmaze.com/search/shows?q=girls"
// fetch(API)

// FETCH -> WEB API (BROWSER)-> GIVES YOU DATA BUT INCOMPLETE AT FIRST GO -> .json() to get the complete data
// -> RETURNS A PROMISE(I CAN ONLY HANDLE PROMISE)
// -> .JSON returns a promise, with entirely complete data

// fetch("https://api.tvmaze.com/search/shows?q=girls")
// .then(function(resp){
//     // console.log(resp);
//     return resp.json()
// })
// .then(function(data){
//     console.log(data , "final data");  
// })
// .catch(function(err){
//     console.log(err);
// })

// ----------------------------------------------------------

// FETCH
// 1. promise

fetch("https://api.tvmaze.com/search/shows?q=girls")
.then(function(resp){
    return resp.json() //entire data
})
.then(function(anything){
    console.log(anything);
})
.catch(function(err){
    console.log(err);
})
// --------------------
// 2. async await
async function callApi(){
    let resp = await fetch("https://api.tvmaze.com/search/shows?q=girls")
    let data = await resp.json();
    console.log(data);
}

callApi()
// ----------------------------------------------------------
// AXIOS -> 3rd party library -> cdn
// RETURNS A PROMISE, WHICH GIVES ENTIRE DATA AT ONCE
// 1. promise
axios.get("https://api.tvmaze.com/search/shows?q=girls")
.then(function(resp){
    // console.log(resp , "then");
    console.log(resp.data);
})
.catch(function(err){
    console.log(err);
})
// -------
// 2. async
async function callApi2(){
    let resp = await axios.get("https://api.tvmaze.com/search/shows?q=girls");
    console.log(resp.data); 
}
callApi2()
// ----------------------------------------------------------








