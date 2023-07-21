// ####################################
// ##### ----- Square Series ----- ####
// ####################################

function squareSeries() {
  //ask for the number that they want a series for
  let Thenumber = prompt('what number do you want the series for?')
  let count = 1
  let series = ''
  //make Thenumber a proper number
  Thenumber = Number(Thenumber)

  while (count <= Thenumber) {

    series = series + count * count + ', '

    count = count + 1
  }
  alert('The series for ' + Thenumber + ' is ' + series + '! ')
}
