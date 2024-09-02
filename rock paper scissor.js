let userScore = 0;
let compScore = 0
let userscore = document.querySelector(".myScore")
let compscore = document.querySelector(".compScore")
let display = document.querySelector(".display")
let uChoice = document.querySelector(".uChoice")
let cChoice = document.querySelector(".cChoice")
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
}

const playgame = (userChoice) => {
    console.log("user choice : ", userChoice)
    const compChoice = genCompChoice()
    console.log("comp choice :",compChoice)
    if (userChoice == compChoice) {
        display.innerText = "it's a draw"
        display.style.backgroundColor = "skyblue";
        if(userChoice == "rock"){
            uChoice.src = 'yes/rock.png';
            cChoice.src = 'yes/rock1.png';
        }
        if(userChoice == "paper"){
            uChoice.src = 'yes/paper.png';
            cChoice.src = 'yes/paper1.png'
        }
        if(userChoice == "scissor"){
            uChoice.src = 'yes/scissor.png';
            cChoice.src = 'yes/scissor1.png';
        }
    } else {
        let userWin = true
        if (userChoice == "rock") {
            uChoice.src = 'yes/rock.png';
            if(compChoice == "paper"){
                userWin = false;
                cChoice.src = 'yes/paper1.png';
            } else{
                cChoice.src = 'yes/scissor1.png';
            }
        } else if(userChoice == "paper") {
            uChoice.src = 'yes/paper.png';
            if(compChoice == "scissor"){
                userWin = false;
                cChoice.src = 'yes/scissor1.png';
            } else{
                cChoice.src = 'yes/rock1.png';
            }
        } else if(userChoice == "scissor"){
            uChoice.src = 'yes/scissor.png';
            if(compChoice == "rock"){
                userWin = false;
                cChoice.src = 'yes/rock1.png';
            } else{
                cChoice.src = 'yes/paper1.png';
            }
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
