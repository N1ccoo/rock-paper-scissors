function nameHello (){
let name = prompt('Who are you?','Anonymous')
let message = `USER : ${name}`
document.title = message
hiUser.textContent = message
hiUser.classList.toggle('hidden')
}

function computerPlay(){
random = Math.floor((Math.random() * 3) + 1)
return (random == 1) ? 'scissors' : (random == 2) ? 'rock' : 'paper' ;
}


function playRound(playerSelection, computerSelection){

if (playerSelection == computerSelection) {

    return 'I\'ts a tie!'

} else if (playerSelection + computerSelection == 'paperrock' || playerSelection + computerSelection == 'scissorspaper' || playerSelection + computerSelection == 'rockscissors' ) {

    return 'You won!'

} else {

    return 'You lost!'

}

}

function playGame(e) {
let win = 0
let draw = 0
let lose = 0

        
        let playerSelection = this.textContent.toLowerCase()
        let computerSelection = computerPlay()
       
       console.log(playRound(playerSelection, computerSelection))

       if (playRound(playerSelection, computerSelection) == 'You won!') {
           win++
       } else if (playRound(playerSelection, computerSelection) == 'You lost!') {
           lose++
       } else {
           draw++
       }
 
}


let hiUser = document.getElementById('hiUser')
let startButton = document.getElementById('startButton')
let buttons = document.querySelectorAll('.choices')

startButton.addEventListener('click',nameHello)
startButton.addEventListener('mouseenter',redOnHover)
startButton.addEventListener('mouseleave',removeRed)

buttons.forEach(buttonAnimation)

function buttonAnimation(item) {
    item.addEventListener('mouseenter',redOnHover)
    item.addEventListener('mouseleave',removeRed)
    item.addEventListener('click',playGame)
}

function redOnHover(e) {
    this.style.color = 'var(--red)'
    this.classList.add('transformButton')
}

function removeRed(e) {
    this.style.color = 'var(--green)'
    this.classList.remove('transformButton')
}

function choice(e) {
   
}