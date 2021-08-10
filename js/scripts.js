$(document).ready(function() {
  $(".clickable").click(function() {
    $("#card-showing").toggle();
    $("#card-hidden").toggle();
  });
});