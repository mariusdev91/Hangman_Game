function turnWordIntoArray() {
    const input = document.querySelector('input').value;
    let letterArray = input.split('');
    const para = document.getElementById('wordArea');
    for (let i = 0; i < letterArray.length; ++i) {
        if (i % 2 === 0) {
            para.innerText += letterArray[i].toUpperCase();
        } else {
            para.innerText += "_";
        }
    }
}

let triesLeft = 8;
function checkForLetterInWord() {
    let letterOrWordInput = document.getElementById('guessArea').querySelector('input').value;
    const input = document.querySelector('input').value;
    let modifiedWord = document.getElementById('wordArea').innerText;
    let para = "";
    if (input.indexOf(letterOrWordInput) !== -1 && modifiedWord.indexOf(letterOrWordInput) === -1 && letterOrWordInput.length < input.length) {
        for (let j = 0; j < input.length; ++j) {
            if (input[j] === letterOrWordInput) {
                para += letterOrWordInput;
            } else {
                para += modifiedWord[j];
            }
        }
        document.getElementById('wordArea').innerText = "";
        para = para.toUpperCase();
        document.getElementById('wordArea').innerText = para;
        if (para.localeCompare(input) === 0) {
            document.getElementById('score').innerText = `You have won! Congratulations! You had ${triesLeft} tries left. Want to try another game?`;
            const newGame = document.createElement('button');
            newGame.innerText = "New Game";
            document.getElementById('score').appendChild(newGame);
            newGame.addEventListener('click', function () {
                location.reload();
            });
        }
    } else if (input.localeCompare(letterOrWordInput) === 0) {
        document.getElementById('wordArea').innerText = "";
        document.getElementById('wordArea').innerText = input.toUpperCase();
        document.getElementById('score').innerText = `You have won! Congratulations! You had ${triesLeft} tries left. Want to try another game?`;
        const newGame = document.createElement('button');
        newGame.innerText = "New Game";
        document.getElementById('score').appendChild(newGame);
        newGame.addEventListener('click', function () {
            location.reload();
        });
    } else if (triesLeft > 0 && input.indexOf(letterOrWordInput) === -1 || modifiedWord.indexOf(letterOrWordInput) !== -1) {
        document.getElementById('score').innerText = `You have ${triesLeft} tries left! Be careful!`;
        --triesLeft;
    } else if (triesLeft === 0) {
        document.getElementById('score').innerText = `You have ${triesLeft} tries left! You are dead! To play again, enter a new word. Good luck!`;
    }
}

function init() {
    alert("Welcome to hangman! Good luck!")
    document.getElementById('myText').focus();
    const addWordButton = document.getElementById('addWord');
    const addLetterButton = document.getElementById('checkForLetter');
    addWordButton.addEventListener('click', turnWordIntoArray);
    addLetterButton.addEventListener('click', checkForLetterInWord);
}

init();