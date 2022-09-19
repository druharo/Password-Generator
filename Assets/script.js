var generateBtn = document.querySelector("#generate");

function generateLc() {
  const lc = "abcdefghijklmnopqrstuvwxyz";
  let x = Math.random() * 25;
  return lc.charAt(x);
}

function generateUc() {
  const uc = "ABCDEFGHIJKLMOPQRSTUVWXYZ";
  let x = Math.random() * 25;
  return uc.charAt(x);
}

function generateNum() {
  const num = "0123456789";
  let x = Math.random() * 9;
  return num.charAt(x);
}

function generateSpe() {
  const spe = "+-=_`~!@#$%^&*()[]{};:><?/,.";
  let x = Math.random() * 29;
  return spe.charAt(x);
}

function generatePassword() {
  let length = prompt("How long should the password be?", "8");

  // checks
  if (length >= 8 || length <= 128) {

    let confirm_lc = prompt("Should the password include lowercase?", "y");
    let confirm_uc = prompt("Should the password include uppercase?", "y");
    let confirm_num = prompt("Should the password include numeric?", "y");
    let confirm_spe = prompt("Should the password include special characters", "y");

    let pass = "";

    for (let i = 0; i < length; i++) {
      if (confirm_lc == "y") {
        let generatedLc = generateLc();
        pass = pass + generatedLc;
      }
      // check the length of pass, and return if it >= length
      if (pass.length >= length) {
        return pass;
      }


      if (confirm_uc == "y") {
        let generatedUc = generateUc();
        pass = pass + generatedUc;
      }
      // check the length of pass, and return if it >= length
      if (pass.length >= length) {
        return pass;
      }

      if (confirm_num == "y") {
        let generatedNum = generateNum();
        pass = pass + generatedNum;
      }
      // check the length of pass, and return if it >= length
      if (pass.length >= length) {
        return pass;
      }

      if (confirm_spe == "y") {
        let generatedSpe = generateSpe();
        pass = pass + generatedSpe;
      }
      // check the length of pass, and return if it >= length
      if (pass.length >= length) {
        return pass;
      }
    }

    console.debug(pass);

    return pass;

  } else {
    alert("Error in length of password. Should be >=8 and <= 128 characters long");
  }
  return null;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);