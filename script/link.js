$('#about_link').on('click', function(e){
   e.preventDefault;
   $('html, body').animate({scrollTop: $('#about').offset().top}, 2000)
});