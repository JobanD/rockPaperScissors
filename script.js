function computerPlay(){
    let cpuChoice = Math.random()
    if (cpuChoice < 0.34){
        cpuChoice = "rock"
    } else if (cpuChoice < 0.67) {
        cpuChoice = "paper"
    } else {
        cpuChoice = "scissors"
    }
    return cpuChoice
}

function playerSelection(){
    let pChoice = prompt("Do you choose rock, paper, or scissors: ")
    return pChoice.toLowerCase()
}

function playRound(user, cpu){
    let pWins = "You Win!!"
    let cWins = "You Lose :("

    if(user == cpu) {
        return "The result is a tie"
    }

    if(user=="rock"){
        if(cpu=="scissors"){
            return pWins
        } else {
            return cWins
        }
    }

    if (user=="paper"){
        if(cpu=="rock"){
            return pWins
        } else {
            return cWins
        }
    }

    if (user=="scissors") {
        if(cpu=="paper"){
            return pWins
        } else {
            return cWins
        }
    }
}

function game() {
    for (i=0; i < 5; i++){
        console.log(playRound(playerSelection(), computerPlay()))
    }
}

console.log(game())
