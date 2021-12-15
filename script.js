function name(){
let name = prompt('Who are you?','Anonymous')
let message = `Hi there ${name}!`
console.log(message)
return name
}

function computerPlay(){
random = Math.floor((Math.random() * 3) + 1)
return (random == 1) ? 'scissors' : (random == 2) ? 'rock' : 'paper' ;
}


function select(){
let ans = prompt('rock, paper or scissors?','').toLowerCase()
if (ans == 'rock' || ans == 'scissors' || ans == 'paper') {
    
    console.log(ans)
    return ans

} else {

    console.log(`${ans} is an invalid selection!`)
    return 'Invalid'

  }

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

function playGame() {
let win = 0
let draw = 0
let lose = 0

let x = prompt('How many rounds?','5')

    for (i = 0; i < x; i++) { 

        let playerSelection = select()
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

console.log(`win : ${win}, lose : ${lose}, draw : ${draw}`)

if (win > lose) {

return 'So Lucky!'

} else {
    
    return 'Nice try!'

}

}