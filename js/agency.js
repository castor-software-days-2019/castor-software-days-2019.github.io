/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('to')).offset().top
        }, 1500, 'easeInOutExpo', () => {
            window.location = $anchor.attr('to')
        });
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

$('.title-container').click(function(){
    $('html, body').stop().animate({
        scrollTop: 0
    }, 1500, 'easeInOutExpo', () => {
        window.location = '#';
    });
})

$(".navbar-fixed-top").on('activate.bs.scrollspy', function (e) {
    const to = $($(e.target).find("a")[0]).attr("to");

    window.location = to;
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
	var modal = this;
	var hash = modal.id;
	window.location.hash = hash;
	window.onhashchange = function() {
		if (!location.hash){
			$(modal).modal('hide');
		}
	}
});