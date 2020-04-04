$(document).ready(function() {
    console.log('Hellow')

  document.addEventListener('keydown',function(event)
  {
        console.log(event.keyCode);
        if(event.keyCode == 13)
        {
            if($("#inp").val() == "DONUT" || $("#inp").val() == "donut")
            {
                location.replace("./segiz.html")
            }
            else
            {
                alert("incorrect key");
            }
        }
  });
});