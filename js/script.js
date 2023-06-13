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

window.onclick = function (e) {
  if (!e.target.matches(".dropBtn")) {
    var dropdownList = document.querySelector(".dropdown-list");
    if (dropdownList.classList.contains("show")) {
      dropdownList.classList.remove("show");
    }
  }
};

function goScreenshot() {
  window.location.href = "/html/screenshot.html";
}
