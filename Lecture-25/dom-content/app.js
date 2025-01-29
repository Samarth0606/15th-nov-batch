




// selection
// let p1 = document.querySelector('p');
// // innerText (brainful) -> read css properties
// console.log( p1.innerText );

// // textContent (brainless) -> cant read css properties
// console.log( p1.textContent );

// --------------------------------------


let para1 = document.querySelector('.para');

// getters
console.log( para1.innerText ); // innerText (brainful) -> read css properties

console.log( para1.textContent ); // textContent (brainless) -> cant read css properties

console.log( para1.innerHTML ); // shows tags as well


// setters

// para1.innerText  = "<h1> Badminton 1 </h1>"
// para1.textContent  = "<h1> Badminton 2 </h1>"
para1.innerHTML  = "<h1> Badminton 3 </h1>"

