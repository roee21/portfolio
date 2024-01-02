
        
        $(document).ready(function() {
    // Check if body height is higher than window height :)
    if ($("body").height() < $(window).height()) {
				    $('#scrollPercentLabel>span').html("no Scroll");
    } else {
    				$(window).scroll(function(e){
					var scrollTop = $(window).scrollTop();
					var docHeight = $(document).height();
					var winHeight = $(window).height();
					var scrollPercent = (scrollTop) / (docHeight - winHeight);
					var scrollPercentRounded = Math.round(scrollPercent*100);

				    $('#scrollPercentLabel>span').html(scrollPercentRounded);

				});
    }
});
