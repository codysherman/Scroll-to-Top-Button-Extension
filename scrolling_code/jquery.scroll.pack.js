/*-----------------------
* jQuery Plugin: Scroll to Top
* by Craig Wilson, Ph.Creative http://www.ph-creative.com
* 
* Copyright (c) 2009 Ph.Creative Ltd.
* Licensed under the MIT License http://www.opensource.org/licenses/mit-license.php
*
* Description: Adds an unobtrusive "Scroll to Top" link to your page with smooth scrolling.
* For usage instructions and version updates to go http://blog.ph-creative.com/post/jquery-plugin-scroll-to-top-v3.aspx
* 
* Version: 3.1, 29/07/2010
-----------------------*/
(function($){
	$.fn.extend({scrollToTop:function(options){

	var defaults={speed:"slow",ease:"jswing",start:0}

	var options=$.extend(defaults,options);

	return this.each(function(){var o=options;var scrollDiv=$(this);

	$(this).hide().removeAttr("href").css("cursor","pointer");

	if($(window).scrollTop()>o.start){

	$(this).fadeIn("slow");}$(window).scroll(function(){

	if($(window).scrollTop()>o.start){

	$(scrollDiv).fadeIn("slow");}else{
	$(scrollDiv).fadeOut("slow");
	}});

	scrollDiv.click(function(event){
$("html, body").animate({scrollTop:"0px"},o.speed,o.ease);
$("#theImg").fadeTo("medium", 0.5);
});
});
}
});
})(jQuery);