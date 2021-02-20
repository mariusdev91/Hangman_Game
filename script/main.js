function turnWordIntoArray() {
    const wordToGuess = document.querySelector('input').value;
    let letterArray = wordToGuess.split('');
    const para = document.getElementById('wordArea');
    for (let i = 0; i < letterArray.length; ++i) {
        if (i !== letterArray.length - 1) {
            para.innerText += '_' + ' ';
        } else {
            para.innerText += '_';
        }
    }
}

let triesLeft = 8;
function checkForLetterOrWordMatch() {
    let letterOrWordwordToGuess = document.getElementById('guessArea').querySelector('input').value.toUpperCase();
    const wordToGuess = document.querySelector('input').value.toUpperCase();
    let modifiedWord = document.getElementById('wordArea').innerText.toUpperCase();
    let para = '';
    if (wordToGuess.indexOf(letterOrWordwordToGuess) !== -1 && modifiedWord.indexOf(letterOrWordwordToGuess) === -1 && letterOrWordwordToGuess.length < wordToGuess.length) {
        for (let j = 0; j < wordToGuess.length; ++j) {
            if (wordToGuess[j] === letterOrWordwordToGuess) {
                para += letterOrWordwordToGuess;
            } else {
                para += modifiedWord[j];
            }
        }
        document.getElementById('wordArea').innerText = '';
        para = para.toUpperCase();
        document.getElementById('wordArea').innerText = para;
        alert(document.getElementById('wordArea').innerText + " " + wordToGuess);
        if (document.getElementById('wordArea').innerText.localeCompare(wordToGuess) === 0) {
            document.getElementById('score').innerText = `You have won! Congratulations! You had ${triesLeft} tries left. Want to try another game?`;
            const newGame = document.createElement('button');
            newGame.innerText = 'New Game';
            document.getElementById('score').appendChild(newGame);
            newGame.addEventListener('click', function () {
                location.reload();
            });
        }
    } else if (wordToGuess.localeCompare(letterOrWordwordToGuess) === 0) {
        document.getElementById('wordArea').innerText = '';
        document.getElementById('wordArea').innerText = wordToGuess.toUpperCase();
        document.getElementById('score').innerText = `You have won! Congratulations! You had ${triesLeft} tries left. Want to try another game?`;
        const newGame = document.createElement('button');
        newGame.innerText = 'New Game';
        document.getElementById('score').appendChild(newGame);
        newGame.addEventListener('click', function () { location.reload();});
    } else if (triesLeft > 0 && wordToGuess.indexOf(letterOrWordwordToGuess) === -1 || modifiedWord.indexOf(letterOrWordwordToGuess) !== -1) {
        document.getElementById('score').innerText = `You have ${triesLeft} tries left! Be careful!`;
        --triesLeft;
    } else if (triesLeft === 0) {
        document.getElementById('score').innerText = `You have ${triesLeft} tries left! You are dead! To play again, enter a new word. Good luck!`;
    }
}

function init() {
    alert('Welcome to hangman! Good luck!')
    document.getElementById('myText').focus();
    const addWordButton = document.getElementById('addWord');
    const addLetterButton = document.getElementById('checkForLetter');
    addWordButton.addEventListener('click', turnWordIntoArray);
    addLetterButton.addEventListener('click', checkForLetterOrWordMatch);
}

init();