$().ready(() => {

  $('.scrollHome').on('click', function(e) {
  	e.preventDefault()
  	$('html, body').animate({
      scrollTop: $('.logo').offset().top
    }, 700, 'swing')
  })

  $('.scroll').on('click', function(e) {
  	e.preventDefault()
  	$('html, body').animate({
      scrollTop: $('#skills').offset().top
    }, 700, 'swing')
  })

  $('.scrollTab').on('click', function(e) {
  	e.preventDefault()
  	$('html, body').animate({
      scrollTop: $('#skills').offset().top
    }, 700, 'swing')
  })

  $('.scrollTabProjects').on('click', function(e) {
  	e.preventDefault()
  	$('html, body').animate({
      scrollTop: $('.projects').offset().top
    }, 800, 'swing')
  })

  $('.scrollTabResume').on('click', function(e) {
  	e.preventDefault()
  	$('html, body').animate({
      scrollTop: $('.docContainer').offset().top
    }, 1100, 'swing')
  })

  $('.scrollTabContact').on('click', function(e) {
  	e.preventDefault()
  	$('html, body').animate({
      scrollTop: $('.footerLinks').offset().top
    }, 2000, 'swing')
  })

  var options = [
    {
      selector: '#skills', offset: 500, callback: function(el) {
        Materialize.fadeInImage($(el))
      }
    },
    {
      selector: '.docContainer', offset: 200, callback: function(el) {
        Materialize.fadeInImage($(el))
      }
    },
    {
      selector: '#projectLeft1', offset: 0, callback: function(el) {
        $(el).addClass('animated fadeInUp')
      }
    },
    {
      selector: '#projectRight1', offset: 150, callback: function(el) {
        $(el).addClass('animated fadeInUp')
      }
    },
    {
      selector: '#projectLeft2', offset: 50, callback: function(el) {
        $(el).addClass('animated fadeInUp')
      }
    },
    {
      selector: '#projectRight2', offset: 150, callback: function(el) {
        $(el).addClass('animated fadeInUp')
      }
    },
    {
      selector: '#projectLeft3', offset: 0, callback: function(el) {
        $(el).addClass('animated fadeInUp')
      }
    },
    {
      selector: '#projectRight3', offset: 150, callback: function(el) {
        $(el).addClass('animated fadeInUp')
      }
    },
    {
      selector: '#projectLeft4', offset: 50, callback: function(el) {
        $(el).addClass('animated fadeInUp')
      }
    },
    {
      selector: '#projectRight4', offset: 150, callback: function(el) {
        $(el).addClass('animated fadeInUp')
      }
    }
  ]

  $('.parallax').parallax();
  Materialize.scrollFire(options);
})
