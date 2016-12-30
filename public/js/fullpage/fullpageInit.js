window.mobilecheck = function() {
	return $(window).width() < 1001;
};

function initialiseFullpage() {
	$('#fullpage').fullpage({
		sectionSelector: '.vertical-scrolling',
		anchors: ['happyNewYear', 'home', 'skills', 'projects', 'contact'],
		menu: '#menu',
		responsiveWidth: 1000,
		afterLoad: function(anchorLink, index, slideAnchor, slideIndex){

			// if(index == 4){
			// 	site.hideArrow();
			// }
		},
		onLeave: function(index, nextIndex, direction){
			// hide arrow if in contact section
			if (nextIndex == 5) {
				site.hideArrow();
			}
			// show arrow if leaving contact section
			if(index == 5){
				site.showArrow();
			}
		}
	});
}

$(document).ready(function () {
	initialiseFullpage();
});

$(window).resize(function () {
	$(window).location.refresh();
});
