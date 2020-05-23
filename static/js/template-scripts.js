/*------------------------------------------------------------------
 * coodiv team
 -------------------------------------------------------------------*/
	// display on hover box //
	$(".display-on-hover-box-container a.display-on-hover-box-items").on("mouseenter",function() {
		$(".tab-content-hover").hide();
		$(".display-on-hover-box-container a.display-on-hover-box-items").removeClass('ctive-clod-sr');					
		$(this).addClass("ctive-clod-sr");					
		var selected_tab = $(this).attr("href");
		$(selected_tab).stop().fadeIn();
		return false;
	});
	$(".display-on-hover-box-items").on({
    mouseenter: function () {
    $(this).addClass("active");
    $('.display-on-hover-box-items').addClass("itsnot");
    },

    mouseleave: function () {
    $('.display-on-hover-box-items').removeClass("itsnot");
    $(this).removeClass("active");
    }
    });


	
	// header resize//
	(function () {
	var coodivheadertest = document.getElementById("coodiv-header");
    if(coodivheadertest){
	function resize()
    {
    var heights = window.innerHeight;
    document.getElementById("coodiv-header").style.height = heights + "px";
    }
    resize();
    window.onresize = function() {
    resize();
    }; 
	}
	}());
	
	// page loeader //	
	(function () {
    $('.preloader').delay(200).fadeOut('slow');
    }());
	
	// tooltips //	
	$(function () {
	$('[data-toggle="tooltip"]').tooltip()
	});
	
	// header slider carousel //
	$(function () {
	$('.carousel-main').flickity({
    prevNextButtons: false,
	pageDots: false,
	});
	// 2nd carousel, navigation
	$('.carousel-nav').flickity({
    asNavFor: '.carousel-main',
    contain: true,
    pageDots: false,
    prevNextButtons: false
  	});
	});
	
	// header slider domains carousel //
	 $(document).ready(function() {
              $('.owl-domain-prices-previw').owlCarousel({
                loop: true,
                margin: 10,
				autoplay:true,
   		    	autoplayTimeout: 3000,
 			    autoplayHoverPause:true,
                responsiveClass: true,
				dots: false,
                responsive: {
                  0: {
                    items: 1,
                  },
				  340: {
                    items: 1,
					margin: 20
                  },
				  350: {
                    items: 2,
					margin: 20
                  },
				  490: {
                    items: 3,
					margin: 20
                  },
                  780: {
                    items: 2,
					margin: 20
                  },
                  1000: {
                    items: 3,
                    loop: true,
                    margin: 20
                  },
				  1200: {
                    items: 4,
                    loop: true,
                    margin: 20
                  }
                }
              })
      });
	  
	  
	  // hosting plans with chekout price yearly and monthly //
	$('#monthly-yearly-chenge a').on('click', function() {
    $(this).addClass('active').siblings().removeClass('active');
	
	if (jQuery('.monthly-price').hasClass('active')) {
	$('.second-pricing-table-price').addClass('monthly');
	$('.second-pricing-table-price').removeClass('yearly');
	}
	
	if (jQuery('.yearli-price').hasClass('active')) {
	$('.second-pricing-table-price').addClass('yearly');
	$('.second-pricing-table-price').removeClass('monthly');
	}
    });
	
	// pertners carousel //
	$(document).ready(function() {
	$('.pertners-carousel').owlCarousel({
    loop: false,
    nav: false,
	dots: false,
	autoplay: false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
    });
	});
	
	 $(document).ready(function() {
    $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
	items: 3,
	nav: false,
    })
    });
	
	// support carousel //
	$(document).ready(function() {
	$('.support-carousel').owlCarousel({
    loop: false,
    nav: false,
	dots: false,
	autoplay: false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
    });
	});
	
		
	// fixed header layout //	
	$(function(){
	$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
    $(".fixed-header-layout").addClass("top-header-fixed");
    } else {
    $(".fixed-header-layout").removeClass("top-header-fixed");
    };
    });
	});


	//-- responsive menu swipe -- //
	if (document.documentElement.clientWidth < 768) {
	$(function() {      
	$("body").swipe( {
    swipe:function(event, direction) {
	if (direction =="right" && !$('#offcanvas-menu-home').hasClass("in")) {
   	$('#offcanvas-menu-home').addClass('in');
    $('.offcanvas-toggle.menu-btn-span-bar').addClass('is-open');
	$('body').addClass('offcanvas-stop-scrolling');
	}
	
	
	if (direction =="left") {
    $('#offcanvas-menu-home').removeClass('in');
	$('body').removeClass('offcanvas-stop-scrolling');
    $('.offcanvas-toggle.menu-btn-span-bar').removeClass('is-open');
    }
    },
    threshold: 100,
	excludedElements: "label,pre , button, input, select, textarea, table,.owl-carousel,.carousel-main,.flickity-enabled",
    });
  	});
	};
	
	//-- go to top button -- //
	$(document).ready(function() {
	$('body').append('<div id="toTop" class="btn"><span class="fa fa-chevron-up"></span></div>');
    $(window).scroll(function() {
    if ($(this).scrollTop() != 0) {
    $('#toTop').fadeIn();
    } else {
    $('#toTop').fadeOut();
    }
    });
    $('#toTop').click(function() {
    $("html, body").animate({
    scrollTop: 0
    }, 600);
    return false;
    });
	});
	
	// video model //	
	$(document).ready(function() {
	var ifcontactformexist = document.getElementById("videomodal");
    if(ifcontactformexist){
	var $videoSrc;  
	$('.video-btn').on('click', function() {
    $videoSrc = $(this).data( "src" );
	});
	console.log($videoSrc);
	$('#videomodal').on('shown.bs.modal', function (e) {
    $("#video").attr('src',$videoSrc + "?rel=0&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1" ); 
	})
  	$('#videomodal').on('hide.bs.modal', function (e) {
    $("#video").attr('src',$videoSrc); 
	}) 
	}
	});
	
	// slider plans //	
	$(document).ready(function() {
	var slider = $("#calculatorSlider");
	var privateBtn = $("#privateBtn");
	var reseller = $("#resellerEarnings");
	var client = $("#clientPrice");
	var license = {
	priv: {
	active: false,
	price: 675,
	}
	}

	function calculate(price, value) {
	client.text( (Math.round(value / 100 * price)));
	reseller.text((Math.round(value * 10)))
	}

	privateBtn.on('click', function(e) {
	license.priv.active = true;
	reset(license.priv.price);
	});

	
	slider.on("input change", function(e) {
	calculate(license.priv.price, $(this).val());
	})
	});
	
	//-- Filter List -- //
	function FilterListSection() {
    var input, filter, ul, li, a, i;
    input = document.getElementById('nuhost-filter-input');
    filter = input.value.toUpperCase();
    ul = document.getElementById("nuhost-filter-list");
    li = ul.getElementsByTagName('li');
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
    };   
	jQuery('#nuhost-filter-list li a').on('click', function() {
	$(this).addClass("filter-item-open");
	$('.nuhost-filter-list-container').addClass("nuhost-filter-min-height");
	$('#' + this.id + '-content').delay(200).fadeIn(300);
	});
	
	jQuery('.filter-content-close').on('click', function() {
	$(this).addClass("filter-item-open");
	$('.nuhost-filter-list-container').removeClass("nuhost-filter-min-height");
	$('.filter-content-box').delay(200).fadeOut(300);
	});
	
	//-- animated scroll -- //
	$(document).on('click', 'a[href^="#"]', function (event) {
		event.preventDefault();
		var nav_height = 110;		
		if ($($.attr(this, 'href')).offset())
		{
			$('html, body').animate({			
				scrollTop: $($.attr(this, 'href')).offset().top - nav_height
			}, 500);
		}
  	});
	
	
	//-- about us services carousel -- //
	$(document).ready(function() {
	$('.our-services-carousel').flickity({
	cellAlign: 'left',
    contain: true,
	pageDots: false
    });
	});
	
	//-- about us customers carousel -- //
	$(document).ready(function() {
	 $('.carousel-main-customers-text').flickity({
    pageDots: false,
	prevNextButtons: false,
	fade: true
    });
    $('.carousel-nav-customers-text').flickity({
    asNavFor: '.carousel-main-customers-text',
    contain: true,
    pageDots: false,
	prevNextButtons: false,
	draggable: false,
    });
	});
	
	//-- contact form height for mobile devices -- //
	$(document).ready(function() {
	var ifcontactformexist = document.getElementById("ajax-contact");
    if(ifcontactformexist){
	var offsetHeight = document.getElementById('ajax-contact').offsetHeight;
	document.getElementById('mobile-form-contact-height').style.height = offsetHeight+'px';
	}
	});
	
	//-- import loop files -- //
    $(function(){
      var includes = $('[data-include]');
      jQuery.each(includes, function(){
      var file = 'loop-templates/' + $(this).data('include') + '.html';
      $(this).load(file);
      });
    });
	