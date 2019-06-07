//= require ./all_nosearch
//= require ./app/_search
//= require ./jquery.nicescroll.min

$(document).ready(function () {
	$('#DarkModeSwitch-trigger').on('change', function(){
		//var status = 0;
		if(this.checked) {
			//status=1;
			//Cookies.set('mini-cart-status', status , { expires: 7});
			jQuery('body').addClass('dark-mode');
		}
		else {
			//status=0;
			//Cookies.set('mini-cart-status', status , { expires: 7});
			jQuery('body').removeClass('dark-mode');
		}
	});
	
	var langg = $('.lang-selector2');
	var langg_width = ($('.page-wrapper > .content').innerWidth() * .4);
	
	$(langg).width(langg_width);
	
	//$('blockquote').each(function() {
		//langg = $('.lang-selector2').clone();
		//$(this).before(langg);
    //});
});

$(function() {  
    $("#toc").niceScroll({cursorcolor:"#22ac60", cursoropacitymin: .1});
	$("#toc").getNiceScroll().resize();
});