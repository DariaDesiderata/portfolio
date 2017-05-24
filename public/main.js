$().ready(() => {
  $('#scroll').on('click', function(e) {
  	e.preventDefault()
  	$('html, body').animate({
      scrollTop: $('#skills').offset().top
    }, 500)
  })
  var options = [
    {selector: '#skills', offset: 500, callback: function(el) {
        Materialize.fadeInImage($(el));
      }
    }  
  ]
  $('.parallax').parallax();
  Materialize.scrollFire(options);
})
