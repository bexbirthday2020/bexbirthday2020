console.log('Hellw');
$(document).ready(function() {
    $("html").click(function()
    {
        $(".page").css("display","block");
        $("#btn").click(function()
        {
            console.log('Submited');

            if($("#inp").val() == 'Never wanted to leave turcha' || $("#inp").val() == "never wanted to leave turcha")
            {
                console.log("Correct");
                location.replace("./vmalika.html")
            }
            else
            {
                alert("Incorrect");
            }
        })
    })
});