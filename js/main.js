
$(function () {
  /*-------------------------------
  ハンバーガーメニュー
  ---------------------------------*/
  $("#header .hamburger").click(function () {
    $(this).toggleClass("active");
    $("#header .navi").toggleClass("active");
    $("body").toggleClass("active");
  });

  $("#header .navi a").click(function () {
    $(this).removeClass("active");
    $("#header .hamburger").removeClass("active");
    $("body").removeClass("active");
  });

});


// fadein


$(function () {
  $(".fadein, .fade-section, .fade-img, .fade-img2, .fade-text").on("inview", function () {
    $(this).addClass("inview");
  });
});

