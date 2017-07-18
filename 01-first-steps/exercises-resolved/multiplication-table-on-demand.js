// Write a function that writes in the console the multiplication table (in one column) of any number passed as parameter

// WAY 1
function multiplicationOnDemand (num) {
  var result = ''
  for (var i = 1; i <= 10; i++) {
    result += num * i + '\n'
  }
  console.log(result)
}

multiplicationOnDemand(7)

// WAY 2
function multiplicationOnDemand2 (num) {
  for (var i = 1; i <= 10; i++) {
    console.log(num * i)
  }
}
multiplicationOnDemand2(8)
