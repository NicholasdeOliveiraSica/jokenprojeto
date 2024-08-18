const pedra = document.querySelector("#rock")
const papel = document.querySelector("#paper")
const tesoura = document.querySelector("#scisors")
const userScore = document.querySelector("#your-score span")
const iaScore = document.querySelector("#ia-score span")
const display = document.querySelector(".happens")

let iaScorePrev = 0
let userScorePrev = 0
let iaChoice


pedra.addEventListener("click", clicouPedra)
papel.addEventListener("click", clicouPapel)
tesoura.addEventListener("click", clicouTesoura)

function clicouPedra() {

    iaChoice = escolhaIa()

    switch (iaChoice) {

        case 1:
            console.log("Empate")
            display.innerHTML = "Empate"
        break

        case 2:
            console.log("Perdeu")
            display.innerHTML = "Derrota"
            iaScorePrev += 1
        break

        case 3:
            console.log("Ganhou")
            display.innerHTML = "Vitória"
            userScorePrev += 1
        break
    }

    iaScore.innerHTML = iaScorePrev
    userScore.innerHTML = userScorePrev
}

function clicouPapel() {

    iaChoice = escolhaIa()

    switch (iaChoice) {

        case 1:
            console.log("Ganhou")
            display.innerHTML = "Vitória"
            userScorePrev += 1
        break

        case 2:
            console.log("Empate")
            display.innerHTML = "Empate"
        break

        case 3:
            console.log("Perdeu")
            display.innerHTML = "Derrota"
            iaScorePrev += 1
        break
    }

    iaScore.innerHTML = iaScorePrev
    userScore.innerHTML = userScorePrev
}

function clicouTesoura() {

    iaChoice = escolhaIa()

    switch (iaChoice) {

        case 1:
            console.log("Perdeu")
            display.innerHTML = "Derrota"
            iaScorePrev += 1
        break

        case 2:
            console.log("Ganhou")
            display.innerHTML = "Vitória"
            userScorePrev += 1
        break

        case 3:
            console.log("Empate")
            display.innerHTML = "Empate"
        break
    }

    iaScore.innerHTML = iaScorePrev
    userScore.innerHTML = userScorePrev
}

function escolhaIa(Choice) {
    Choice = Math.ceil((Math.random()) * 3)
    return Choice
}