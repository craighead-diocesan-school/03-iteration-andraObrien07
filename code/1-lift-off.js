// ####################################
// ####### ----- Lift Off ----- #######
// ####################################

function liftOff() {
  // ask for a number to count down from
  let choice = prompt('Pick your number of choice to count down from.')
  // ask how they want to count down in 
  let up = prompt('chose another number to count down in')

  //loop that starts at 'choice' and count down in 'up'
  while (choice > 0) {
    alert(choice + '...')
    choice = choice - up
  }
  //end function
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