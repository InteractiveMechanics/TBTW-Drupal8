$(function(){
	/*setTimeout(function(){
        $(".calendar-widget").css('right', function(){ return $(this).offset().right; })
                     .animate({"right":"0px"}, "slow");   
    }, 5000);*/

    $('.close-icon').click(function(){
        $(".calendar-widget").addClass('display-none');   
    });

     var slideLeftBtn = document.querySelector('#c-button--slide-right');

    slideLeftBtn.addEventListener('click', function(e) {
        var slideLeft = new Menu({
      wrapper: '#o-wrapper',
      type: 'slide-right',
      menuOpenerClass: '.c-button',
      maskId: '#c-mask'
    });
      e.preventDefault;
      slideLeft.open();
    });

    $('.slide-up-menu').click(function(){
        $('.site-switcher-section').slideToggle();
        $('.show-site-switcher').show();
        createCookie('site-swticher', 'hide');
    });

    $('.show-site-switcher').click(function(){
        $('.show-site-switcher').hide();
        $('.site-switcher-section').slideToggle();
        createCookie('site-swticher', 'show');
    });

    

    $('.watch-preview').click(function(){
        var video = $(this).data('video');
        var description = $(this).data('description');
        var image = $(this).data('image');
        var title = $(this).data('title');

        //set html

        //launch modal

        // Get the modal
        var modal = document.getElementById('Preview-Modal');

        
        // Get the <span> element that closes the modal
        //var span = document.getElementsByClassName("close")[0];
        modal.style.display = "block";

        // When the user clicks on <span> (x), close the modal
        /*span.onclick = function() {
            modal.style.display = "none";
        }*/
        $('.close').click(function() {
	        modal.style.display = "none";
        })
		


        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
                $("iframe").attr("src", $("iframe").attr("src"));
            }
        }
        
        window.ontouchstart= function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
                $("iframe").attr("src", $("iframe").attr("src"));
            }
        }
    });

    $('.bubble').click(function(){
        var video = $(this).data('video');
        var description = $(this).data('desc');
        var image = $(this).data('image');
        var title = $(this).data('title');

        //set html
        $('.attraction-video').html(video);
        $('.attraction-description').html(description);
        $('.attraction-image').html("<img src='" + image + "' style='width: 90%;' />");
        
        //launch modal

        // Get the modal
        var modal = document.getElementById('Attraction-Modal');
        

        
        // Get the <span> element that closes the modal
        //var span = document.getElementsByClassName("close")[0];
        modal.style.display = "block";

        // When the user clicks on <span> (x), close the modal
        /*span.onclick = function() {
            modal.style.display = "none";
        }*/
        $('.close').click(function() {
	        modal.style.display = "none";
        })

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    });
    
    
    
    

    $('.panel-title a').click(function(){
        var hasClass = $( this ).children("span").hasClass( "glyphicon-triangle-right" );
        $(".glyphicon-triangle-bottom").addClass("glyphicon-triangle-right").removeClass("glyphicon-triangle-bottom");

        if(hasClass) {
            $( this ).children("span").addClass("glyphicon-triangle-bottom");
            $( this ).children("span").removeClass("glyphicon-triangle-right");
        } else {
            $( this ).children("span").addClass("glyphicon-triangle-right");
            $( this ).children("span").removeClass("glyphicon-triangle-bottom");
        }
    });
    
    
    var randomEffect = Math.floor(Math.random() * 2);
    $('a').on('click tap', function(e){
        if ($(this).attr('href') !== 'javascript: void(0);' && $(this).attr('href').length !== 0){
            if (randomEffect === 1) {
                var randImage = Math.floor(Math.random() * 7 + 1);
                $('body').append('<div id="haunted-image"><img src="/easternstate/themes/tbtw/assets/scary-images/TBTW-scare-img0' + randImage + '.jpg" /></div>')
                setTimeout(function(){
                    $('#haunted-image').remove();
                }, 500);
            }
        }
    });

    var headline = $('h1').not('.js-quickedit-page-title').first();
    var headlineEffect = Math.floor(Math.random() * 3 + 1);

    headline.addClass('headline-animation-' + headlineEffect);

    //Activate any tooltips on the page
    //$('[data-toggle="tooltip"]').tooltip();
});



