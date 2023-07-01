// ####################################
// ####### ----- Fibonacci ----- ######
// ####################################

function fibonacci() {
  // write your code here


  let number = prompt('What number do u want the fibonacci sequence for?')
  number = Number(number)

  let count = 0
  count = Number(count)

  let red = 0
  let violet = 1
  let green = ''

  let sequence = 'the fibonacci sequence: '
  while (count < red) {
    green = red + violet
    red = violet
    violet = green
    sequence = sequence + '' + green
    count = green
  }

  alert(sequence)
}
