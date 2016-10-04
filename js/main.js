 jQuery(document).ready(function($) {
    $(".screen").height($(window).height());
		$(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
	});
 });

//window.onresize = resize;

function resize() {
    $(".screen").height($(window).height());
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
jQuery('ul.nav li.dropdown').hover(function() {
  jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn();
}, function() {
  jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut();
});