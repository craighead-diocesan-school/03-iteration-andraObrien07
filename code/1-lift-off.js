// ####################################
// ####### ----- Lift Off ----- #######
// ####################################

function liftOff() {
  // let count = 10
  let choice = prompt('Pick your number of choice to count down from.')
  let up = prompt('chose another number to count down in')
  while (choice > 0) {
    alert(choice + '...')
    choice = choice - up
  }

  alert('Lift Off!')
}

function make1() {
  // copy and paste your code here when you get to the Make step
  let number = prompt('What is the number u wanna go up to')
  let up = prompt('count up in?')
  let count = 0
  number = Number(number)
  up = Number(up)

  while (count < number) {
    count = count + up
    alert(count + '...')

  }
}