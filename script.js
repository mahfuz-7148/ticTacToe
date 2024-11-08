window.addEventListener('DOMContentLoaded', () => {
    const tiles = Array.from(document.querySelectorAll('.tile'))
    const playerDisplay = document.querySelector('display-player')    
    const resetButton = document.querySelector('#reset')    
    const announcer = document.querySelector('.announcer')    

    let board = ['', '', '', '', '', '', '', '', '']
    let currentPlayer = '✖️'
    let isGameActive = true

    const playerXWon = 'PlayerXWon'
    const playerOWon = 'PlayerOWon'
    const tie = 'TIE'
    
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    const resetBoard = () => {
        board = ['', '', '', '', '', '', '', '', ''];
        isGameActive = true
        announcer.classList.add('hide')

        if(currentPlayer === '⭕') {
            
        }
    }

    resetButton.addEventListener('click', resetBoard)

})