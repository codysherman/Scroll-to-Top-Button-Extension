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
function UP(speed,ease){
$("html, body").animate({scrollTop:"0"},speed,ease,function() {inProgress="no"});
}
function DOWN(speed,ease){
$("html, body").animate({scrollTop:$(document).height()},speed,ease,function() {inProgress="no"});
}
(function($){
	$.fn.extend({scrollToTop:function(options){

	var defaults={speed:"slow",ease:"jswing",start:0}

	var options=$.extend(defaults,options);

	return this.each(function(){var o=options;var scrollDiv=$(this);

	$(this).hide().removeAttr("href").css("cursor","pointer");

	if(o.stbb=="flip"){
	if($(window).scrollTop()>=o.flipDistance){
		$("#theImg").rotateAnimation(0);
		o.direction="up";
	};

	if($(window).scrollTop()<"200"){
		$("#theImg").rotateAnimation(-180);
		o.direction="down";
	};
};

	if($(window).scrollTop()>=o.start){

	$(this).fadeIn("slow");}$(window).scroll(function(){

	if($(window).scrollTop()>=o.start){
	$(scrollDiv).fadeIn("slow");}else{
	$(scrollDiv).fadeOut("slow");
	}

if(o.stbb=="flip"){
	if($(window).scrollTop()>=o.flipDistance){
		$("#theImg").rotateAnimation(0);
		o.direction="up";
	};

	if($(window).scrollTop()<o.flipDistance){
		$("#theImg").rotateAnimation(-180);
		o.direction="down";
	};
};

});

inProgress="no";

if((o.stbb=="flip") || (o.stbb=="dual")){
	scrollDiv.click(function(event){
		if(inProgress=="yes"){
		$("html, body").stop();
		inProgress="no";
		}

		else if(o.direction=="up"){
		inProgress="yes";
		speed=o.speed;
		ease=o.ease;
		UP(speed,ease);
		$(this).fadeTo("medium", o.transparency);
		}

		else if(o.direction=="down"){
		inProgress="yes";
		speed=o.speed;
		ease=o.ease;
		DOWN(speed,ease);
		$(this).fadeTo("medium", o.transparency);
		}
	})
}

else if(o.stbb=="off"){
	scrollDiv.click(function(event){
		if(inProgress=="yes"){
		$("html, body").stop();
		inProgress="no";
		}

		else{
		inProgress="yes";
		speed=o.speed;
		ease=o.ease;
		UP(speed,ease);
		}
	})
}

});
}
});
})(jQuery);
