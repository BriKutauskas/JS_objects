// function returnObject(username,pws){
//
//   userId != password;
//   userId.length >= 6 && user.password >= 6;
//   !userId.includes("!") && !userId.includes("#") && !userId.includes("$");
//   password.includes("!") && password.includes('#') && password.includes('$') && !password.includes("password");
//
  // function checkId (id)
  //   {
  //     return id.length >= 6 && !id.includes("!") && !id.includes("#") && !id.includes("$");
  //   }
  //
  // function checkPass (pw)
  //   {
  //     var reg = new RegExp('[0-9]');
  //     return pw.length >= 6 && (pw.includes("!") || pw.includes('#') || pw.includes('$')) && !pw.includes("password") && (reg.test(pw));
  //   }
  //
  // function credentials (user, pass)
  //   {
  //     user != pass
  //     return returnObFalse.reason1;
  //     return checkId(user) && checkPass(pass);
  //   }
  //
  // function validate ()
  //   {
  //     userId = prompt("Type in a username. Must be 6 or more characters and not include these: !#$");
  //     password = prompt("Type in a password. It can't be the same as the user name, and it must be 6 or more characters and include one of these: !#$");
  //     return checkId(userId) && checkPass(password);
  //   }
  // validate();


function passwordChecker(userId, password){
  var user = prompt("Please enter in a username");
  var pass = prompt("Please enter a password");
  function returnObTrue(username,pws){
    return{
      valid: true
    }
  }
  var obFalse = {
      valid: false,
      reason1: "User ID cannot be the same as your password",
      reason2: "Password doesn't contain !",
      reason3: "Password doesn't contain #",
      reason4: "Password doesn't contain $",
      reason5: "Password doesn't contain 6 or more characters",
      reason6: "Password doesn't contain a number",
      reason7: "User ID does contain !",
      reason8: "User ID does contain #",
      reason9: "User ID does contain $",
      reason10: "User ID doesn't contain 6 or more characters",
    }
  if (user === pass) {
    var ob = {valid: obFalse.valid, reason: obFalse.reason1};
    return ob;
  } else if (pass !== "!") {
    var ob1 = {valid: obFalse.valid, reason: obFalse.reason2};
    return ob1;
  } else if (pass !== "#") {
    var ob2 = {valid: obFalse.valid, reason: obFalse.reason3};
    return ob2;
} else if (pass !== "$") {
  var ob3 = {valid: obFalse.valid, reason: obFalse.reason4};
  return ob3;
} else if (pass.length >= 6) {
  var ob4 = {valid: obFalse.valid, reason: obFalse.reason5};
  return ob4;
} else if (user === "!") {
  var ob5 = {valid: obFalse.valid, reason: obFalse.reason6};
  return ob5;
} else if (user === "#") {
  var ob6 = {valid: obFalse.valid, reason: obFalse.reason7};
  return ob6;
} else if (user === "$") {
  var ob7 = {valid: obFalse.valid, reason: obFalse.reason8};
  return ob7;
} else if (user.length >= 6) {
  var ob8 = {valid: obFalse.valid, reason: obFalse.reason9};
  return ob8;
} else if (user.length >= 6) {
  var ob9 = {valid: obFalse.valid, reason: obFalse.reason10};
  return ob9;
passwordChecker();
