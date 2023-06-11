// ####################################
// ##### ----- Square Series ----- ####
// ####################################

function squareSeries() {
  //ask for the number that they want a series for

  //tell them the series 
  // let question = prompt('What number do you want the series for? ')

  // upto = question
  // let Thenumber = 10
  // Thenumber = Number(Thenumber)
  // question = Number(question)
  // upto = Number(upto)
  // while (upto < Thenumber) {

  // Thenumber = Thenumber * Thenumber
  // question = question * question
  //   Thenumber = upto * upto
  // }
  // alert('The number is ' + Thenumber)

  // 5* = 5x5 , 4x4, 3x3, 2x2, 1x1
  let Thenumber = prompt('what number do you want the series for?')
  let count = 1
  let series = ''
  Thenumber = Number(Thenumber)
  // Total = Thenumber * Thenumber
  while (count <= Thenumber) {
    // square = count * count
    // squareSeries = Thenumber * Thenumber
    // Thenumber = Thenumber - 1
    series = series + count * count + ', '

    count = count + 1
  }
  alert('The series for ' + Thenumber + ' is ' + series + '! ')
}
