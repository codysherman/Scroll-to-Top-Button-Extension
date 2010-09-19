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
*Version: 3.0.0
-----------------------*/

// Checks if the URL already has built-in button.
var alreadyHasIt = false;
if (window.location.href.indexOf('http://www.tumblr.com/') != -1) {
	if (window.location.href.indexOf('http://www.tumblr.com/dashboard') != -1) {
		alreadyHasIt = true;
	}
	else if (window.location.href.indexOf('http://www.tumblr.com/tumblelog/') != -1) {
		alreadyHasIt = true;
	}
	else if (window.location.href.indexOf('http://www.tumblr.com/tagged/') != -1) {
		alreadyHasIt = true;
	}
	else if (window.location.href.indexOf('http://www.tumblr.com/liked/by/') != -1) {
		alreadyHasIt = true;
	}
	else if (window.location.href.indexOf('http://www.tumblr.com/likes') != -1) {
		alreadyHasIt = true;
	}
}
if ((window == top) && (alreadyHasIt == false)) {

// Asks background.html for [LocalStorage] settings.
chrome.extension.sendRequest({greeting: "settings"}, function(response) {
var speed = parseInt(response.speed);
var distance = parseInt(response.distance);
var size = response.size;
var arrow = response.arrow;
var scroll = response.scroll;
var location = response.location;
var imgURL=chrome.extension.getURL("arrows/"+arrow+".png");

// Actually creates the button on the page.
   $("body").prepend('<img id=theImg />');
theImg.style.opacity = 0.5;
theImg.src=imgURL;
theImg.style.position = 'fixed';
theImg.style.width = size;
theImg.style.height = 'auto';
theImg.style.display = 'none';
theImg.style.zIndex = 2147483647;
theImg.style.border = '0px';
theImg.style.margin = '0px';
theImg.style.padding = '0px';
if (location == "TR") {
		theImg.style.top = '20px';
		theImg.style.right = '20px';
	}
else if (location == "TL") {
		theImg.style.top = '20px';
		theImg.style.left = '20px';
	}
else if (location == "BR") {
		theImg.style.bottom = '20px';
		theImg.style.right = '20px';
	}
else if (location == "BL") {
		theImg.style.bottom = '20px';
		theImg.style.left = '20px';
	}

// Handles whether the button should be visible at a certain distance down the page.
$("#theImg").hover(function(){
		if($(window).scrollTop()>distance){$("#theImg").fadeTo("fast", 1.0);}
	},function(){
   		if($(window).scrollTop()>distance){$("#theImg").fadeTo("medium", 0.5);}
	});

// Actually creates the button on the page.
   $("body").prepend('<img id=theImg2 />');
theImg2.style.opacity = 0.5;
theImg2.src=imgURL;
theImg2.style.position = 'fixed';
theImg2.style.width = size;
theImg2.style.height = 'auto';
theImg.style.display = 'none';
theImg2.style.zIndex = 2147483647;
theImg2.style.border = '0px';
theImg2.style.margin = '0px';
theImg2.style.padding = '0px';

		theImg2.style.bottom = '20px';
		theImg2.style.right = '20px';


$('#theImg2').rotate(-180);




// Calls, and passes variables to jquery.scroll.pack.js which finds the created button and applies the scrolling rules.
   $("#theImg").scrollToTop({speed:speed, ease:scroll, start:distance, direction:"up"});


// Calls, and passes variables to jquery.scroll.pack.js which finds the created button and applies the scrolling rules.
   $("#theImg2").scrollToTop({speed:speed, ease:scroll, start:0, direction:"down"});

 });

};

