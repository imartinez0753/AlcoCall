$(document).ready(function () {
  $("#submit").on("click", function (event) {
    console.log("submit");
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newUserName = {
      userName: $("#userName").val().trim(),
      DOB: $("#DOB").val().trim(),
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
