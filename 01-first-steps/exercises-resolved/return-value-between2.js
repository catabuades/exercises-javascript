// Write a function in Javascript that having two integers x1 and x2 returns all the integers between them. If x2 es lower than x1 it should return -1

function ex1 (x1, x2) {
  if (x2 < x1) {
    return -1
  } else {
    for (var i = 0; i <= x2 - x1 - 1; i++) {
      console.log(++x1)
    }
  }
}

ex1(1, 4)
