
$(document).ready(function(){

	$('header').hide().fadeIn(2000).fadeOut(2000);
	// $('#top')
	$('#main-nav').click(function() {
		$('header').slideToggle(3000);
	});

	// Hide all but the first link in center content links
	function hideRestLinks() {
		$('section.content-center ul li').slice(1).hide();
	}

	//Hide all recent content links in the list
	// Show first recent content link
	hideRestLinks();

	//When hovering on a recent content link, show
	//the next link.

	$('section.content-center ul li').hover(function() {
		$(this).next().show();
	});
	
	//Target links in nav and when you hover over them
	//log a message in the console

	$('#main-nav a').hover(function() {
		alert('You hovered!');
	});

	// Add a minimize link (after View all link).
	$('section.content-center').append('<a id="minimize" href="#">Minimize</a>')

	// When clocking minimize, hide all but first link.
	$('#minimize').click(function() {
		hideRestLinks().fadeOut(2000);
	})

	$('#horned-frog').click(function() {
		$('body').addClass('froggy');
	})

	//add class
	//remove class
	//toggle class
});