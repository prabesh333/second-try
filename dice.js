let diceImage = document.getElementById("diceImage");
let rollButton = document.getElementById("rollButton");
let result = document.getElementById("result");

let diceImages = [
    "one.png",
    "two.png",
    "three.png",
    "four.png",
    "five.png",
    "six.png"
];
diceImage.src = diceImages[0];

function rollDice() {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    diceImage.src = diceImages[randomNumber - 1];

    result.textContent = "You rolled: " + randomNumber;
}

rollButton.addEventListener("click", rollDice);