/*-----------------------
* Scroll to Top Button
* by Cody Sherman, http://codysherman.com/
* 
* Copyright (c) 2010 Cody Sherman
* Licensed under the MIT License http://www.opensource.org/licenses/mit-license.php
*
* Description: Scroll to Top Button allows you to quickly jump back to the top of any page! Once you scroll far enough down on a page, the button will appear in the top right corner. Click it, and you will be taken to the very top in no time!
*
* To install: https://chrome.google.com/extensions/detail/chiikmhgllekggjhdfjhajkfdkcngplp
*
*Source code at: http://github.com/codysherman/Scroll-to-Top-Button-Extension
*
*Version: 4.1.0
-----------------------*/
// Checks if the URL already has built-in button.
var alreadyHasIt = false;
if (window.location.href.indexOf('http://www.tumblr.com/') != -1) {
	if (window.location.href.indexOf('http://www.tumblr.com/dashboard') != -1) {
		$('#return_to_top').remove();
	}
	else if (window.location.href.indexOf('http://www.tumblr.com/tumblelog/') != -1) {
		$('#return_to_top').remove();
	}
	else if (window.location.href.indexOf('http://www.tumblr.com/tagged/') != -1) {
		$('#return_to_top').remove();
	}
	else if (window.location.href.indexOf('http://www.tumblr.com/liked/by/') != -1) {
		$('#return_to_top').remove();
	}
	else if (window.location.href.indexOf('http://www.tumblr.com/likes') != -1) {
		$('#return_to_top').remove();
	}
	else if (window.location.href.indexOf('http://www.tumblr.com/messages') != -1) {
		$('#return_to_top').remove();
	}
}

if ((window == top) && ($(window).height()<$(document).height())) {
loadSTTB="true";
}

/*if ((window == top) && (window.location.href.indexOf('facebook.com') != -1)) {
loadSTTB="true";
}

if ((window == top) && (window.location.href.indexOf('twitter.com') != -1)) {
loadSTTB="true";
}

if ((window == top) && (window.location.href.indexOf('tumblr.com/archive') != -1)) {
loadSTTB="true";
}*/


