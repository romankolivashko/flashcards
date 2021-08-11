$(document).ready(function() {
  $(".content").click(function() {
    $(".card-showing").toggle();
    $(".card-hidden").toggle();
  });
});


// $(document).ready(function() {
//   $(".content").click(function() {
//     $(".card-showing").next().show();
//   });
// });


// $('.card-showing', '.card-hidden').on('click', function() {
//   $(this).hide();
//   $(this).siblings('.card-showing').show();
// });

// $(document).ready(function() {
// $( ".content" ).click(function() {
//   $(".card-showing").next().toggle;
//   });
// });
