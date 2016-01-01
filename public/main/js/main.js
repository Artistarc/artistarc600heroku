$(document)
    .ready(function() {

        //$('.fixed.menu').transition('fade in');


          $('.wato')
            .visibility({
              once: false,
              onBottomPassed: function() {
                $('.fixed.menu').transition('fade in');
                  //alert('now');
                  console.log('now');
              },
              onBottomPassedReverse: function() {
                $('.fixed.menu').transition('fade out');
                  console.log('now back');
              }
            })
          ;
      // create sidebar and attach to menu open
      $('.ui.sidebar')
        .sidebar('attach events', '.toc.item')
      ;
/*
	
		var topOfOthDiv = $('.wato').offset().top;
		$(window).scroll(function() {
				if($(window).scrollTop() > topOfOthDiv) { //scrolled past the other div?
					$('.fixed.menu').transition('fade in'); //reached the desired point -- show div
				}
				if($(window).scrollTop() < topOfOthDiv) { //scrolled past the other div?
					$('.fixed.menu').transition('fade out'); //reached the desired point -- show div
				}
			});
*/
    })
  ;

/*
            $(document).ready(function() {
 	            if ($(document).scrollTop() > 30) {
	               $('.navbar-top').addClass('artist-header_shrink');
	            }
            });
*/
            /*----------------- [ stream ] --------------------*/

            /*$('.navbar-top').click(function(event) {
	            $('#stream').toggleClass('active');
	            });
            */


            $('#stream-call').click(function (event) {
	              //alert('now');
	              $('#stream').toggleClass('active');
	        });

           /*-------------- form submit functions --------------*/
            
           
           /*------------------/ . ---------------------------*/

           