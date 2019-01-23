$(document).ready(function() {
  $("#questionnaire").submit(function(event) {
    var q2 = $("#working-end").val();
    var q5 = $("#ready").val();

    if (q2 == 0 || q5 == 0) {
      alert("works");
    } else {
      alert("Please answer all multiple choice questions.");
    }

    if (q2 == 1) {
      alert("works1");
    } else {
      alert("Question 5 must be answered as yes.");
    }

    if (q2 == 2) {
      alert("works2");
    } else {
      alert("Question 5 must be answered as yes.");
    }

    if (q2 == 3) {
      alert("works3");
    } else {
      alert("Question 5 must be answered as yes.");
    }

    if (q5 == 1) {
      alert("works4");
    } else {
      alert("Question 5 must be answered as yes.");
    }


    if (q5 == 2) {
      alert("works5");
    } else {
      alert("Question 5 must be answered as yes.");
    }


    event.preventDefault();
  });
});
