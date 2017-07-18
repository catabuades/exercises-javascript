/* form #f1 */
$('#f1-calculate').on('click', function () {
  var a = $('#f1-a').val()
  var b = $('#f1-b').val()
  var result = a / 100 * b
  $('#f1-result').val(result)
})

/* form #f2 */
$('#f2-calculate').on('click', function () {
  var c = $('#f2-a').val()
  var d = $('#f2-b').val()
  var result = c / d * 100
  $('#f2-result').val(result)
})

/* form #f3 */
$('#f3-calculate').on('click', function () {
  var e = $('#f3-a').val()
  var f = $('#f3-b').val()
  var result = (e - f) / e * 100
  $('#f3-result').val(result)
})
