let btnEl = document.querySelector('.btn')
let listEl = document.querySelector('.list')
let inpEl = document.querySelector('.input')


// task-1 + 2 //click and delete
btnEl.addEventListener('click' , function(event){
    // let todoText = event.target.value;
    let todoText = inpEl.value; //getter and setter

    // create a new list item (element)
    let li = document.createElement('li') //<li></li>

    li.innerHTML = todoText;

    li.addEventListener('click' , function(){
        li.remove()
    })

    // inside (append/appenChild/prepend)
    listEl.append(li)

    inpEl.value = ""

})






