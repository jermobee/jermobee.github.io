$(document).ready(function () {
	
	// Wrap the headers in span tags for styling purposes
	$('h2').wrapInner('<span>');
	
	// Configure the navigation tabs (no effects for IE, because it's buggy)
	if (!$.browser.msie) {
		$('#main').tabs({
		fx: { 
			opacity: 'toggle',
			height: 'toggle',
            duration: 400
 			}
		});
	}
	else {
		$('#main').tabs({
		});
	}
	
	$('.contact').click(
		function(e) {
			e.preventDefault();
			$("#main").tabs("select","#contact");
		}
	);
	
	// Latest tweet
	getTwitters('tweet', {
		id: 'envato',		// twitter username goes here
		clearContents: true,
		count: 1,
		withFriends: true,
		ignoreReplies: true,
		enableLinks: true,
		template: '<p>%text% <span>%time%</span></p>'
	});
	
	// Social links animation
	$('#social li').hover(
		function () {
			$(this).stop().animate({paddingLeft: 6}, 160);
		},
		function () {
			$(this).stop().animate({paddingLeft: 0}, 160);
		}
	);

	// Tooltip on the vCard download icon
	$('#vcard').poshytip({
		className: 'poshytip',
		showTimeout: 1,
		alignTo: 'target',
		alignX: 'center',
		offsetY: 5,
		allowTipHover: true
	});
	
	// Activate and configure the FancyBox lightbox plugin
	$(".fancybox").fancybox({
		openEffect  : 'elastic',
		closeEffect	: 'elastic',
		helpers:  {
			title : {
				type : 'inside'
			}
        }
	});
	
	$("a.grouped_elements").fancybox();
	
	// FancyBox lightbox plugin for videos
	$(".video").fancybox({
		maxWidth	: 800,
		maxHeight	: 600,
		fitToView	: false,
		width		: '70%',
		height		: '70%',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none',
		padding : 10
	});
	
	// Form validation on the contact form
	$("form").validate({
		errorElement: "em"
	});
	
	// Activeate and configure the slider
	$(".rslides").responsiveSlides({
		auto: false,            // Boolean: Animate automatically, true or false
		speed: 400,             // Integer: Speed of the transition, in milliseconds
		timeout: 6000,          // Integer: Time between slide transitions, in milliseconds
		pager: true,            // Boolean: Show pager, true or false
		nav: true,              // Boolean: Show navigation, true or false
		random: false,          // Boolean: Randomize the order of the slides, true or false
		pause: false,           // Boolean: Pause on hover, true or false
		pauseControls: false,   // Boolean: Pause when hovering controls, true or false
		prevText: "Previous",   // String: Text for the "previous" button
		nextText: "Next",       // String: Text for the "next" button
		namespace: "rslides",   // String: change the default namespace used
		before: function(){},   // Function: Before callback
		after: function(){}    // Function: After callback
	});

});