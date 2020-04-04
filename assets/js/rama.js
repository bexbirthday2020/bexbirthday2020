$(document).ready(function() {
    console.log('Hellow')
    $("html").click(function()
    {
        $(".page").css("display","block");
    });
  document.addEventListener('keydown',function(event)
  {
        console.log(event.keyCode);
        if(event.keyCode == 13)
        {
            if($("#inp").val() == "7 nation army" || $("#inp").val() == "seven nation army" || $("#inp").val()== "Seven nation army")
            {
                location.replace("./arlan.html")
            }
            else
            {
                alert("incorrect key");
            }
        }
  });
});