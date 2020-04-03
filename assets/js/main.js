"use strict";
$(document).ready(function() {
    console.log('Hellow')
    $('#main').text("Hellow");
    var i = 0;
var text = ["Congratulations!", "You are 18 now!", "We have prepared for you a quest from Chiki company", "Just click anywhere to start"];
    $("html").click(function(){
        if(i == text.length)
        {
            location.replace("./hub.html")
        }
        setTimeout(function(){$("#main").fadeOut(500)}, 0);
        setTimeout(function(){$('#main').text(text[i]); i++}, 500);
        setTimeout(function(){$("#main").fadeIn(500)}, 600);
    })
  
});