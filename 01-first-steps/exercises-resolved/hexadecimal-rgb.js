// HEXADECIMAL RGB
// Writes a function that convert a hexadecimal color, "blue" for example "#0000FF" in its RGB representation rgb(0,0,255)". Give the function the name getRGB() and test it with this code.

// WAY 1
function getRGB (colorHex) {
//#0000FF
  var redHex = colorHex[1] + colorHex[2]
  var greenHex = colorHex[3] + colorHex[4]
  var blueHex = colorHex[5] + colorHex[6]

  var redDec = parseInt(redHex, 16)
  var greenDec = parseInt(greenHex, 16)
  var blueDec = parseInt(blueHex, 16)

  return 'rgb(' + '' + redDec + ', ' + greenDec + ', ' + blueDec + ')'
}

getRGB('#0000FF')

00 -> r -> parseInt('00', 16)
00 -> g -> parseInt('00', 16)
FF -> b -> parseInt('FF', 16)

// WAY 2
function getRGB (hex){
  var red = parseInt(hex.slice(1,3), 16)
  var green = parseInt(hex.slice(3,5), 16)
  var blue = parseInt(hex.slice(5,7), 16)

  return "RGB => " + red + " " + green + " " + blue
}

getRGB ('#01FF00')

// Improves the previous function so besides the conversion also identifies some basic colors:
// Black: #000000
// White: #FFFFFF
// Red: #FF0000
// Green: #00FF00
// Blue: #0000FF

function getRGB(hex){
  var color = "";

  switch (hex) {
    case '#000000';
      return Black;
      break;
    case '#FFFFFF';
      return White;
      break;
    case '#FF0000';
      return Red;
      break;
    case '#00FF00';
      return Green;
      break;
    case '#0000FF';
      return Blue;
      break;
    default;
      return false;
      break;
  } 

  var color = 
  var red = parseInt(hex.slice(1,3), 16)
  var green = parseInt(hex.slice(3,5), 16)
  var blue = parseInt(hex.slice(5,7), 16)

  return "RGB => " + red + " " + green + " " + blue + color
}

getRGB ('#00FF00')
