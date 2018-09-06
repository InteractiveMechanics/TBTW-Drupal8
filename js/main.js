$(function(){
    $('.close-icon').click(function(){
        $('.calendar-widget').removeClass('display-block');  
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

        var modal = document.getElementById('Preview-Modal');

        // Get the <span> element that closes the modal
        //var span = document.getElementsByClassName("close")[0];
        modal.style.display = "block";

        // When the user clicks on <span> (x), close the modal
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
        
        // Get the modal
        var modal = document.getElementById('Attraction-Modal');
        
        // Get the <span> element that closes the modal
        //var span = document.getElementsByClassName("close")[0];
        modal.style.display = "block";

        // When the user clicks on <span> (x), close the modal
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
    
    
    /*
    // Commented out on Aug 23, 2018

        var randomEffect = Math.floor(Math.random() * 2);
        $('a').on('click tap', function(e){
            if ($(this).attr('href') !== 'javascript: void(0);' && $(this).attr('href').length !== 0){
                if (randomEffect === 1) {
                    var randImage = Math.floor(Math.random() * 7 + 1);
                    $('body').append('<div id="haunted-image"><img src="/themes/tbtw/assets/scary-images/TBTW-scare-img0' + randImage + '.jpg" /></div>')
                    setTimeout(function(){
                        $('#haunted-image').remove();
                    }, 500);
                }
            }
        });
    */

    var headline = $('h1').not('.js-quickedit-page-title').first();
    var headlineEffect = Math.floor(Math.random() * 3 + 1);

    headline.addClass('headline-animation-' + headlineEffect);


    function createCookie(name,value,days) {
	    var expires = "";
	    if (days) {
	        var date = new Date();
	        date.setTime(date.getTime() + (days*24*60*60*1000));
	        expires = "; expires=" + date.toUTCString();
	    }
	    document.cookie = name + "=" + value + expires + "; path=/";
	}
	
	function readCookie(name) {
	    var nameEQ = name + "=";
	    var ca = document.cookie.split(';');
	    for(var i=0;i < ca.length;i++) {
	        var c = ca[i];
	        while (c.charAt(0)==' ') c = c.substring(1,c.length);
	        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	    }
	    return null;
	}

    var cookieName = readCookie('site-swticher');
    if(cookieName) {
	    
	    if(cookieName == 'hide') {
		    $('.site-switcher-section').hide();
		    $('.show-site-switcher').show();
	    } else {
		   $('.site-switcher-section').show();
		    $('.show-site-switcher').hide(); 
	    }
	    
    } else {
	    $('.site-switcher-section').show();
    }    

    window.mobileAndTabletcheck = function() {
	  var check = false;
	  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
	  return check;
	};
		
		
	function addEmail(email) {
		if(email) {
       		var url = "https://www.easternstate.org/newsletter/data/1/examples/add-email.php?email=" + email;
       		
		    $('.error-newsletter').show();
       		$('.error-newsletter').html("<img src='{{front_page}}themes/historic/assets/loading.gif' />");
       		$.ajax({
	            type: 'GET',
	            url: url,
	            success: function (msg) {
	
	                if(msg == "true") {
		                $('.error-newsletter').text("You are subscribed. Thanks!");
	                } else {
		                $('.error-newsletter').text("You're already subscribed. Thanks!");
	                }
	
	            },
	            error: function (request, status, error) {
					$('.error-newsletter').text("An error has occured, please try again later.");
	            }
	        });
	   	}
	}
		
					
	$('.visit-dropdown li:eq(1)').addClass('indent-li');
	$('.visit-dropdown li:eq(2)').addClass('indent-li');
	
	$('.email-text').keypress(function (e) {
		if (e.which == 13) {
			var email = $('.email-text').val();
			addEmail(email);
		}
	});
    
    $('.btn-subscribe').click(function(){
       var email = $('.email-text').val();
       addEmail(email);
    });
    
    $('.dropdown-toggle').click(function(event){
	     event.stopPropagation();
	 });
			 
    setInterval(function(){
		$(".bubble").animate({ top: "-=1%" }, function(){
			$(this).animate({ top: "+=1%" });
		});
	}, 3000);
			
	var active_link_arr = $('.navbar-right li.active').parent().parent().find('a');
	
	if(active_link_arr) {
		if(active_link_arr.length > 0) {
			var item = active_link_arr[0];
			item.className += " unerline_active";
			$('.breadcrumb li:eq(0) a').text(item.innerText);
		}
	}
	
	var scroll_start = 0;
	var startchange = $('main');
	var offset = startchange.offset();
	if (startchange.length){
		$(document).scroll(function() { 
			scroll_start = $(this).scrollTop();
			if(scroll_start > offset.top) {
				$("header.navbar").addClass('navbar-fixed-top');
				
				if(!mobileAndTabletcheck()) {
					$("header.navbar").addClass('navbar-fixed-top-desktop');	
				}
				
				$("header.navbar").css('background-color', 'black');
				} else {
   				$("header.navbar").removeClass('navbar-fixed-top');
   				if(!mobileAndTabletcheck()) {
					$("header.navbar").removeClass('navbar-fixed-top-desktop');	
				}
				}
			});
	}
	
	
	$('.mobile-buy-now').click(function(){
		var path = $(this).data('path');
		var url = window.location.origin + path;
		
		window.location.replace(url);
	});
    		
        
    function capitalizeFirstLetter(string) {
	    var str =  string.charAt(0).toUpperCase() + string.slice(1);
	    
	    return str.replace("-", " ");
	}
	
	var $window = $(window);
    var $callout = $('#callout');
	
    $window.on('scroll', function() {
        var startZone = $('main').offset().top - 300;
        var endZone = $('footer').offset().top - $window.height();
        
        if($window.scrollTop() > 225 && $window.scrollTop() < 600) {
	        $callout.animate({'opacity': '1.0'}, 175);
        } else if($window.scrollTop() > 600 && !($window.scrollTop() > 225 && $window.scrollTop() < 600)) {
	         $callout.stop(true).animate({'opacity': '0'}, 175);
        } else if($window.scrollTop() < 225) {
	         $callout.stop(true).animate({'opacity': '0'}, 175);
        }
    });
});



