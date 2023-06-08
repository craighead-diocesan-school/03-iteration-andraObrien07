// ####################################
// ####### ----- Attendees ----- ######
// ####################################

// function attendees() {
//   let count = 0
//   let numOfAttendees = prompt('How many attendees')
//   let attendeeList = ''

//   while (count < numOfAttendees) {
//     let attendee = prompt('enter a name')
//     attendeeList = attendeeList + attendee + ', '
//     // attendeeList = attendeeList + ', '
//     count = count + 1
//   }

//   alert(attendeeList)
// }

function make2() {
  let numOfNumber = prompt('how many numbers')

  let count = 0
  let total = 0


  while (count < numOfNumber) {
    // get another number from the user
    let newNum = prompt('next numb')

    // convert that number from "" to a number
    newNum = Number(newNum)

    // add the new number to the existing total
    total = total + newNum

    // add one to count so that the loop will eventually stop
    count = count + 1

  }
  Beforeaverage = total
  let average = (Beforeaverage / numOfNumber)
  Beforeaverage = Number(Beforeaverage)

  // alert('The total is ' + total)
  alert('The average is ' + average)
}
