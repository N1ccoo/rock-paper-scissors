function nameHello (){
userName = prompt('Who are you?','Anonymous')
let message = `I've been expecting you ${userName}`
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

} else if (playerSelection + computerSelection == 'rockpaper' || playerSelection + computerSelection == 'paperscissors' || playerSelection + computerSelection == 'scissorsrock' ) {

    return 'You lost!'

} else {

    return 'reset'

}

}

let userName = 'Hero'
let win = 0
let draw = 0
let lose = 0
let userWep = ''  
let enemyWep = ''                    



function playGame(e) {
        
        let playerSelection = this.getAttribute('id').toLowerCase()
        let computerSelection = computerPlay()

        if (computerSelection == 'rock') {
            enemyWep = '-═══ι▬'
        } else if (computerSelection == 'paper') {
            enemyWep = '((O≡=─'
        } else if (computerSelection == 'scissors') {
            enemyWep = '⛨'
        }
       
        userWeapon.innerText = `${userWep}`
        enemyWeapon.innerText = `${enemyWep}`
        console.log(playRound(playerSelection, computerSelection))
        

       if (playRound(playerSelection, computerSelection) == 'You won!') {
           win++
           winScore.innerText = `Win : ${win}`
       } else if (playRound(playerSelection, computerSelection) == 'You lost!') {
           lose++
           loseScore.innerText = `Lose : ${lose}`
       } else if (playRound(playerSelection, computerSelection) == 'I\'ts a tie!') {
           draw++
           drawScore.innerText = `Draw : ${draw}`
       } else  {
           win = 0 
           lose = 0
           draw = 0
           winScore.innerText = `Win : ${win}`
           loseScore.innerText = `Lose : ${lose}`
           drawScore.innerText = `Draw : ${draw}`
           enemyWeapon.innerText = `${userName} you are so bad! >`
           userWeapon.innerText = '<Go AGANE!'
       }
       
       
}
let enemyWeapon = document.getElementById('enemyWep')
let userWeapon = document.getElementById('userWep')
let computerChoice = document.getElementById('computerSelection')
let winScore = document.getElementById('win')
let drawScore = document.getElementById('draw')
let loseScore = document.getElementById('lose')
let hiUser = document.getElementById('hiUser')
let startButton = document.getElementById('startButton')
let buttons = document.querySelectorAll('.choices')
let resetButton = document.getElementById('resetScore')



resetButton.addEventListener('click',playGame)
resetButton.addEventListener('mouseenter',redOnHover)
resetButton.addEventListener('mouseleave',removeRed)

startButton.addEventListener('click',nameHello)
startButton.addEventListener('mouseenter',redOnHover)
startButton.addEventListener('mouseleave',removeRed)

buttons[0].addEventListener('click',sword)
buttons[1].addEventListener('click',bow)
buttons[2].addEventListener('click',shield)

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



function sword() {
    userWep = '-(===>'
}

function bow() {
    userWep = 'D --→'
}

function shield() {
    userWep = '🛡'
}