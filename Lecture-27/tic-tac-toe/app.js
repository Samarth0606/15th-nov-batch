


let cellElements = document.querySelectorAll('.cell');

for(let cell of cellElements){
    cell.addEventListener('click' , handleClick , {once:true})
}

let circle_turn = false;

let WINNING_COMBINATION = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function handleClick(e){
    let clickedCell = e.target;
    let currentClass = circle_turn ? 'circle' : 'x'

    // mark symbol x , o
    clickedCell.classList.add(currentClass)

    // check win
    if(checkWin(currentClass)){
        document.querySelector('.final-winner').innerHTML = `WINNER ${currentClass}`
        document.querySelector('.final-winner').parentElement.classList.add('show')
    }
    // check draw
    if(checkDraw()){
        document.querySelector('.final-winner').innerHTML = `DRAW`
        document.querySelector('.final-winner').parentElement.classList.add('show')
    }

    // switch turn 
    circle_turn = !circle_turn
}

function checkWin(currentClass){
    return WINNING_COMBINATION.some( function(itemRow){
        return itemRow.every( function(item){
            return cellElements[item].classList.contains(currentClass)
        } )
    } )
}

function checkDraw(){
    // spreading to make it a real array and not nodelist
    return [...cellElements].every( function(cell){
        return cell.classList.contains('x') || cell.classList.contains('circle')
    } )
}

document.querySelector('#restart-btn').onclick = restart;
document.querySelector('#new-btn').onclick = restart;

function restart(){
    window.location.reload();
}





