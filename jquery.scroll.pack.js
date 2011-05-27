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
*
* Modified for Scroll to Top Button by Cody Sherman
* http://scrolltotopbutton.com/
* http://codysherman.com/
*
* Modified for version 5.0.2
-----------------------*/
// Functions for going either UP or DOWN
function UP(speed,ease){
    $("html, body").animate({scrollTop:"0"},speed,ease,function() {inProgress="no"});
}
function DOWN(speed,ease){
    $("html, body").animate({scrollTop:$(document).height()},speed,ease,function() {inProgress="no"});
}

// Craig's Scroll to Top Plugin with modifications
(function($){
    $.fn.extend({
        scrollToTop:function(options){

            var defaults={speed:"slow",ease:"jswing",start:0}

            var options=$.extend(defaults,options);

            return this.each(function(){
        
                var o=options;var scrollDiv=$(this);

                $(this).hide().removeAttr("href").css("cursor","pointer");

                // Allows the button to change directions when in "Flip" mode on page load
                if(o.stbb=="flip"){
                    if($(window).scrollTop()>=o.flipDistance){
                        $("#STTBimg").rotate({animateTo:0});
                        o.direction="up";
                    };

                    if($(window).scrollTop()<"200"){
                        $("#STTBimg").rotate({animateTo:-180});
                        o.direction="down";
                    };
                };

                // Checks whether button should be visable at page load
                if($(window).scrollTop()>=o.start){
                    $(this).fadeIn("slow");
                }
                
                // Checks whether button should be visable/flipped on scroll
                $(window).scroll(function(){
                    if($(window).scrollTop()>=o.start){
                        $(scrollDiv).fadeIn("slow");
                    }else{
                        $(scrollDiv).fadeOut("slow");
                    }

                    if(o.stbb=="flip"){
                        if($(window).scrollTop()>=o.flipDistance){
                            $("#STTBimg").rotate({animateTo:0});
                            o.direction="up";
                        };

                        if($(window).scrollTop()<o.flipDistance){
                            $("#STTBimg").rotate({animateTo:-180});
                            o.direction="down";
                        };
                    };
                });

                inProgress="no";
            
                //Rules specific to the button when it is bi-directional
                if((o.stbb=="flip") || (o.stbb=="dual")){
                    scrollDiv.click(function(event){
                    
                        // Stops the scrolling if button is clicked a second time.
                        if(inProgress=="yes"){
                            $("html, body").stop();
                            inProgress="no";
                        }

                        // Runs the proper scroll direction function
                        else if(o.direction=="up"){
                            inProgress="yes";
                            speed=o.speed;
                            ease=o.ease;
                            UP(speed,ease);
                            if((o.transparency=="0.0")&&(o.stbb=="dual")){
                                $(this).fadeTo("medium", 0.5);
                            }
                            else{
                                $(this).fadeTo("medium", o.transparency);
                            }
                        }
                    
                        else if(o.direction=="down"){
                            inProgress="yes";
                            speed=o.speed;
                            ease=o.ease;
                            DOWN(speed,ease);
                            if((o.transparency=="0.0")&&(o.stbb=="dual")){
                                $(this).fadeTo("medium", 0.5);
                            }
                            else{
                                $(this).fadeTo("medium", o.transparency);
                            }
                        }
                    })
                }

                // Sets up the scrolling rules when in only Scroll to Top mode
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
})
(jQuery);
