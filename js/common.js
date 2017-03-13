$(window).scroll(function (){
  var st = $(this).scrollTop();

  $("#about").css ({
    "transform" : "translate(0%, " + st + "%"
  })
})