let guess = String.fromCharCode(randomInteger(97, 122));
const monitorGuess = document.querySelector('.monitorGuess');
let gueesd = [];
let textNode = document.createTextNode("");
const status1 = document.querySelector('#status');
const letterDisplay = document.querySelector('#letter1');
//97-122
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reset() {
    gueesd = [];
    letterDisplay.innerText = '?';
    status1.innerText = "fuess a letter"
    status1.style.color = "black";
    window.addEventListener('keypress', keypressing);


}

function keypressing(event) {
    const key = event.key.toLowerCase();

    if (key === guess) {
        status1.innerText = "You Won!";
        status1.style.color = "green";
        letterDisplay.innerText = key;
        monitorGuess.innerText = '';
        const newGame = document.createElement('h3')
        newGame.innerText = "click me if you want to sart again :)"
        newGame.style.border = '2px solid green';
        monitorGuess.appendChild(newGame);
        window.removeEventListener('keypress', keypressing)

        newGame.addEventListener('click', () => {
            reset()
            monitorGuess.removeChild(newGame);


        })

    }
    else {
        if (key.charCodeAt() < 97 || key.charCodeAt() > 122) {
            status1.innerText = "please enter vaild key"
            status1.style.color = "red";
            console.log('enter')

        }
        else if (gueesd.includes(key)) {
            status1.innerText = `${key} has already been guesd`;

        }
        else {
            gueesd.push(key);
            status1.innerText = "wrong letter"
            status1.style.color = "red";
            let textNode = document.createTextNode(`${key},`);
            monitorGuess.appendChild(textNode);

        }
    }

}

console.log(guess);
console.log(guess.charCodeAt())

window.addEventListener('keypress', keypressing);