$(document).ready(function() {
  $("#questionnaire").submit(function(event) {
    var q1 = $("#company").val();
    var q2 = $("#working-end").val();
    var q5 = $("#ready").val();


    if (q1 == 0 || q2 == 0 || q5 == 0 || q5 == 2) {
      alert("Please re-read each question carefully. There is a mistake with at least one of your answers.");
    }
    else if (q1 == 1 && q2 == 2) {
      $("#java").fadeIn();
    }
    else if (q1 == 2 && q2 == 1) {
      $("#java").fadeIn();
    }
    else if (q1 == 3 && q2 == 1) {
      $("#java").fadeIn();
    }
    else if (q1 == 3 && q2 == 3) {
      $("#java").fadeIn();
    }
    else if (q1 == 2 && q2 == 2) {
      $("#ruby").fadeIn();
    }
    else if (q1 == 3 && q2 == 2) {
      $("#ruby").fadeIn();
    }
    else if (q1 == 1 && q2 == 1) {
      $("#c").fadeIn();
    }
    else if (q1 == 2 && q2 == 3) {
      $("#c").fadeIn();
    }
    else {
      alert("error");
    }


    event.preventDefault();
  });
});
