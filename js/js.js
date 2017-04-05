 var navItem = $(".nav-item");
 var url = window.location.href;
 navItem.find("a").removeClass('on');
 navItem.each(function() {
 	var temp = $(this).find('a').attr('data-href');
 	if (url.indexOf(temp) > 0) {
 		$(this).find("a").addClass('on');
 	};
 });