$(document).ready(function() {
  $("#questionnaire").submit(function(event) {
    var q1 = $("#company").val();
    var q2 = $("#working-end").val();
    var q5 = $("#ready").val();

    if (q1 == 0 || q2 == 0 || q5 == 0 || q5 == 2) {
      alert("Please re-read each question carefully. There is a mistake with at least one of your answers.");
    }
    else if (q1 == 1 && q2 == 1) {
      $("#java").fadeOut();
      $("#ruby").fadeOut();
      $("#c").fadeIn();
    }
    else if (q1 == 1 && q2 == 2) {
      $("#c").fadeOut();
      $("#ruby").fadeOut();
      $("#java").fadeIn();
    }
    else if (q1 == 1 && q2 == 3) {
      $("#java").fadeOut();
      $("#ruby").fadeOut();
      $("#c").fadeIn();
    }
    else if (q1 == 2 && q2 == 1) {
      $("#c").fadeOut();
      $("#ruby").fadeOut();
      $("#java").fadeIn();
    }
    else if (q1 == 2 && q2 == 2) {
      $("#c").fadeOut();
      $("#java").fadeOut();
      $("#ruby").fadeIn();
    }
    else if (q1 == 2 && q2 == 3) {
      $("#java").fadeOut();
      $("#ruby").fadeOut();
      $("#c").fadeIn();
    }
    else if (q1 == 3 && q2 == 1) {
      $("#c").fadeOut();
      $("#ruby").fadeOut();
      $("#java").fadeIn();
    }
    else if (q1 == 3 && q2 == 2) {
      $("#c").fadeOut();
      $("#java").fadeOut();
      $("#ruby").fadeIn();
    }
    else if (q1 == 3 && q2 == 3) {
      $("#c").fadeOut();
      $("#ruby").fadeOut();
      $("#java").fadeIn();
    }
    else {
      alert("error");
    }
    event.preventDefault();
  });

  $("#refresh").submit(function(event) {
    event.preventDefault();
    $("#c").fadeOut();
    $("#java").fadeOut();
    $("#ruby").fadeOut();
  });
});
