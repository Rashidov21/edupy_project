jQuery( document ).ready( function( $ ) {
	
	$('body').append('<div class="demo-color-changer"><a data-toggle="tooltip" data-placement="left" title="template settings" class="setting-button no_active"><i class="fa fa-cog" aria-hidden="true"></i></a><ul class="demo-color-changer-list"><li><a href="#" class="bg-color color-1 active"></a></li><li><a href="#" class="bg-color color-2"></a></li><li><a href="#" class="bg-color color-3"></a></li><li><a href="#" class="bg-color color-4"></a></li><li><a target="_blank" data-toggle="tooltip" data-placement="left" title="معاينة" href="https://coodiv.net/whmcs/index.php?systpl=bredh-moon-rtl&language=arabic" class="bg-color">ع</a></li></ul></div>');
	
 	$('.setting-button').on('click', function(){
    if($(this).hasClass('no_active')){
        $(this).removeClass('no_active').addClass('active');
		$(".demo-color-changer-list").addClass('active');
    }else{
        $(this).addClass('no_active');
		$(".demo-color-changer-list").removeClass('active');
    }
    });
	
	
	$(".demo-color-changer-list li a").on("click", function (e)
    {
        e.preventDefault();
        var color = $(this).attr("href");
        $(".demo-color-changer-list li a").removeClass("active");
        $(this).addClass("active");
    });
	  
	        $(".color-1").click(function() {
			$("body").removeClass('second-color-styles third-color-styles fourth-color-styles');
            $("body").addClass('first-color-styles');
			});
			
			
            $(".color-2").click(function() {
			$("body").removeClass('first-color-styles third-color-styles fourth-color-styles');
            $("body").addClass('second-color-styles');
			});	
			
			$(".color-3").click(function() {
			$("body").removeClass('second-color-styles first-color-styles fourth-color-styles');
            $("body").addClass('third-color-styles');
			});
			
			
            $(".color-4").click(function() {
			$("body").removeClass('second-color-styles first-color-styles third-color-styles ');
            $("body").addClass('fourth-color-styles');
			});		

			

    } );