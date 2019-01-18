$(document).ready(function() {
  $("#questionnaire").submit(function(event) {
$(".click").click(function() {
    $("#codes-showing").fadeIn();
    $("#codes-hiding").fadeOut();
  });

    var q1 = $("#company").val();

    var q2 = $("#working-end").val();

    var q3 = $("#comfortable").val();


    var answer = function() {
      if ((q1 == 0) && (q2 == 0) && (q3 == 0)) {
        return ".C";
      }
      else if ((q1 == 1) && (q2 == 0) && (q3 == 0)) {
        return "works";
        $((q1 == 1) && (q2 == 0) && (q3 == 0)) {
      }
      else if ((q1 == 2) && (q2 == 0) && (q3 == 0)) {
        return "works";
      }
      else if ((q1 == 3) && (q2 == 0) && (q3 == 0)) {
        return "works";
      }
      else if ((q1 == 4) && (q2 == 0) && (q3 == 0)) {
        return "works";
      }
      else if ((q1 == 0) && (q2 == 1) && (q3 == 0)) {
        return "works";
      }
      else if ((q1 == 0) && (q2 == 2) && (q3 == 0)) {
        return "works";
      }
      else if ((q1 == 0) && (q2 == 3) && (q3 == 0)) {
          return "works";
      }
      else if ((q1 == 0) && (q2 == 4) && (q3 == 0)) {
          return "works";
      }
      else if ((q1 == 0) && (q2 == 0) && (q3 == 1)) {
          return "works";
      }
      else if ((q1 == 0) && (q2 == 0) && (q3 == 2)) {
          return "works";
      }
      else if ((q1 == 0) && (q2 == 0) && (q3 == 3)) {
          return "works";
      }
      else if ((q1 == 0) && (q2 == 0) && (q3 == 4)) {
          return "works";
      }
      else if ((q1 == 1) && (q2 == 1) && (q3 == 0)) {
          return "works";
      }
      else if ((q1 == 2) && (q2 == 2) && (q3 == 0)) {
          return "works";
      }
      else if ((q1 == 3) && (q2 == 3) && (q3 == 0)) {
          return "works";
      }
      else if ((q1 == 4) && (q2 == 4) && (q3 == 0)) {
          return "works";
      }
      else if ((q1 == 1) && (q2 == 0) && (q3 == 1)) {
          return "works";
      }
      else if ((q1 == 2) && (q2 == 0) && (q3 == 2)) {
          return "works";
      }
      else if ((q1 == 3) && (q2 == 0) && (q3 == 3)) {
          return "works";
      }
      else if ((q1 == 4) && (q2 == 0) && (q3 == 4)) {
          return "works";
      }
      else if ((q1 == 0) && (q2 == 1) && (q3 == 1)) {
          return "works";
      }
      else if ((q1 == 0) && (q2 == 2) && (q3 == 2)) {
          return "works";
      }
      else if ((q1 == 0) && (q2 == 3) && (q3 == 3)) {
          return "works";
      }
      else if ((q1 == 2) && (q2 == 4) && (q3 == 4)) {
          return "works";
      }
      else if ((q1 == 1) && (q2 == 1) && (q3 == 1)) {
          return "works";
      }
      else if ((q1 == 2) && (q2 == 2) && (q3 == 2)) {
          return "works";

      }
      else if ((q1 == 3) && (q2 == 3) && (q3 == 3)) {
          return "works";
      }
      else if ((q1 == 4) && (q2 == 4) && (q3 == 4)) {
          return "works";
      }
      else {
        return "error";
      }
    };




    alert("answer");
    event.preventDefault();
  });
});
