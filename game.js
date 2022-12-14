let board = ['','','','','','','','',''];
let playerTime = 0;
let gameOver = false;
let symbols = ['o','x'];




function reload(){
    board = ['','','','','','','','',''];
    playerTime = 0;
    gameOver = false;
    const squares = document.querySelectorAll('.square')

    squares.forEach(square => square.innerHTML = '')
}

function handleMove(position){
    if(gameOver){
        return;
    }

    if(board[position] == ''){
    board[position] = symbols[playerTime];
    
    gameOver = isWin();

    if(playerTime == 0){
        playerTime = 1;
    }else{
        playerTime = 0;
    }
 }  
    return gameOver;
    
    
}

function isWin(){
    let winStates = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]

    for (let i = 0; i<winStates.length; i++){
        let sequencia = winStates[i];

        let pos1 = sequencia[0];
        let pos2 = sequencia[1];
        let pos3 = sequencia[2];

        if(board[pos1] == board[pos2] && board[pos1] == board[pos3] && board[pos1] != ''){
            return true;
        }

    }
    return false;

}

