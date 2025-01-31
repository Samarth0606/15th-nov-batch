let redBtn = document.querySelector('.red')
let greenBtn = document.querySelector('.green')
let blueBtn = document.querySelector('.blue')
let bodyEl = document.querySelector('body')


redBtn.addEventListener('click' , function(){
    bodyEl.style.backgroundColor = "red"
})
greenBtn.addEventListener('click' , function(){
    bodyEl.style.backgroundColor = "green"
})
blueBtn.addEventListener('click' , function(){
    bodyEl.style.backgroundColor = "blue"
})



