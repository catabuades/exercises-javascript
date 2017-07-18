// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.

// BETWEEN 2 NUMBERS

// WAY 1
function max1 (num1, num2) {
  if (num1 === num2) {
    return num1
  } else if (num1 > num2) {
    return num1
  } else {
    return num2
  }
}

max1(4, 2)

// WAY 2 | Using Math.max()
function max2 (num1, num2) {
  return Math.max(num1, num2)
}

max2(4, 3)

// WAY 3
function max3 (num1, num2) {
  return (num1 >= num2) ? num1 : num2
}

max3(5, 2)

// BETWEEN THREE NUMBERS
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.

// WAY 1
function maxOfThree (num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1
  } else if (num2 > num3) {
    return num2
  } else {
    return num3
  }
}

maxOfThree(4, 6, 9)

// WAY 2
function max (num1, num2, num3) {
  return Math.max(num1, num2, num3)
}

max(4, 6, 2)
