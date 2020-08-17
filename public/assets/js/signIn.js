$(document).ready(function () {
  // $("select").on("change", function () {});
  $("#submit").on("click", function (event) {
    console.log("submit");
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log(moment($("#DOB").val().trim(), "YYYY-MM-DD", true).isValid());
    console.log($("#DOB").val().trim());
    var newUserName = {
      userName: $("#userName").val().trim(),
      DOB: function DOBChecker() {
        if (moment($("#DOB").val().trim(), "YYYY-MM-DD").isValid() === true) {
          return $("#DOB").val().trim();
        } else {
          prompt("date must be yyyy-mm-dd");
        }
      },
      password: $("#password").val().trim()
    };
    //===================================================
    console.log("logged in as " + " " + $("#userName").val().trim());
    // Send the POST request.
    $.ajax("/api/userInfo", {
      type: "POST",
      data: newUserName
    }).then(function () {
      console.log("logged in as " + " " + $("#userName").val().trim());
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
