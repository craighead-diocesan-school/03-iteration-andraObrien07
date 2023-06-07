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

}