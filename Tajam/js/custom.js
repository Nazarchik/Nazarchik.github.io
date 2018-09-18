// $(function(){
// 	$('.tabs a').click(function(){
// 		$(this).parents('.tab-wrap').find('.tab-cont').addClass('hide');
// 		$(this).parents().siblings().removeClass('active');
// 		var id = $(this).attr('href');
// 		$(id).removeClass('hide');
// 		$(this).parent().addClass('active');
// 		return false
// 	});

$(function(){
	$('.header-slider').slick({
			arrows: false,
			dots: true,
		});
});
$(function(){
	$('.qwotes-slider').slick({
			
		});
});