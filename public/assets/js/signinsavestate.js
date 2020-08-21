{
  console.log("signIn");
  $("#form").empty();
  userNameInfo();
  passwordInfo();
  submit2();
  $("body").on("click", function (event) {
    if (event.target.matches("#submit2")) {
      event.preventDefault();
      console.log("submit");
      var newUserName = {
        userName: $("#userName").val().trim(),
        password: $("#password").val().trim()
      };

      $.get("/api", function (data) {
        if (newUserName.userName === "" || newUserName.password === "") {
          return alert("all fields must be filled out");
        }
        // console.log(data[0].userName);
        for (i = 0; i < data.length; i++) {
          if (
            data[i].userName === $("#userName").val().trim() &&
            data[i].password !== $("#password").val().trim()
          ) {
            prompt("incorrect username and password combination");
          } else {
            //render new html
          }
        }
      });
    }
  });
}
