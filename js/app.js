'use strict'

function winResized(){
  let size = $(window).width();
  if (size < 768 && size > 480){
    $(".nav").css( "background", "red" );
    $(".sub-nav").css( "background", "blue" );
    $(".top-tiles").css( "background", "green" );
    $(".bottom-tiles").css( "background", "yellow" );
    $(".footer").css( "background", "red" );
  } else {
    setTimeout("location.reload(true);",500)
  }
}

window.onresize = winResized;
