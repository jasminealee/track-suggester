$(document).ready(function() {
  $("#questionnaire").submit(function(event) {
    var q2 = $("#working-end").val();
    var q5 = $("#ready").val();

    if (q1 == 0 || q2 == 0 || q5 == 0 || q5 == 2) {
      alert("Please reread carefully and answer all multiple choice questions.");
    }
    else if (q2 == 1) {
      alert("works1");
    }
    else if (q2 == 2) {
      alert("works2");
    }
    else if (q2 == 3) {
      alert("works3");
    }
    else if (q5 == 1) {
      alert("works4");
    }
    else if (q5 == 2) {
      alert("works4");
    }

    else {
      alert("error");
    }


    event.preventDefault();
  });
});
