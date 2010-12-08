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
*Version: 4.4.2
-----------------------*/

STTB();

// Checks if the URL already has built-in button.
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

function STTB() {
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
   $("body").prepend('<img id=STTBimg />');
	if(stbb=="flip"){
	$("#STTBimg").rotate(-180);
	};
STTBimg.style.opacity = transparency;
STTBimg.src=imgURL;
STTBimg.style.position = 'fixed';
STTBimg.style.width = size;
STTBimg.style.height = 'auto';
STTBimg.style.display = 'none';
STTBimg.style.zIndex = 2147483647;
STTBimg.style.border = '0px';
STTBimg.style.padding = '0px';
if (location == "TR") {
		STTBimg.style.top = '20px';
		STTBimg.style.right = '20px';
		STTBimg.style.margin = '0px 0px 0px 0px';
	}
else if (location == "TL") {
		STTBimg.style.top = '20px';
		STTBimg.style.left = '20px';
		STTBimg.style.margin = '0px 0px 0px 0px';
	}
else if ((location == "BR") && (stbb != "dual")) {
		STTBimg.style.bottom = '20px';
		STTBimg.style.right = '20px';
		STTBimg.style.margin = '0px 0px 0px 0px';
	}
else if ((location == "BR") && (stbb == "dual")) {
		adjust=parseInt(size) / 2 + 22;
		adjusted=adjust + "px";
		STTBimg.style.bottom = adjusted;
		STTBimg.style.right = '20px';
		STTBimg.style.margin = '0px 0px 0px 0px';
	}
else if ((location == "BL") && (stbb != "dual")) {
		STTBimg.style.bottom = '20px';
		STTBimg.style.left = '20px';
		STTBimg.style.margin = '0px 0px 0px 0px';
	}
else if ((location == "BL") && (stbb == "dual")) {
		adjust=parseInt(size) / 2 + 22;
		adjusted=adjust + "px";
		STTBimg.style.bottom = adjusted;
		STTBimg.style.left = '20px';
		STTBimg.style.margin = '0px 0px 0px 0px';
	}
else if (location == "CR") {
		adjust="-" + parseInt(size) / 2 + "px 0px 0px 0px";
		STTBimg.style.right = '20px';
		STTBimg.style.top = '50%';
		STTBimg.style.margin = adjust;
	}
else if (location == "CL") {
		adjust="-" + parseInt(size) / 2 + "px 0px 0px 0px";
		STTBimg.style.left = '20px';
		STTBimg.style.top = '50%';
		STTBimg.style.margin = adjust;
	}
else if (location == "TC") {

		adjust="0px -" + parseInt(size) / 2 + "px 0px 0px";
		STTBimg.style.top = '20px';
		STTBimg.style.right = '50%';
		STTBimg.style.margin = adjust;
	}
else if ((location == "BC") && (stbb != "dual")) {
		adjust="0px -" + parseInt(size) / 2 + "px 0px 0px";
		STTBimg.style.bottom = '20px';
		STTBimg.style.right = '50%';
		STTBimg.style.margin = adjust;
	}
else if ((location == "BC") && (stbb == "dual")) {
		adjust="0px -" + parseInt(size) / 2 + "px " + "0px 0px";
		adjust2=parseInt(size) / 2 + 22;
		adjusted=adjust2 + "px";
		STTBimg.style.bottom = adjusted;
		STTBimg.style.right = '50%';
		STTBimg.style.margin = adjust;
	}

if(stbb=="dual"){
   $("body").prepend('<img id=STTBimg2 />');
	$("#STTBimg2").rotate(-180);
STTBimg2.style.opacity = transparency;
STTBimg2.src=imgURL;
STTBimg2.style.position = 'fixed';
STTBimg2.style.width = size;
STTBimg2.style.height = 'auto';
STTBimg2.style.display = 'none';
STTBimg2.style.zIndex = 2147483647;
STTBimg2.style.border = '0px';
STTBimg2.style.padding = '0px';
if (location == "TR") {
		adjust=parseInt(size) / 2 + 22;
		adjusted=adjust + "px";
		STTBimg2.style.top = adjusted;
		STTBimg2.style.right = '20px';
		STTBimg2.style.margin = '0px 0px 0px 0px';
	}
else if (location == "TL") {
		adjust=parseInt(size) / 2 + 22;
		adjusted=adjust + "px";
		STTBimg2.style.top = adjusted;
		STTBimg2.style.left = '20px';
		STTBimg2.style.margin = '0px 0px 0px 0px';
	}
else if (location == "BR") {
		STTBimg2.style.bottom = '20px';
		STTBimg2.style.right = '20px';
		STTBimg2.style.margin = '0px 0px 0px 0px';
	}
else if (location == "BL") {
		STTBimg2.style.bottom = '20px';
		STTBimg2.style.left = '20px';
		STTBimg2.style.margin = '0px 0px 0px 0px';
	}
else if (location == "CR") {
		adjust=2 + "px 0px 0px 0px";
		STTBimg2.style.right = '20px';
		STTBimg2.style.top = '50%';
		STTBimg2.style.margin = adjust;
	}
else if (location == "CL") {
		adjust=2 + "px 0px 0px 0px";
		STTBimg2.style.left = '20px';
		STTBimg2.style.top = '50%';
		STTBimg2.style.margin = adjust;
	}
else if (location == "TC") {
		adjust=parseInt(size) / 2 + 2 + "px -" + parseInt(size) / 2 + "px 0px 0px";
		STTBimg2.style.top = '20px';
		STTBimg2.style.right = '50%';
		STTBimg2.style.margin = adjust;
	}
else if (location == "BC") {
		adjust="0px -" + parseInt(size) / 2 + "px 0px 0px";
		STTBimg2.style.bottom = '20px';
		STTBimg2.style.right = '50%';
		STTBimg2.style.margin = adjust;
	}

CheckIt();

}

if((stbb=="flip") || (stbb=="dual")){distance=0;};

if (stbb != "keys"){
var head = document.getElementsByTagName('head')[0],
    style = document.createElement('style'),
    rules = document.createTextNode('@media print{#STTBimg{ display:none; }#STTBimg2{ display:none; }}');

style.type = 'text/css';
style.appendChild(rules);
head.appendChild(style);

if ((transparency == 0.0) && (stbb=="dual")){
$("#STTBimg").hover(function(){
		if($(window).scrollTop()>=distance){
$("#STTBimg").stop();
$("#STTBimg2").stop();
$("#STTBimg").stop().fadeTo("fast", 1.0);
$("#STTBimg2").stop().fadeTo("fast", 0.5);
}
	},function(){
   		if($(window).scrollTop()>=distance){$("#STTBimg").stop().fadeTo("medium", transparency);$("#STTBimg2").stop().fadeTo("medium", transparency);}
	});

$("#STTBimg2").hover(function(){
		if($(window).scrollTop()>=distance){
$("#STTBimg").stop();
$("#STTBimg2").stop();
$("#STTBimg").stop().fadeTo("fast", 0.5);
$("#STTBimg2").stop().fadeTo("fast", 1.0);
}
	},function(){
   		if($(window).scrollTop()>=distance){$("#STTBimg").fadeTo("medium", transparency);$("#STTBimg2").fadeTo("medium", transparency);}
	});
}

else{
$("#STTBimg").hover(function(){
		if($(window).scrollTop()>=distance){$("#STTBimg").stop().fadeTo("fast", 1.0);}
	},function(){
   		if($(window).scrollTop()>=distance){$("#STTBimg").stop().fadeTo("medium", transparency);}
	});

$("#STTBimg2").hover(function(){
		if($(window).scrollTop()>=distance){$("#STTBimg2").stop().fadeTo("fast", 1.0);}
	},function(){
   		if($(window).scrollTop()>=distance){$("#STTBimg2").stop().fadeTo("medium", transparency);}
	});
}


// Calls, and passes variables to jquery.scroll.pack.js which finds the created button and applies the scrolling rules.
   $("#STTBimg").scrollToTop({speed:speed, ease:scroll, start:distance, stbb:stbb, flipDistance:flipDistance, transparency:transparency, direction:"up"});
   $("#STTBimg2").scrollToTop({speed:speed, ease:scroll, start:distance, stbb:stbb, flipDistance:flipDistance, transparency:transparency, direction:"down"});

} //Keyboard Only
   
   shortcut.add("Alt+Down", function() {
       DOWN(speed, scroll);
   });
   shortcut.add("End", function() {
       DOWN(speed, scroll);
       },{
       'disable_in_input':true
   });
   shortcut.add("Alt+Up", function() {
       UP(speed, scroll);
   });
   shortcut.add("Home", function() {
       UP(speed, scroll);
       },{
       'disable_in_input':true
   });

 });

function CheckIt() {
$(document).ready(function($) {
	if ((window == top) && ($(window).height()>=$(document).height())) {
		REMOVE();
	}
	else if (window.location.href.indexOf('mail.google.com/') != -1) {
		REMOVE();
	}
	else if (window.location.href.indexOf('docs.google.com/') != -1) {
		REMOVE();
	}

function REMOVE() {
$('#STTBimg').fadeTo('fast', 0.0, function() {
      $(this).remove();
});
$('#STTBimg2').fadeTo('fast', 0.0, function() {
      $(this).remove();
});
watch();
};

function watch(){
	var scrolled = 0;
	$(window).scroll(function () {
		if (scrolled==0) { 
			STTB();
			scrolled = 1;
		};
	});


};

});

};

};



