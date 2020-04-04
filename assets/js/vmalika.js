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
            if($("#inp").val() == "BEXLOH" || $("#inp").val() == "bexloh" || $("#inp").val()== "Bexloh")
            {
                location.replace("./zhenya.html")
            }
            else
            {
                alert("incorrect key");
            }
        }
  });
});