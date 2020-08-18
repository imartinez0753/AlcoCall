function DOBuserInfo() {
  var DOB = $("<div>");
  DOB.addClass("form-group");
  var DOBLable = $("<lable>");
  DOBLable.attr("for", "DOB");
  DOBLable.text("Date of birth");
  var DOBInput = $("<input>");
  DOBInput.attr({ input: "date", id: "DOB" });
  DOBInput.addClass("form-control");
  $("#form").append(DOB);
  $("#form").append(DOBLable);
  $("#form").append(DOBInput);
}
function userNameInfo() {
  var userName = $("<div>");
  userName.addClass("form-group");
  var userNameLable = $("<lable>");
  userNameLable.attr("for", "userName");
  userNameLable.text("User Name");
  var userNameInput = $("<input>");
  userNameInput.attr({ input: "userName", id: "userName" });
  userNameInput.addClass("form-control");
  $("#form").append(userName);
  $("#form").append(userNameLable);
  $("#form").append(userNameInput);
}
function submit() {
  var submitBtn = $("<button>");
  submitBtn.attr({ type: "submit", id: "submit" });
  submitBtn.addClass("btn btn-primary");
  submitBtn.text("Submit");
  $("#form").append(submitBtn);
}
function passwordInfo() {
  var password = $("<div>");
  password.addClass("form-group");
  var passwordLable = $("<lable>");
  passwordLable.attr("for", "password");
  passwordLable.text("password");
  var passwordInput = $("<input>");
  passwordInput.attr({ type: "password", id: "password" });
  passwordInput.addClass("form-control");
  $("#form").append(password);
  $("#form").append(passwordLable);
  $("#form").append(passwordInput);
}
$(document).ready(function () {
  $(".dropdown-item").on("click", function () {
    if ($(this).text() === "sign up") {
      console.log("signUp");
      $("#form").empty();
      userNameInfo();
      passwordInfo();
      DOBuserInfo();
      submit();
    } else {
      $("#form").empty();
      userNameInfo();
      passwordInfo();
      submit();
    }
  });
  $("#submit").on("click", function (event) {
    console.log("submit");
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log(moment($("#DOB").val().trim(), "YYYY-MM-DD", true).isValid());
    console.log($("#DOB").val().trim());
    var ageCheck = moment().diff($("#DOB").val().trim(), "years");
    var newUserName = {
      userName: $("#userName").val().trim(),
      DOB: $("#DOB").val().trim(),
      password: $("#password").val().trim()
    };
    //===================================================
    console.log("logged in as " + " " + $("#userName").val().trim());
    $.ajax("/api/userInfo", {
      type: "POST",
      data: newUserName
    }).then(function () {
      console.log("logged in as " + " " + $("#userName").val().trim());
      console.log(moment($("#DOB").val().trim(), "YYYYMMDD").fromNow());
      console.log(moment().diff($("#DOB").val().trim(), "years"));
    });
  });
});
