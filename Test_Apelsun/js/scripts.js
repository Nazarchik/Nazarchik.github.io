$('.js_btn_order1').click(function() { 
	
	$('.js-overlay-order1').fadeIn();
	$('.information').css('filter','blur(5px)');
});


$('.js_btn_order2').click(function() { 
	
	$('.js-overlay-order2').fadeIn();
	$('.information').css('filter','blur(5px)');
});



$('.js-close-order').click(function() { 
	$('.js-overlay-order1').fadeOut();
	$('.information').css('filter','none');
});

$('.js-close-order').click(function() { 
	$('.js-overlay-order2').fadeOut();
	$('.information').css('filter','none');
});



$('.js_btn_popur_ok').click(function() { 
	$('.js-overlay-order1').fadeOut();
	$('.js-overlay-order2').fadeOut();
	$('.information').css('filter','none');
});

$('.btn_popur_cancel').click(function() { 
	$('.js-overlay-order1').fadeOut();
	$('.js-overlay-order2').fadeOut();
	$('.information').css('filter','none');
});




$(document).mouseup(function (e) { 
	var popup = $('.js-popup-order1');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-overlay-order1').fadeOut();
		$('.information').css('filter','none');
	}
});

$(document).mouseup(function (e) { 
	var popup = $('.js-popup-order2');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-overlay-order2').fadeOut();
		$('.information').css('filter','none');
	}
});