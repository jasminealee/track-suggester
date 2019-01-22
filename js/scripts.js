$(document).ready(function() {
  $("#questionnaire").submit(function(event) {
    var q1 = $("#company").val();
    var q2 = $("#working-end").val();
    var q3 = $("#comfortable").val();

    var answer = function() {
      if ((q1 == 0) || (q2 == 0) || (q3 == 0)) {
        alert("Error");
      }
      else if (q2 == 1) {
        return "works";
      }
      else if (q2 == 2) {
        return "works2";
      }
      else if (q2 == 3) {
        return "works3";
      }
      else {
        return "error";
      }
      return("answer");
    };
    event.preventDefault();
  });
});
