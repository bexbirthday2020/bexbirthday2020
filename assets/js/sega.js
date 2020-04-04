"use strict";
$(document).ready(function() {
    console.log('Hellow');
    var i = 0;
var text = ["Congratulations!", "You are 18 now!", "There is last quest you haven't done yet", "Just click anywhere to start","What comes after the phrase", "Надейся на лучшее"];
    $("html").click(function(){
        if(i < 6)
        {
            if(i == 5)
            {
                $("body").css("background-color","skyblue");
                $("body").css("font-family", "'Comic Neue', cursive");
                $("body").css("color","white");
                $("input").css("display","block");
            }
            setTimeout(function(){$("#main").fadeOut(500)}, 0);
            setTimeout(function(){$('#main').text(text[i]); i++}, 500);
            setTimeout(function(){$("#main").fadeIn(500)}, 600);
        }
    })
    document.addEventListener('keydown',function(event)
    {
        console.log(event.keyCode);
        if(event.keyCode == 13)
        {
            if($("#inp").val() == "рассчитывай на худшее")
            {
                $("input").css("display","none");
                setTimeout(function(){$("#main").fadeOut(500)}, 0);
            setTimeout(function(){$('#main').text("Hurray! You have done your quest!");}, 500);
            setTimeout(function(){$("#main").fadeIn(500)}, 600);
            }
            else
            {
                alert("incorrect key");
            }
        }
    });
  
});