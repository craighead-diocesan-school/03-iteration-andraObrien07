// ####################################
// ####### ----- Factorial ----- ######
// ####################################

function factorial() {
  // write your code here
  // let uptoNumber = prompt('What number do you want the factorial for?')
  // uptoNumber = Number(uptoNumber)
  // let count = 0
  // count = uptoNumber

  // while (count < uptoNumber) {

  //   uptoNumber + uptoNumber
  // }
  // let multiply = uptoNumber * count
  // alert(multiply + count + ' is you factorial for the number given')



  // 5! = 5 x 4 x 3 x 2 x 1 = 120
  let factorial = prompt('number that you want to facortial is?')

  let count = factorial
  let total = 1
  while (count > 1) {
    total = total * count
    count = count - 1
  }
  alert('The factorial for the number given is ' + total)
}
