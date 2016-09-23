 jQuery(document).ready(function($) {
    $(".slogan").height($(window).height());
		$(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
	});
 });

window.onresize = resize;

function resize() {
    $(".slogan").height($(window).height());
}

$("#history").click(function(){
	$("html, body").animate({
		scrollTop:$(".template .history").offset().top
	}, "slow");
	return false;
});
$("#contact-us").click(function(){
	$("html, body").animate({
		scrollTop:$(".contact-us").offset().top
	}, "slow");
	return false;
});
