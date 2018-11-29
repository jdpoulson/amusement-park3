$(document).ready(function() {
  $("form#height").submit(function(event) {
    event.preventDefault();
    var height = parseInt($("#age").val());

    if ((height < 63) && (height > 60)) {
      $(".pirate-ship").show();
      $(".ferris-wheel").hide();
      $(".topple-tower").hide();
      $(".ufo").hide();
      $(".frisbee").hide();
      $(".helter-skelter").hide();
      $(".octopus").hide();
      $(".no-ride").hide();
    } else if ((height <= 60) && (height > 57)) {
      $(".pirate-ship").hide();
      $(".ferris-wheel").show();
      $(".topple-tower").hide();
      $(".helter-skelter").hide();
      $(".octopus").hide();
      $(".ufo").hide();
      $(".frisbee").hide();
      $(".no-ride").hide();
    } else if ((height <= 57) && (height > 54)) {
      $(".frisbee").show();
      $(".ferris-wheel").hide();
      $(".octopus").hide();
      $(".topple-tower").hide();
      $(".ufo").hide();
      $(".helter-skelter").hide();
      $(".pirate-ship").hide();
      $(".no-ride").hide();
    } else if ((height <= 54) && (height > 51)) {
      $(".topple-tower").show();
      $(".octopus").hide();
      $(".helter-skelter").hide();
      $(".ufo").hide();
      $(".frisbee").hide();
      $(".pirate-ship").hide();
      $(".ferris-wheel").hide();
      $(".no-ride").hide();
    } else if ((height <= 51) && (height > 48)) {
      $(".octopus").show();
      $(".ufo").hide();
      $(".helter-skelter").hide();
      $(".pirate-ship").hide();
      $(".topple-tower").hide();
      $(".ferris-wheel").hide();
      $(".frisbee").hide();
      $(".no-ride").hide();
    } else if ((height <= 48) && (height > 45)) {
      $(".ufo").show();
      $(".octopus").hide();
      $(".ferris-wheel").hide();
      $(".pirate-ship").hide();
      $(".helter-skelter").hide();
      $(".frisbee").hide();
      $(".topple-tower").hide();
      $(".no-ride").hide();
    } else if ((height <= 45) && (height > 42)) {
      $(".helter-skelter").show();
      $(".ferris-wheel").hide();
      $(".pirate-ship").hide();
      $(".topple-tower").hide();
      $(".frisbee").hide();
      $(".ufo").hide();
      $(".octopus").hide();
      $(".no-ride").hide();
    } else if (height >= 63) {
      $(".no-ride").show();
      $(".octopus").hide();
      $(".ufo").hide();
      $(".frisbee").hide();
      $(".pirate-ship").hide();
      $(".topple-tower").hide();
      $(".helter-skelter").hide();
      $(".ferriswheel").hide();
    }
  })
})
