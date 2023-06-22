// ####################################
// ####### ----- Fibonacci ----- ######
// ####################################

function fibonacci() {
  // write your code here

  //8! = (0+1) = 1, 1+2 = 3, 2+3 =5, 3+5= 8

  // let fibs = prompt('what number do you the fibonacci sequence to?')
  // fibs = Number(fibs)
  // let count = 1
  // let seq = ''
  // let total = 0

  // while (count < fibs) {

  //   seq = (total + count)
  //   seq = seq + (total + count)

  // }

  // alert('The fibonacci sequence for ' + fibs + 'is ...' + seq)
  let number = prompt('What number do u want the fibonacci sequence for?')
  let red = next
  let orange = previous
  let green = old
  count = 1
  while (red <= number) {
    green = orange
    orange = red
    red = green + orange

  }
  alert('sequence is 0, 1, ' + red)
}
