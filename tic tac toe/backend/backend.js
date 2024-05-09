// let restartBtn = document.getElementById("restartBtn");
let messageEl = document.getElementById("message-el");

let isAlive = false;

function startGame() {
    isAlive = true
    renderGame()
}
function renderGame() {
    if (combination === Win) {
        message =  "Congratulation, you win!"
        showMessage(message, "win")
    } else if (combination === "Tie"){
        message ="It is a tie!"
        showMessage(message, "tie")
    } else {
        message = "Ha! You Lost"
        showMessage(message, "lose")
    }
}

/* function showMessage(message, type) {
    messageEl.textContent = message;
    messageEl.classList.add(type);
    messageEl.classList.add("show");

    setTimeout(() => {
        messageEl.classList.remove(type);
        messageEl.classList.remove("show");
    }, 3000);
} */

// restartBtn.addEventListener("click", function(){
//     window.location.href = "./index.html";
// });
/* function restartGame() {
    window.location.href = "./index.html";
} */

let restartBtn = document.getElementById("restartBtn");

restartBtn.addEventListener('click', () => {
  window.open('/game/index.html', '_blank');
});
