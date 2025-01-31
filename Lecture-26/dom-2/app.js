let h2 = document.querySelector('h2');

// h2.setAttribute('class' , 'vohra')
// h2.setAttribute('class' , 'sam')

// h2.setAttribute('class' , 'sam vohra')

// ------------------

// classlist

// h2.classList.add('vohra' , "sam" , "mav")

// h2.classList.remove('vohra' , "sam")

// h2.classList.toggle('vohra')


// console.log( h2.classList.contains('vohra') );



// ------------------


// let divv = document.querySelector('.divv')

// console.log(divv.children[0]);
// console.log(divv.children[0].children[0]);
// console.log(divv.children[0].children[0].style.color = "red");

// let small = document.querySelector('.smaall');

// console.log(small.parentElement.parentElement.parentElement.style.border = "2px solid black");


let head = document.querySelector('.head');
console.log(head.previousElementSibling.style.color="red");
console.log(head.nextElementSibling.style.color="green");
