function wordToArray() {
    const wordToGuess = document.querySelector('input').value;
    let letterArray = wordToGuess.split('');
    const wordArea = document.getElementById('wordArea');
    letterArray.forEach(function (index) {
        if (index !== letterArray.length - 1) {
            wordArea.innerText += '_' + ' ';
        } else {
            wordArea.innerText += '_';
        }
    });
}

function winMessage() {
    document.getElementById('score').innerText = `You have won! Congratulations! You had ${triesLeft} tries left. Want to try another game?`;
    const newGame = document.createElement('button');
    newGame.innerText = 'New Game';
    document.getElementById('score').appendChild(newGame);
    newGame.addEventListener('click', function () {
        location.reload();
    });
}

let triesLeft = 8;
function comparingValues() {
    let letterOrWordwordToGuess = document.getElementById('guessArea').querySelector('input').value.toUpperCase();
    const wordToGuess = document.querySelector('input').value.toUpperCase();
    let modifiedWord = document.getElementById('wordArea').innerText.toUpperCase();
    let wordArea = '';
    if (wordToGuess.indexOf(letterOrWordwordToGuess) !== -1 && modifiedWord.indexOf(letterOrWordwordToGuess) === -1 && letterOrWordwordToGuess.length < wordToGuess.length) {
        for (let j = 0; j < wordToGuess.length; ++j) {
            if (wordToGuess[j] === letterOrWordwordToGuess) {
                wordArea += letterOrWordwordToGuess;
            } else {
                wordArea += modifiedWord[j];
            }
        }
        document.getElementById('wordArea').innerText = '';
        wordArea = wordArea.toUpperCase();
        document.getElementById('wordArea').innerText = wordArea;
        if (document.getElementById('wordArea').innerText.localeCompare(wordToGuess) === 0) {
            winMessage();
        }
    } else if (wordToGuess.localeCompare(letterOrWordwordToGuess) === 0) {
        document.getElementById('wordArea').innerText = '';
        document.getElementById('wordArea').innerText = wordToGuess.toUpperCase();
        winMessage();
    } else if (triesLeft > 0 && wordToGuess.indexOf(letterOrWordwordToGuess) === -1 || modifiedWord.indexOf(letterOrWordwordToGuess) !== -1) {
        document.getElementById('score').innerText = `You have ${triesLeft} tries left! Be careful!`;
        --triesLeft;
    } else if (triesLeft === 0) {
        document.getElementById('score').innerText = `You have ${triesLeft} tries left! You are dead! To play again, enter a new word. Good luck!`;
    }
}

function startGame() {
    alert('Welcome to hangman! Good luck!')
    document.getElementById('myText').focus();
    const addWordButton = document.getElementById('addWord');
    const addLetterButton = document.getElementById('checkForLetter');
    addWordButton.addEventListener('click', wordToArray);
    addLetterButton.addEventListener('click', comparingValues);
    ++start;
}

startGame();