$(function () {
  "use strict";
  $(".tap-list li").click(function () {
    $(this).addClass("active").siblings("li").removeClass("active");
    $(".info-content div").hide();
    $("." + $(this).data("class")).show();
  });
});
