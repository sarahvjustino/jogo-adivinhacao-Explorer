const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const btnTry = document.getElementById('btnTry');
const btnReset = document.getElementById('btnReset');

let randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1

document.addEventListener('keypress', handleEnter);
btnTry.addEventListener('click', handleTryClick);
btnReset.addEventListener('click', handleResetClick);

function handleEnter(e) {
    if (e.key == 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick()
    }
}

function handleTryClick(event) {
    event.preventDefault();

    let inputNumber = document.getElementById('inputNumber');

    if (inputNumber.value < 0 || inputNumber.value > 10 || inputNumber.value == '') {
        alert(`Digite um número de 0 a 10`);
    }

    if (Number(inputNumber.value) == randomNumber) {
        toggleScreen()
    }

    inputNumber.value = ''
    screen2.querySelector('.screen2 h1').innerText = `Você acertou em ${xAttempts} tentativas!`
    xAttempts++
};

function handleResetClick() {
    randomNumber = Math.round(Math.random() * 10);

    toggleScreen()

    xAttempts = 1;
}

function toggleScreen() {
    screen1.classList.toggle('hide');
    screen2.classList.toggle('hide');
}