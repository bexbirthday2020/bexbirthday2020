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
            if($("#inp").val() == "38/3")
            {
                location.replace("./sagi.html")
            }
            else
            {
                alert("incorrect key");
            }
        }
  });
});