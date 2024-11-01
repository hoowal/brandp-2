// .search 버튼 클릭으로 searchbar 창 활성화
$(".search").click(function () {
  $("#search-menu").addClass("active");
  $("#nav-all").removeClass("active");
  $(".all-menu").removeClass("active");
  $(".2trans").removeClass("active");
  $(".2intro").removeClass("active");
  $(".2og").removeClass("active");
});

$(".search-back").click(function () {
  $("#search-menu").removeClass("active");
  $(".search-here").reset();
});

// .all-menu 클릭시 #nav-all에 active가 활성화 중이라면 비활성화,
// 비활성화 중이라면 활성화

$(".all-menu").click(function () {
  if ($("#nav-all").hasClass("active")) {
    $("#nav-all").removeClass("active");
    $(".all-menu").removeClass("active");
    $(".2intro").removeClass("active");
    $(".2trans").removeClass("active");
    $(".2og").removeClass("active");
  } else {
    $("#nav-all").addClass("active");
    $(".all-menu").addClass("active");
  }
});

// nav-all 닫기 버튼
$(".close").click(function () {
  $("#nav-all").removeClass("active");
  $(".all-menu").removeClass("active");
  $(".2intro").removeClass("active");
  $(".2trans").removeClass("active");
  $(".2og").removeClass("active");
});

// nav-all의 depth1 누르면 depth2 나오게
$(".1intro").click(function () {
  if ($(".2intro").hasClass("active")) {
    $(".2intro").removeClass("active");
  } else {
    $(".2intro").addClass("active");
  }
});

$(".1trans").click(function () {
  if ($(".2trans").hasClass("active")) {
    $(".2trans").removeClass("active");
  } else {
    $(".2trans").addClass("active");
  }
});

$(".1og").click(function () {
  if ($(".2og").hasClass("active")) {
    $(".2og").removeClass("active");
  } else {
    $(".2og").addClass("active");
  }
});

// gnb 마우스오버 색상변환
$("#gnb").mouseenter(function () {
  $("#header").addClass("active");
});

$("#gnb").mouseleave(function () {
  $("#header").removeClass("active");
});

// lang 버튼 활성,비활성
$(".lang__btn").click(function () {
  if ($(".lang").hasClass("active")) {
    $(".lang").removeClass("active");
    $(".lang__lst").hide();
  } else {
    $(".lang").addClass("active");
    $(".lang__lst").show();
  }
});

$(".lang__lst").click(function () {
  $(".lang").removeClass("active");
  $(".lang__lst").hide();
});
