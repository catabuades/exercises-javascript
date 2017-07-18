// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

// WAY 1
function isVowel1 (char) {
  switch (char) {
    case 'a':
      return true
      break
    case 'e':
      return true
      break
    case 'i':
      return true
      break
    case 'o':
      return true
      break
    case 'u':
      return true
      break
    default:
      return false
      break
  }
}

isVowel1('a')

// WAY 2
function isVowel2 (char) {
  var vowels = ['a', 'e', 'i', 'o', 'u']
  var comparison = vowels.indexOf(char)
  if (comparison == -1) {
    return false
  } else {
    return true
  }
}

isVowel2('c')

// WAY 3 --> El equilibrio empieza por aquí
function isVowel3 (char) {
  return ['a', 'e', 'i', 'o', 'u'].indexOf(char) !== -1
}

isVowel3('e')

// WAY 4
function isVowel4 (char) {
  return ['a', 'e', 'i', 'o', 'u'].includes(char)
}

isVowel4('a')

// WAY 5 Expresiones regulares
function isVowel5 (char) {
  return /[aeiou]/.test(char)
}

isVowel5('i')
