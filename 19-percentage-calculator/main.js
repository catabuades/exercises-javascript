/* form #f1 */
$('#f1-calculate').on('click', function (event) {
  event.preventDefault()
  var a = $('#f1-a').val()
  var b = $('#f1-b').val()
  var result = a / 100 * b
  if (isNaN(result)) {
    $('#f2').addClass('has-error')
  } else {
    $('#f2').removeClass('has-error')
  }
/*  if (isNaN($('#f1-result').val()) === true) {
    $('#f1').addClass('has-error')
  } else {
    $('#f1').removeClass('has-error')
  } */
  $('#f1-result').val(result)
})

/* form #f2 */
$('#f2-calculate').on('click', function () {
  event.preventDefault()
  var c = $('#f2-a').val()
  var d = $('#f2-b').val()
  var result = c / d * 100
  if (isNaN(result)) {
    $('#f2').addClass('has-error')
  } else {
    $('#f2').removeClass('has-error')
  }
  $('#f2-result').val(result)
})

/* form #f3 */
$('#f3-calculate').on('click', function () {
  event.preventDefault()
  var e = $('#f3-a').val()
  var f = $('#f3-b').val()
  var result = (e - f) / e * 100
  if (isNaN(result)) {
    $('#f3').addClass('has-error')
  } else {
    $('#f3').removeClass('has-error')
  }
  $('#f3-result').val(result)
})
