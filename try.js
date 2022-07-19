const $body = window.opera
    ? document.compatMode == "CSS1Compat"
      ? $("html")
      : $("body")
    : $("html,body"),
  $section = $("section");

var numOfPages = $section.length - 1, //取得section的數量
  curPage = 0, //初始頁
  scrollLock = false;

window.onload = () => {
  setTimeout(() => {
    $("#loadingPage").css("display", "none");
    $("#mainPage").css("display", "block");
  }, 100);
};
// 用3000

function scrollPage() {
  //滑鼠滾動
  $(document).on("mousewheel DOMMouseScroll", function (e) {
    if (scrollLock) return;
    if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0)
      navigateUp();
    else navigateDown();
  });
  //鍵盤上下鍵
  $(document).on("keydown", function (e) {
    if (scrollLock) return;
    if (e.which === 38) navigateUp();
    else if (e.which === 40) navigateDown();
  });
}

function pagination() {
  scrollLock = true;
  $body.stop().animate(
    {
      scrollTop: $section.eq(curPage).offset().top,
    },
    500,
    "swing",
    function () {
      scrollLock = false;
    }
  );
}

function navigateUp() {
  if (curPage === 0) return;
  curPage--;
  pagination();
}

function navigateDown() {
  if (curPage === numOfPages) return;
  curPage++;
  pagination();
}

$(function () {
  scrollPage();
});

// 第一頁特效
var percent = 0;

var timer = setInterval(function () {
  $(".bar").css("width", percent + "%");
  percent += 1;

  if (percent >= 100) {
    $(".pageLoading").addClass("complete");
    clearInterval(timer);
  }
}, 30);
// wow
new WOW().init();

// 找座標
// function getPosition (e) {
//   var t = e.offsetTop;
//   var l = e.offsetLeft;
//   while(e= e.offsetParent){
//     t+=e.offsetTop;
//     l+= e.offsetLeft;
//   }
//   return {left:l , top:t}
// }

// $('.wow8766').Offset();

// $('.wow8766').click(function (e) {
//         var posX = $(this).offset().left,
//             posY = $(this).offset().top;
//       console.log(posX+", "+posY)
//  });

$(document).ready(function () {
  $(".section4").click(function () {
    $(".sec4-a").animate({ left: "39%" });
  });

  $(".sec4-a").click(function () {
    $(".toggleimg-a").animate({ left: "35%" });
  });

});

$(document).ready(function () {
  $(".section4").click(function () {
    $(".sec4-b").animate({ left: "70%" });
  });

  $(".sec4-b").click(function () {
    $(".toggleimg-b").animate({ left: "66%" });
  });

});

$(document).ready(function () {
  $(".section4").click(function () {
    $(".sec4-c").animate({ left: "9%" });
  });
  $(".sec4-c").click(function () {
    $(".toggleimg-c").animate({ left: "4%" });
  });

});
// $(document).ready(function(){
//   $(".sec4-a").click(function(){
//     $(".toggleimg").toggleClass("toggleimgjq");
//   });
// });
