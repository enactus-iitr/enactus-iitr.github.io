$(document).ready(function(){
  addEventListener("load", function() {
    setTimeout(hideURLbar, 0);
  }, false);

  function hideURLbar() {
    window.scrollTo(0, 1);
  };
  $(".se-pre-con").fadeOut(500);

  $(".button-collapse").sideNav();
});
