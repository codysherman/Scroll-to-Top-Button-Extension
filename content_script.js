/*-----------------------
* Scroll to Top Button
* by Cody Sherman, http://codysherman.com/
* 
* Copyright (c) 2011 Cody Sherman
* Licensed under the MIT License http://www.opensource.org/licenses/mit-license.php
*
* Description: Scroll to Top Button allows you to quickly jump back to the top of any page! Once you scroll far enough down on a page, the button will appear in the top right corner. Click it, and you will be taken to the very top!
*
* To install: https://chrome.google.com/webstore/detail/chiikmhgllekggjhdfjhajkfdkcngplp
*
*Source code at: http://github.com/codysherman/Scroll-to-Top-Button-Extension
*
*Version: 5.0.0
-----------------------*/
// Checks to see if page is larger than window, otherwise runs watch();
if ((window == top) && ($(window).height()<$(document).height())) {
    CheckIt();
}
else {
    watch();
}

// Checks to see if the page changes size later or if a mistake was made judging size by user scrolling
function watch(){
    $(window).scroll(function () {
        STTB();
        $(window).unbind('scroll');
    });
}

// CheckIt() is a blacklist of websites that use frames and don't scroll as expected
function CheckIt() {
    var blockedUrlArray=['mail.google.com/','docs.google.com/','docs0.google.com/','google.com/calendar','spreadsheets.google.com/','spreadsheets0.google.com/'];
    var urlArrayMatch;
    $.each( blockedUrlArray, function(i, urlString){
        if (window.location.href.indexOf( urlString ) != -1) {
            urlArrayMatch=true;
            return true; // break out of loop if match found
        }
    })
    if( ! urlArrayMatch ){
        STTB();
    }
}

// Checks to see if person donates, to disable the message asking for donation later.
if (window.location.href.indexOf('http://scrolltotopbutton.tumblr.com/donationcompleted') != -1) {
	chrome.extension.sendRequest({greeting: "donated"});
}

// Main function, sets up the button
function STTB() {
    // Removes the built-in button when on Tumblr
    if (window.location.href.indexOf('http://www.tumblr.com/') != -1) {
        var alreadyHasIt=['http://www.tumblr.com/dashboard','http://www.tumblr.com/tumblelog/','http://www.tumblr.com/messages','http://www.tumblr.com/tagged/','http://www.tumblr.com/liked/by/','http://www.tumblr.com/likes'];
        $.each( alreadyHasIt, function(i, urlString){
            if (window.location.href.indexOf( urlString ) != -1) {
                $('#return_to_top').remove();
            }
        })
    }

    // Asks background.html for [LocalStorage] settings from Options Page and assigns them to variables
    chrome.extension.sendRequest({greeting: "settings"}, function(response) {
        var speed = parseInt(response.speed);
        var speed2 = parseInt(response.speed2);
        var distance = parseInt(response.distance);
        var flipDistance = parseInt(response.distance);
        var size = response.size;
        var arrow = response.arrow;
        var scroll = response.scroll;
        var location = response.location;
        var stbb = response.stbb;
        var transparency = response.transparency;

        // Assigns the correct arrow color to imgURL
        if (stbb == "dual"){
            var imgURL=chrome.extension.getURL("arrows/dual/"+arrow+".png");
        }
        else{
            var imgURL=chrome.extension.getURL("arrows/"+arrow+".png");
        }

        // Creates the button image on the page
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
        }

        // Sets the appear distance to 0 for modes where button is always present
        if((stbb=="flip") || (stbb=="dual")){
            distance=0;
        };

        // Creates CSS so that the button is not present on printed pages
        if (stbb != "keys"){
            var head = document.getElementsByTagName('head')[0],
            style = document.createElement('style'),
            rules = document.createTextNode('@media print{#STTBimg{ display:none; }#STTBimg2{ display:none; }}');

            style.type = 'text/css';
            style.appendChild(rules);
            head.appendChild(style);
        };

        // A fix so that if user has set transparency to 0, both buttons will appear when hovering over one in dual mode
        if ((transparency == 0.0) && (stbb=="dual")){
            $("#STTBimg").hover(function(){
                if($(window).scrollTop()>=distance){
                    $("#STTBimg").stop();
                    $("#STTBimg2").stop();
                    $("#STTBimg").stop().fadeTo("fast", 1.0);
                    $("#STTBimg2").stop().fadeTo("fast", 0.5);
                }
            },function(){
                if($(window).scrollTop()>=distance){
                    $("#STTBimg").stop().fadeTo("medium", transparency);$("#STTBimg2").stop().fadeTo("medium", transparency);
                }
            });

            $("#STTBimg2").hover(function(){
                if($(window).scrollTop()>=distance){
                    $("#STTBimg").stop();
                    $("#STTBimg2").stop();
                    $("#STTBimg").stop().fadeTo("fast", 0.5);
                    $("#STTBimg2").stop().fadeTo("fast", 1.0);
                }
            },function(){
                if($(window).scrollTop()>=distance){
                    $("#STTBimg").fadeTo("medium", transparency);$("#STTBimg2").fadeTo("medium", transparency);
                }
            });
        }

        // Has transparency change on mouseover
        else{
            if (transparency != 1.0) {
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
        }


        // Calls and passes variables to jquery.scroll.pack.js which finds the created button and applies the scrolling rules.
        $("#STTBimg").scrollToTop({speed:speed, ease:scroll, start:distance, stbb:stbb, flipDistance:flipDistance, transparency:transparency, direction:"up"});
        $("#STTBimg2").scrollToTop({speed:speed2, ease:scroll, start:distance, stbb:stbb, flipDistance:flipDistance, transparency:transparency, direction:"down"});

        //Adds keyboard commands using shortcut.js
        shortcut.add("Alt+B", function() {
            DOWN(speed2, scroll);
        });
        shortcut.add("Alt+T", function() {
            UP(speed, scroll);
        });
        shortcut.add("End", function() {
            DOWN(speed2, scroll);
        },{
            'disable_in_input':true
        });
        shortcut.add("Home", function() {
            UP(speed, scroll);
        },{
            'disable_in_input':true
        });
    });
};
