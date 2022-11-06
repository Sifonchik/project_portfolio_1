$('.about_items > div').on('click', function(){
   $(this).children('.about_icon').toggleClass('about_icon-rotate');
   $(this).parent('.about_items').toggleClass('about_items-color');
   $(this).children('.about_pretitle').toggleClass('about_items-color');
   $(this).children('.about_location').toggleClass('about_items-color');
   $(this).next('.about_text').slideToggle(300);
});

$('.features_items > div').on('click', function(){
   $(this).parent('.features_items').toggleClass('features_items-color');
   $(this).children('.features_pretitle').toggleClass('features_pretitle-color');
   $(this).next('.features_text').slideToggle(300);
});

