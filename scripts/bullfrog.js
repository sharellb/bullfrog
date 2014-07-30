$(document).ready(function(){
	$('section.content-right article').hide();
	$('.content-center #related a').css("background-color", "#B8BCB8");

	$('.content-center #featured a').click(function(){
		$(this).css("background-color", "#B8BCB8");
		$('section.content-center ul').fadeOut();
		$('section.content-center .read-more').fadeOut();
		$('.content-center #related a').css("background-color", "white");
		$('section.content-right article').fadeIn(1000);
	})
	$('.content-center #related a').click(function(){
		$(this).css("background-color", "#B8BCB8")
		$('section.content-right article').fadeOut();
		$('.content-center #featured a').css("background-color", "white");
		$('section.content-center ul').fadeIn(1000);
		$('section.content-center .read-more').fadeIn(1000);
	});
});