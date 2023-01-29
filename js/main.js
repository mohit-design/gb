$(function() {
  // OnScroll Navbar Fixed
	$(window).scroll(function(){
	  if ($(window).scrollTop() >= 50) {
	    $(".bg-logo-navbar-menu-desktop").addClass('active');
	   } else {
	    $(".bg-logo-navbar-menu-desktop").removeClass('active');
	   }
	});
	$(".burger-menu").click(function() {
		$("body").addClass("active");
		$(".fixed-navbar-menu-mobile").addClass("active");
	});
	$(".menu-listing-mobile > li > i").click(function() {
		$(".sub-menu-listing-mobile").slideToggle();
	});
	$(".fixed-navbar-menu-mobile-close > i").click(function() {
		$("body").removeClass("active");
		$(".fixed-navbar-menu-mobile").removeClass("active");
	});
});