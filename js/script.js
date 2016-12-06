$('.work img').mouseover(function() {
    $('.project_overlay').css("visibility","visible");
});

$('.work').mouseout(function() {
    $('.project_overlay').css("visibility","hidden");
});