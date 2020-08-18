function signUp() {
  //divs ===============================================================
  var userName = $("<div>");
  var password = $("<div>");
  var DOB = $("<div>");
  // Classes ===========================================================
  password.addClass("form-group");
  DOB.addClass("form-group");
  userName.addClass("form-group");
  //labels =============================================================
  var userNameLable = $("<lable>");
  userNameLable.attr("for", "userName");
  userNameLable.text("User Name");
  //---------------
  var passwordLable = $("<lable>");
  passwordLable.attr("for", "password");
  passwordLable.text("password");
  //-------------------------------
  var DOBLable = $("<lable>");
  DOBLable.attr("for", "DOB");
  DOBLable.text("Date of birth");
  //input ===============================================================
  var userNameInput = $("<input>");
  userNameInput.attr({ input: "userName", id: "userName" });
  userNameInput.addClass("form-control");
  //--------------------------------
  var passwordInput = $("<input>");
  passwordInput.attr({ type: "password", id: "password" });
  passwordInput.addClass("form-control");
  //--------------------------------
  var DOBInput = $("<input>");
  DOBInput.attr({ input: "date", id: "DOB" });
  DOBInput.addClass("form-control");
  //=====================================================================
  //button===============================================================
  var submitBtn = $("<button>");
  submitBtn.attr({ type: "submit", id: "submit" });
  submitBtn.addClass("btn btn-primary");
  submitBtn.text("Submit");
  //=====================================================================
  $("#form").empty();
  $("#form").append(userName);
  $("#form").append(userNameLable);
  $("#form").append(userNameInput);
  $("#form").append(password);
  $("#form").append(passwordLable);
  $("#form").append(passwordInput);
  $("#form").append(DOB);
  $("#form").append(DOBLable);
  $("#form").append(DOBInput);
  $("#form").append(submitBtn);
}
function signIn() {
  var userName = $("<div>");
  var password = $("<div>");
  var DOB = $("<div>");
  // Classes ===========================================================
  password.addClass("form-group");
  DOB.addClass("form-group");
  userName.addClass("form-group");
  //labels =============================================================
  var userNameLable = $("<lable>");
  userNameLable.attr("for", "userName");
  userNameLable.text("User Name");
  //---------------
  var passwordLable = $("<lable>");
  passwordLable.attr("for", "password");
  passwordLable.text("password");
  //-------------------------------
  var DOBLable = $("<lable>");
  DOBLable.attr("for", "DOB");
  DOBLable.text("Date of birth");
  //input ===============================================================
  var userNameInput = $("<input>");
  userNameInput.attr({ input: "userName", id: "userName" });
  userNameInput.addClass("form-control");
  //--------------------------------
  var passwordInput = $("<input>");
  passwordInput.attr({ type: "password", id: "password" });
  passwordInput.addClass("form-control");
  //--------------------------------
  var DOBInput = $("<input>");
  DOBInput.attr({ input: "date", id: "DOB" });
  DOBInput.addClass("form-control");
  //=====================================================================
  //button===============================================================
  var submitBtn = $("<button>");
  submitBtn.attr({ type: "submit", id: "submit" });
  submitBtn.addClass("btn btn-primary");
  submitBtn.text("Submit");
  $("#form").empty();
  $("#form").append(userName);
  $("#form").append(userNameLable);
  $("#form").append(userNameInput);
  $("#form").append(password);
  $("#form").append(passwordLable);
  $("#form").append(passwordInput);
  $("#form").append(submitBtn);
  console.log("signIn");
}

//=====================================================================================================
$(document).ready(function () {
  $(".dropdown-item").on("click", function () {
    if ($(this).text() === "sign up") {
      console.log("signUp");
      signUp();
    } else {
      signIn();
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
