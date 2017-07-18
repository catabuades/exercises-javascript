// Write a program that writes in the console all the multiples of 23 less than 500 and at the end writes the sum of all of them

// UNFINSISHED
function multiply23 () {
  var num = 23
  var result = ''
  for (var i = 0; i <= 500 / num; i++) {
    result += num * i + '\t'
  }
  console.log('Elements: ' + result)
  console.log('Sum: ')
}

multiply23()

// CORRECT WAY
function multiplyTwentyThree () {
  var sum = 0
  var result = ''
  for (var i = 23; i <= 500; i += 23) {
    result += i + '\t'
    sum += i
  }
  console.log('Elements: ' + result)
  console.log('Sum: ' + sum)
}

multiplyTwentyThree()
