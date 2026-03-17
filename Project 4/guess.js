let randomNumber = parseInt((Math.random()*100)+1)

const submit= document.querySelector('.guessSubmit')
const userInput = document.querySelector('.guessField')
const guessSlot = document.querySelector('.guesses')
const remaining= document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('button')


let prevGuesses=[]
let attempts = 1

let playGame = true

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault() // Prevents the default form submission behavior, allowing us to handle the guess validation with JavaScript instead of reloading the page
    const guess= parseInt(userInput.value)
    validateGuess(guess)
});
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Enter a valid Number')
    } else if(guess<1 || guess>100){
        alert(`Enter a number between 1 and 100`)
    }
    else{ 
        prevGuesses.push(guess)
        if(attempts==10){
            displayGuess(guess)
            displayMessage(`Game Over, Correct number was ${randomNumber}`)
            endGame()
        } 
        else {
        displayGuess(guess)
        checkGuess(guess)
         }
    }
}

function checkGuess(guess){
        if (guess===randomNumber){
            displayMessage('You got it right!')
            endGame()
        } else if(guess<randomNumber){
            displayMessage('Your guess is too low!')
        } else if(guess>randomNumber){
            displayMessage('Your guess is too high!')
        }
}

function displayGuess(guess){
    userInput.value= '';
    guessSlot.innerHTML += `${guess} `;
    attempts ++;
    remaining.innerHTML=`${11-attempts}`; 
}

function displayMessage(message){
      lowOrHi.innerHTML = `<h2>${message}</h2>`  
}

function endGame(){
        userInput.value=''
        userInput.setAttribute('disabled','') // Disables the input field to prevent further guesses once the game has ended
        p.style.border = '3px solid #fff'
        p.style.backgroundColor = '#141414'
        p.style.color = '#fff'
        p.style.width = '250px'
        p.style.height = '50px'
        p.style.borderRadius = '25px'
        p.style.fontSize = '30px'
        p.style.marginTop = '2px'
        p.style.marginBottom= '10px'
        p.id = 'newGame'
        p.style.cursor= "pointer"
        p.textContent = 'Start new Game'
        startOver.appendChild(p);
        playGame =false;
        newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuesses = [];
    attempts = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - attempts} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
      lowOrHi.innerHTML = `<h2></h2>`

    playGame = true;
  });
}
