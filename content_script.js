/*-----------------------
* Scroll to Top Button
* by Cody Sherman, http://codysherman.com/
* 
* Copyright (c) 2010 Cody Sherman
* Licensed under the MIT License http://www.opensource.org/licenses/mit-license.php
*
* Description: Adds an unobtrusive "Scroll to Top" link to your page with smooth scrolling.
* To install: https://chrome.google.com/extensions/detail/chiikmhgllekggjhdfjhajkfdkcngplp
*
*Support at: http://groups.google.com/group/scroll-to-top-button
*
*Version: 2.4.1
-----------------------*/

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

chrome.extension.sendRequest({greeting: "settings"}, function(response) {
var speed = parseInt(response.speed);
var distance = parseInt(response.distance);
var size = response.size;
var arrow = response.arrow;
var scroll = response.scroll;
var location = response.location;

var imgURL=chrome.extension.getURL("arrows/"+arrow+".png");


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


$("#theImg").hover(function(){
		if($(window).scrollTop()>distance){$("#theImg").fadeTo("fast", 1.0);}
	},function(){
   		if($(window).scrollTop()>distance){$("#theImg").fadeTo("medium", 0.5);}
	});
   $("#theImg").scrollToTop({speed:speed, ease:scroll, start:distance});
 });



};

