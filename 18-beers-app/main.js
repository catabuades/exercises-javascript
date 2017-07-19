$('#form-search button').on('click', function (e) {
  e.preventDefault()
  var beerWantToSearch = $('input#beerChoise').val()
  var urlAll = 'https://quiet-inlet-67115.herokuapp.com/api/search/all?q='
  var imageBeer = ''
/*  var predefinedImage = 'http://snowbrains.com/wp-content/uploads/2013/09/dc6a6677-0ea6-4b1f-976b-702c7a3e7a89.jpeg'
*/
  $.ajax({
    url: urlAll + beerWantToSearch
  })
        .then(function (aBeer) {
          console.log(aBeer)
          var aOptionBeer = aBeer.map(function (oBeer) {
            return '<option value="' + oBeer.id + '">' + oBeer.name + '</option>'
          })
          var htmlSelect = aOptionBeer.join('')
          var htmlChoise = $('#list-beers').html(htmlSelect)
          if (htmlChoise) {
            $('#allInfo').addClass('hiddenBlock')
          } else {
            $('#allInfo').removeClass('hiddenBlock')
          }
        })
})

$('#list-beers').on('change', function () {
  var beerSelected = $(this).val()
  console.log(beerSelected)

  var urlId = 'https://quiet-inlet-67115.herokuapp.com/api/beer/'
  $.ajax({
    url: urlId + beerSelected
  })
        .then(function (idBeer) {
          var nameBeer = idBeer.name
          $('h3').text(nameBeer)
          var descriptionBeer = idBeer.style.description
          $('p').text(descriptionBeer)
          imageBeer = idBeer.labels.medium
          if (idBeer.labels) {
            $('#imageBeer').attr('src', imageBeer)
          } else {
            $('#imageBeer').attr('src', url('img/beer-glass.jpg'))
          }
        })
})
