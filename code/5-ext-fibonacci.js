// ####################################
// ####### ----- Fibonacci ----- ######
// ####################################

function fibonacci() {
  //ask for a number that the user wants the fibonacci sequence for
  let number = prompt('What number do u want the fibonacci sequence for?')
  number = Number(number)

  let count = 0
  count = Number(count)
  //assign 0 and 1 to values(shoeboxes)
  let red = 0
  let violet = 1
  let green = ''

  let sequence = 'the fibonacci sequence is ... '

  //loop that if number that they want to fibonacci is more than 0 this will happen
  //0 + 1 will = green (3)
  //1 WILL = 1
  // 1 beocmes 3 
  //
  while (count < number) {
    green = red + violet
    red = violet
    violet = green
    sequence = sequence + '' + green
    count = green
  }

  alert(sequence)
}
