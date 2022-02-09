$(document).ready(function(){
	$(window).scroll(function () {

		$('#back-to-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 400);
			return false;
		});
    });
});



