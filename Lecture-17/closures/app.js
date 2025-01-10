

// function samarth(){
//     var a = 10;
//     let b = 20;
//     return function vohra(){
//         console.log(a);
//     }
// }

function samarth(){
    var a = 10;
    let b = 20;
    function vohra(){
        console.log(a);
    }
    return vohra;
}


let ret = samarth();
console.log(ret);
ret();









