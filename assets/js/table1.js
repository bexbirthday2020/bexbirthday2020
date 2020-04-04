console.log('Hellw');
$(document).ready(function() {
    $("html").click(function()
    {
        $(".page").css("display","block");
        $("#btn").click(function()
        {
            console.log('Submited');

            if($("#inp").val() == '2')
            {
                console.log("Correct");
                location.replace("./rama.html")
            }
            else
            {
                alert("Incorrect");
            }
        })
    })
});