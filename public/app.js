// Initial game state

let cells = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let result = document.querySelector('.result');
let btns = document.querySelectorAll('.btn');
let conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Function to handle player moves
const ticTacToe = (element, index) => {
    // Your game logic here

    /*
    **Part 1: Winning Conditions (Add your code here)**

    1. Implement the logic to check for winning conditions using the 'conditions' array.
    2. Display a winning message in the 'result' element when a player wins.
    3. Disable all buttons after a win.
    */

const { Touchscreen } = require("puppeteer");
function checkWinner(){
        const cells=document.querySelectorAll('.cell');
        }
}


    // Your code to display the current player's turn
    // ...

    // Your code to handle button and cell interactions
    // ...


    /*
    **Part 2: Reset Function (Add your code here)**

    1. Implement a new function that resets the game to its initial state.
    2. Ensure the 'cells', 'btns', and 'currentPlayer' variables are reset.
    3. Update the 'result' element to indicate the current player's turn.
    4. Re-enable all buttons for a new game.
    */

// Function to reset the game
const resetGame = () => {
        const cells = document.querySelectorAll('.cell');
            cells.forEach(cell => {
                    cell.innerHTML  ="";
                        });
                            currentPlayer='X';
                                gameOver=false;
                                    document.querySelectorAll('.result').textContent= `Player${currentPlayer}sturn`;
};

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => ticTacToe(btn, i));
});

document.querySelector('#reset').addEventListener('click', resetGame);


let gameOver = false;

function makeMove(cell){
    if(cell.innerHTML == ''&&!gameOver){
       cell.innerHTML = currentPlayer;
       checkWinner();
       currentPlayer = currentPlayer == 'X'?'O':'X';
       document.querySelection('.result').textContent = `Player${currentPlayer}sturn`;
    }
}