if (loadSTTB=="true") {
// Asks background.html for [LocalStorage] settings.
chrome.extension.sendRequest({greeting: "settings"}, function(response) {
var speed = parseInt(response.speed);
var distance = parseInt(response.distance);
var flipDistance = parseInt(response.distance);
var size = response.size;
var arrow = response.arrow;
var scroll = response.scroll;
var location = response.location;
var stbb = response.stbb;
var transparency = response.transparency;

if (stbb == "dual"){
var imgURL=chrome.extension.getURL("arrows/dual/"+arrow+".png");
}
else{
var imgURL=chrome.extension.getURL("arrows/"+arrow+".png");
}

// Actually creates the button on the page.
   $("body").prepend('<img id=theImg />');
	if(stbb=="flip"){
	$("#theImg").rotate(-180);
	};
theImg.style.opacity = transparency;
theImg.src=imgURL;
theImg.style.position = 'fixed';
theImg.style.width = size;
theImg.style.height = 'auto';
theImg.style.display = 'none';
theImg.style.zIndex = 2147483647;
theImg.style.border = '0px';
theImg.style.padding = '0px';
if (location == "TR") {
		theImg.style.top = '20px';
		theImg.style.right = '20px';
		theImg.style.margin = '0px 0px 0px 0px';
	}
else if (location == "TL") {
		theImg.style.top = '20px';
		theImg.style.left = '20px';
		theImg.style.margin = '0px 0px 0px 0px';
	}
else if ((location == "BR") && (stbb != "dual")) {
		theImg.style.bottom = '20px';
		theImg.style.right = '20px';
		theImg.style.margin = '0px 0px 0px 0px';
	}
else if ((location == "BR") && (stbb == "dual")) {
		adjust=parseInt(size) / 2 + 22;
		adjusted=adjust + "px";
		theImg.style.bottom = adjusted;
		theImg.style.right = '20px';
		theImg.style.margin = '0px 0px 0px 0px';
	}
else if ((location == "BL") && (stbb != "dual")) {
		theImg.style.bottom = '20px';
		theImg.style.left = '20px';
		theImg.style.margin = '0px 0px 0px 0px';
	}
else if ((location == "BL") && (stbb == "dual")) {
		adjust=parseInt(size) / 2 + 22;
		adjusted=adjust + "px";
		theImg.style.bottom = adjusted;
		theImg.style.left = '20px';
		theImg.style.margin = '0px 0px 0px 0px';
	}
else if (location == "CR") {
		adjust="-" + parseInt(size) / 2 + "px 0px 0px 0px";
		theImg.style.right = '20px';
		theImg.style.top = '50%';
		theImg.style.margin = adjust;
	}
else if (location == "CL") {
		adjust="-" + parseInt(size) / 2 + "px 0px 0px 0px";
		theImg.style.left = '20px';
		theImg.style.top = '50%';
		theImg.style.margin = adjust;
	}
else if (location == "TC") {

		adjust="0px -" + parseInt(size) / 2 + "px 0px 0px";
		theImg.style.top = '20px';
		theImg.style.right = '50%';
		theImg.style.margin = adjust;
	}
else if ((location == "BC") && (stbb != "dual")) {
		adjust="0px -" + parseInt(size) / 2 + "px 0px 0px";
		theImg.style.bottom = '20px';
		theImg.style.right = '50%';
		theImg.style.margin = adjust;
	}
else if ((location == "BC") && (stbb == "dual")) {
		adjust="0px -" + parseInt(size) / 2 + "px " + "0px 0px";
		adjust2=parseInt(size) / 2 + 22;
		adjusted=adjust2 + "px";
		theImg.style.bottom = adjusted;
		theImg.style.right = '50%';
		theImg.style.margin = adjust;
	}

if(stbb=="dual"){
   $("body").prepend('<img id=theImg2 />');
	$("#theImg2").rotate(-180);
theImg2.style.opacity = transparency;
theImg2.src=imgURL;
theImg2.style.position = 'fixed';
theImg2.style.width = size;
theImg2.style.height = 'auto';
//theImg2.style.display = 'none';
theImg2.style.zIndex = 2147483647;
theImg2.style.border = '0px';
theImg2.style.padding = '0px';
if (location == "TR") {
		adjust=parseInt(size) / 2 + 22;
		adjusted=adjust + "px";
		theImg2.style.top = adjusted;
		theImg2.style.right = '20px';
		theImg2.style.margin = '0px 0px 0px 0px';
	}
else if (location == "TL") {
		adjust=parseInt(size) / 2 + 22;
		adjusted=adjust + "px";
		theImg2.style.top = adjusted;
		theImg2.style.left = '20px';
		theImg2.style.margin = '0px 0px 0px 0px';
	}
else if (location == "BR") {
		theImg2.style.bottom = '20px';
		theImg2.style.right = '20px';
		theImg2.style.margin = '0px 0px 0px 0px';
	}
else if (location == "BL") {
		theImg2.style.bottom = '20px';
		theImg2.style.left = '20px';
		theImg2.style.margin = '0px 0px 0px 0px';
	}
else if (location == "CR") {
		adjust=2 + "px 0px 0px 0px";
		theImg2.style.right = '20px';
		theImg2.style.top = '50%';
		theImg2.style.margin = adjust;
	}
else if (location == "CL") {
		adjust=2 + "px 0px 0px 0px";
		theImg2.style.left = '20px';
		theImg2.style.top = '50%';
		theImg2.style.margin = adjust;
	}
else if (location == "TC") {
		adjust=parseInt(size) / 2 + 2 + "px -" + parseInt(size) / 2 + "px 0px 0px";
		theImg2.style.top = '20px';
		theImg2.style.right = '50%';
		theImg2.style.margin = adjust;
	}
else if (location == "BC") {
		adjust="0px -" + parseInt(size) / 2 + "px 0px 0px";
		theImg2.style.bottom = '20px';
		theImg2.style.right = '50%';
		theImg2.style.margin = adjust;
	}
}

if((stbb=="flip") || (stbb=="dual")){distance=0;};

if (stbb != "keys"){

$("#theImg").hover(function(){
		if($(window).scrollTop()>=distance){$("#theImg").fadeTo("fast", 1.0);}
	},function(){
   		if($(window).scrollTop()>=distance){$("#theImg").fadeTo("medium", transparency);}
	});

$("#theImg2").hover(function(){
		if($(window).scrollTop()>=distance){$("#theImg2").fadeTo("fast", 1.0);}
	},function(){
   		if($(window).scrollTop()>=distance){$("#theImg2").fadeTo("medium", transparency);}
	});


// Calls, and passes variables to jquery.scroll.pack.js which finds the created button and applies the scrolling rules.
   $("#theImg").scrollToTop({speed:speed, ease:scroll, start:distance, stbb:stbb, flipDistance:flipDistance, transparency:transparency, direction:"up"});
   $("#theImg2").scrollToTop({speed:speed, ease:scroll, start:distance, stbb:stbb, flipDistance:flipDistance, transparency:transparency, direction:"down"});

} //Keyboard Only
   
   shortcut.add("Alt+Down", function() {
       DOWN(speed, scroll);
   });
   shortcut.add("Alt+Up", function() {
       UP(speed, scroll);
   });

 });

};

