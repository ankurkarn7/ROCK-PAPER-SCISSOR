let userScore = 0;
let compScore = 0
let userscore = document.querySelector(".myScore")
let compscore = document.querySelector(".compScore")
let display = document.querySelector(".display")
let computer = document.querySelector(".computer")
let genCompChoice = () => {
    arr = ["rock", "paper", "scissor"]
    let randIdx = Math.floor(Math.random() * 3)
    return arr[randIdx];
}
console.log("Comp choice:",genCompChoice())

const result = (userWin, userChoice, compChoice) => {
    if (userWin) {
        display.innerText = `You won!\n ${userChoice} beats ${compChoice}`
        display.style.backgroundColor = "green"
        userScore++
        userscore.innerText = userScore;
    } else {
        display.innerText = `You lost!\n ${compChoice} beats ${userChoice}`
        display.style.backgroundColor = "red"
        compScore++;
        compscore.innerText = compScore;
    }
    computer.innerText = `Computer chose ${compChoice}`;
}

const playgame = (userChoice) => {
    console.log("user choice : ", userChoice)
    const compChoice = genCompChoice()
    console.log("comp choice :",compChoice)
    if (userChoice == compChoice) {
        display.innerText = "it's a draw"
        display.style.backgroundColor = "skyblue";
        computer.innerText = `Computer chose ${compChoice}`;
    } else {
        let userWin = true
        if (userChoice == "rock") {
            userWin = compChoice == "paper"?false:true;
        } else if(userChoice == "paper") {
            userWin = compChoice == "scissor" ? false:true;
        } else if(userChoice == "scissor"){
            userWin = compChoice == "rock" ? false: true;
        }
        result(userWin, userChoice, compChoice)
    }
} 

const choices = document.querySelectorAll(".choice")
choices.forEach((choice) => {
    choice.addEventListener("click", (genCompChoice) => {
        let userChoice = (choice.getAttribute("id"))
        playgame(userChoice)
    })
})