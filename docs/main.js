// Voir si on garde les 2 click vu que maintenant il y as des pages dédiés
/*$("#history").click(function() {
	$("html, body").animate({
		scrollTop: $(".template .history").offset().top
	}, "slow");
	return false;
});*/

$("#contact-us").click(function() {
	$("html, body").animate({
		scrollTop: $(".contact-us").offset().top
	}, "slow");
	return false;
});

$("ul.nav li.dropdown").hover(function() {
	$(this).find(".dropdown-menu").stop(true, true).delay(200).fadeIn();
}, function() {
	$(this).find(".dropdown-menu").stop(true, true).delay(200).fadeOut();
});

$("header").load("header.html");