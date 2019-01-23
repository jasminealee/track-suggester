$(document).ready(function() {
  $("#questionnaire").submit(function(event) {
    var q2 = $("#working-end").val();
    var q3 = $("#ready").val();

    if (q2 == 0) {
      alert("works");
    } else {
      alert("false");
    }
    event.preventDefault();
  });
});
