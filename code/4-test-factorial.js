// ####################################
// ####### ----- Factorial ----- ######
// ####################################

function factorial() {
  //asks for a number to factorial
  let factorial = prompt('number that you want to facortial is?')

  let count = factorial
  let total = 1

  while (count > 1) {
    total = total * count
    count = count - 1
  }
  alert('The factorial for the number given is ' + total)
}
