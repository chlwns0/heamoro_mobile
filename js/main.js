$(document).ready(function () {
  // 슬릭 슬라이더 초기화
  $(".slick").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    arrows: false,
    draggable: true,
    fade: true,
  });

  // 스크롤 이벤트
  $(window).on("scroll", function () {
    // .desc 요소 스크롤 감지
    $(".desc").each(function () {
      var scrollTop = $(window).scrollTop();
      var elementTop = $(this).offset().top;
      var windowHeight = $(window).height();

      // .desc 요소가 화면에 보일 때 'active' 클래스를 추가
      if (scrollTop + windowHeight > elementTop) {
        $(this).addClass("active");
      } else {
        $(this).removeClass("active");
      }
    });

    // .slick 슬라이드 스크롤 감지
    $(".slick .slide").each(function () {
      var scrollTop = $(window).scrollTop();
      var elementTop = $(this).offset().top;
      var windowHeight = $(window).height();

      // .slide 요소가 화면에 보일 때 'active' 클래스를 추가
      if (scrollTop + windowHeight > elementTop) {
        $(this).addClass("active");
      } else {
        $(this).removeClass("active");
      }
    });

    // .
    $(".main_img").each(function () {
      var scrollTop = $(window).scrollTop();
      var elementTop = $(this).offset().top;
      var windowHeight = $(window).height();

      if (scrollTop + windowHeight > elementTop) {
        $(this).addClass("active");
      } else {
        $(this).removeClass("active");
      }
    });

    $(".info .txt").each(function () {
      var scrollTop = $(window).scrollTop();
      var elementTop = $(this).offset().top;
      var windowHeight = $(window).height();

      if (scrollTop + windowHeight > elementTop) {
        $(this).addClass("active");
      } else {
        $(this).removeClass("active");
      }
    });

    $(".contact .inner").each(function () {
      var scrollTop = $(window).scrollTop();
      var elementTop = $(this).offset().top;
      var windowHeight = $(window).height();

      if (scrollTop + windowHeight > elementTop) {
        $(this).addClass("active");
      } else {
        $(this).removeClass("active");
      }
    });
  });

  // 페이지 로드 시 한 번 실행하여 처음부터 활성화 상태 체크
  $(window).trigger("scroll");
});
