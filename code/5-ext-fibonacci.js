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
  // let number = prompt('What number do u want the fibonacci sequence for?')
  // let red = next
  // let orange = previous
  // let green = old
  // count = 1
  // // let count = 0
  // while (red <= number) {
  //   green = orange
  //   orange = red
  //   red = green + orange

  // }
  // alert('sequence is 0, 1, ' + red)


  let number = prompt('What number do u want the fibonacci sequence for?')
  // let red = count + 1
  // let violet = red + 1
  // let green = red + violet



  // let red = count
  // let violet = red + red
  // let green = violet + red

  count = 1

  let red = 1
  let violet = 2
  let green = 3


  while (green <= number) {
    //   violet = red + red
    //   green = violet + red
    //   blue = green + violet

    // let green = count + red
    // let sum = green + violet

    red = count + 1
    violet = red + count
    violet = red + 1
    green = red + violet


  }

  alert('The fibonacci sequence up to you number is ' + green)
}
