$(document).ready(function(){



    $(window).on('load',function(event) {
           $('body').removeClass('preloading');
           $('.load').delay(1000).fadeOut('fast');
          });
  
  $('a.nav-link').on('click', function(){
          
          // data-scrollTo = section scrolling to name
          var scrollTo = $(this).attr('data-scrollTo');
          
          
          // toggle active class on and off. added 1/24/17
          $( "a.nav-link" ).each(function() {
            if(scrollTo == $(this).attr('data-scrollTo')){
              $(this).addClass('active');
            }else{
              $(this).removeClass('active');
            }
          });


          // animate and scroll to the section 
          $('body, html').animate({
            
            // the magic - scroll to section
            "scrollTop": $('#'+scrollTo).offset().top
          }, 1000 );
          return false;
          
        })



});
