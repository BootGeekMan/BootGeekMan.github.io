function GoHowTo() {
				var target= $('#HowTo');
				$('html, body').stop().animate({
				   scrollTop: target.offset().top
				}, 300);
			  }
function GoUp() {
	var articlePadding = 150;
	var target= $('.header');
	$('html, body').stop().animate({
	   scrollTop: target.offset().top - articlePadding
	}, 300);
  }		