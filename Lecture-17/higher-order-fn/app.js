
// callback fn
function a(){
    console.log("hi i am a");
}

// higher order fn - 1
function b(fn){
    console.log("hi i am fn b");
}

b(a);

// ---------------------------------------------------

// higher order fn - 2

// higher order fn - 2
function outer(){
    console.log("i am outer");
    function inner(){
        console.log("i am not callback");
    }
    return inner;
}