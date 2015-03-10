$(document).ready(function() {
	$(".js-next-section").click(function(e) {
		e.preventDefault();

		var destination = $(this).attr('href');

		$('html, body').animate({
			scrollTop: $(destination).offset().top
		}, 500);
	});
});