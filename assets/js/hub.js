$(document).ready(function() {
    console.log('Hellow')
    //миллисекунды зацикливания вызова функции ниже
  setInterval (blinke_funk, 150);

  function blinke_funk() { 
      var blinke_speed = 500; //миллисекунды анимации

      $(".footer").fadeIn(blinke_speed).fadeOut(blinke_speed);
    //   $(".footer").fadeIn(blinke_speed).fadeOut(blinke_speed);
  }

  document.addEventListener('keydown',function(event)
  {
        console.log(event.keyCode);
        if(event.keyCode == 13)
        {
            console.log("nextpage.");
            location.replace("./table1.html");
        }
  });
});