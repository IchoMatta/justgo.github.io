$(document).ready(function () {
  $(".btn-next").on("click", function () {
    var currImg = $(".active");
    var nextImg = currImg.next();

    if (nextImg.length) {
      currImg.removeClass("active").css("z-index", -10);
      nextImg.addClass("active").css("z-index", 10);
    } else {
      currImg.removeClass("active").css("z-index", -10);
      $(".image-slider #img:first-child").addClass("active").css("z-index", 10);
    }
  });

  $(".btn-prev").on("click", function () {
    var currImg = $(".active");
    var prevImg = currImg.prev();

    if (prevImg.length) {
      currImg.removeClass("active").css("z-index", -10);
      prevImg.addClass("active").css("z-index", 10);
    } else {
      currImg.removeClass("active").css("z-index", -10);
      $(".image-slider #img:last-child").addClass("active").css("z-index", 10);
    }
  });
});

function dropdownMenu() {
  document.querySelector(".dropdown-list").classList.toggle("show");
}
function screenshotMenu() {
  document.querySelector(".screenshot-list").classList.toggle("show");
}
function subMenu() {
  document.querySelector(".submenu-list").classList.toggle("show");
}

window.onclick = function (e) {
  if (!e.target.matches(".dropBtn") && !e.target.matches(".subBtn")) {
    var dropdownList = document.querySelector(".dropdown-list");
    if (dropdownList.classList.contains("show")) {
      dropdownList.classList.remove("show");
    }
  }
};

function goScreenshot() {
  window.location.href = "html/screenshot.html";
}

function validateForm() {
  var form = document.getElementById("registration-form");
  var username = form.username.value;
  var fullname = form.fullname.value;
  var email = form.email.value;
  var password = form.password.value;
  var address = form.address.value;

  var isValid = true;

  // Validasi username
  var usernameError = document.getElementById("username-error");
  var usernameErrorIcon = document.getElementById("username-error-icon");
  if (username === "") {
    usernameError.textContent = "Please fill out this field";
    usernameErrorIcon.classList.remove("hidden");
    isValid = false;
  } else if (username.length < 4 || username.length > 20) {
    usernameError.textContent = "Username must be 4 to 20 characters";
    usernameErrorIcon.classList.remove("hidden");
    isValid = false;
  } else {
    usernameError.textContent = "";
    usernameErrorIcon.classList.add("hidden");
  }

  // Validasi fullname
  var fullnameError = document.getElementById("fullname-error");
  var fullnameErrorIcon = document.getElementById("fullname-error-icon");
  if (fullname === "") {
    fullnameError.textContent = "Please fill out this field";
    fullnameErrorIcon.classList.remove("hidden");
    isValid = false;
  } else if (fullname.length < 2 || fullname.length > 50) {
    fullnameError.textContent = "Fullname must be 2 to 50 characters";
    isValid = false;
    fullnameErrorIcon.classList.remove("hidden");
  } else if (!isValidFullnameCharacters(fullname)) {
    fullnameError.textContent = "Fullname alphabets only";
    isValid = false;
    fullnameErrorIcon.classList.remove("hidden");
  } else {
    fullnameError.textContent = "";
    fullnameErrorIcon.classList.add("hidden");
  }

  // Validasi email
  var emailError = document.getElementById("email-error");
  var emailErrorIcon = document.getElementById("email-error-icon");
  if (email === "") {
    emailError.textContent = "Please fill out this field";
    isValid = false;
    emailErrorIcon.classList.remove("hidden");
  } else if (
    email.indexOf("@gmail.com") === -1 &&
    email.indexOf("@binus.edu") === -1
  ) {
    emailError.textContent = "Email must be in @gmail.com or @binus.edu";
    isValid = false;
    emailErrorIcon.classList.remove("hidden");
  } else {
    emailError.textContent = "";
    emailErrorIcon.classList.add("hidden");
  }

  // Validasi password
  var passwordError = document.getElementById("password-error");
  var passwordErrorIcon = document.getElementById("password-error-icon");
  if (password === "") {
    passwordError.textContent = "Please fill out this field";
    isValid = false;
    passwordErrorIcon.classList.remove("hidden");
  } else if (password.length < 8) {
    passwordError.textContent = "The password must be at least 8 characters";
    isValid = false;
    passwordErrorIcon.classList.remove("hidden");
  } else if (!hasNumber(password)) {
    passwordError.textContent = "Password must contain number";
    isValid = false;
    passwordErrorIcon.classList.remove("hidden");
  } else {
    passwordError.textContent = "";
    passwordErrorIcon.classList.add("hidden");
  }

  // Validasi address
  var addressError = document.getElementById("address-error");
  var addressErrorIcon = document.getElementById("address-error-icon");
  var wordCount = countWords(address);
  if (address === "") {
    addressError.textContent = "Please fill out this field";
    isValid = false;
    addressErrorIcon.classList.remove("hidden");
  } else if (wordCount > 20) {
    addressError.textContent = "Address must be less than 20 words";
    isValid = false;
    addressErrorIcon.classList.remove("hidden");
  } else {
    addressError.textContent = "";
    addressErrorIcon.classList.add("hidden");
  }

  if (isValid) {
    form.reset();
    window.location.href = "joinus.html";
  }
  return false;
}

function hasNumber(input) {
  for (var i = 0; i < input.length; i++) {
    if (isNumeric(input.charAt(i))) {
      return true;
    }
  }
  return false;
}

function isNumeric(char) {
  return "0123456789".indexOf(char) !== -1;
}

function countWords(text) {
  var words = text.trim().split(" ");
  var count = 0;
  for (var i = 0; i < words.length; i++) {
    if (words[i] !== "") {
      count++;
    }
  }
  return count;
}

function isValidFullnameCharacters(fullname) {
  var invalidCharacters = "~!@#$%^&*()+={}[]|;:',.<>?/1234567890";
  for (var i = 0; i < invalidCharacters.length; i++) {
    if (fullname.indexOf(invalidCharacters[i]) !== -1) {
      return false;
    }
  }
  return true;
}
