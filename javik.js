let firstCard, secondCard, sum, isGameStarted;

const cardEl = document.getElementById("card");
const sumEl = document.getElementById("sumEl");
const messageEl = document.getElementById("messageEl");
const btn_newCard = document.getElementById("btn_newCard");
const btn_Start = document.getElementById("btn_Start");

function getRandomInt() {
    return Math.floor(Math.random() * 10) + 1;
}

function startNewGame() {
    firstCard = getRandomInt();
    secondCard = getRandomInt();
    sum = firstCard + secondCard;
    cardEl.textContent = "Cards: " + firstCard + " " + secondCard;
    sumEl.textContent = "Sum: " + sum;
    messageEl.textContent = 'Можешь взять ещё одну карту';
    btn_Start.style.display = "none"; 
    btn_newCard.style.display = "block";
    isGameStarted = true;
}

function newCard() {
    if (!isGameStarted) {
        return; 
    }

    let additionalCard = getRandomInt();
    sum += additionalCard;
    cardEl.textContent += " " + additionalCard;
    sumEl.textContent = "Sum: " + sum;

    if (sum > 21) {
        messageEl.textContent = 'Ты проиграл!';
        endGame();
    } else if (sum === 21) {
        messageEl.textContent = 'Тебе повезло!';
        endGame();
    }
}

function endGame() {
    isGameStarted = false;
    btn_newCard.style.display = "none"; 
    btn_Start.textContent = "New Game";
    btn_Start.style.display = "block"; 
}


btn_newCard.addEventListener("click", newCard);


btn_Start.style.display = "block";
btn_newCard.style.display = "none";

btn_Start.addEventListener("click", startNewGame);
