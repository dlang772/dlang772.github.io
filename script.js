$(function() {
	$('a[href*=#]').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
	});
});

    $("#navbar-about").click(function() {
        $('html, body').animate({
            scrollTop: ($("#about-section").offset().top - 50)
        }, 500);
    });