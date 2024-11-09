let boxes = document.querySelectorAll('.box')
let turn = 'X'
let isGameOver = false

boxes.forEach(ev => {
    ev.innerHTML = ''
    ev.addEventListener('click', () => {
        if(!isGameOver && ev.innerHTML === ''){
            ev.innerHTML = turn 
            checkWin()
            // checkDraw()
            changeTurn()
        }
    })
})

const changeTurn = () => {
    if(turn === 'X') {
        turn = 'O'
        document.querySelector('.bg').style.left = '85px'
    }
    else {
        turn = 'X'
        document.querySelector('.bg').style.left = '0px'
    }
}

const checkWin = () => {
    let winConditions = [
        [0, 1, 2], 
        [3, 4, 5], 
        [6, 7, 8],
        [0, 3, 6], 
        [1, 4, 7], 
        [2, 5, 8],
        [0, 4, 8], 
        [2, 4, 6]
    ]
    for(let i = 0; i < winConditions.length; i++){
        let play1 = boxes[winConditions[i][0]].innerHTML
        let play2 = boxes[winConditions[i][1]].innerHTML
        let play3 = boxes[winConditions[i][2]].innerHTML

        if(play1 != '' && play1 === play2 && play1 === play3){
           isGameOver = true
           document.querySelector('#results').innerHTML = `Player ${turn} win`
           document.querySelector('#play-again').style.display = 'inline-block'

           for(j = 0; j < 3; j++) {
            boxes[winConditions[i][j]].style.backgroundColor = '#9B7EBD'
            boxes[winConditions[i][j]].style.color = '#000'
           }
        }
    }
}