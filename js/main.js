"use strict"
// Jquery
$(document).ready(function(){
  //nav(SNB)
  $("#SNB > ul > li").hover(function(){
    $(this).find(".SNB__sub").stop().fadeIn(150);
  },function(){
    $(this).find(".SNB__sub").stop().fadeOut(150);
  });

  // slide
  function slidemove(){
    let smv=$(".slide__box > div").width();
    $(".slide__box").animate({
      left:-smv
    },function(){
      $(".slide__box > div:first").appendTo(".slide__box");
      $(".slide__box").css({
        left:0
      });
    });
  }
  setInterval(slidemove, 3000);

  // pop
  $("#pop").hide();
  $("#notice ul li:first").click(function(){
    $("#pop").show();
  });
  $("#pop #popclose").click(function(){
    $("#pop").hide();
  });
  



});