document.querySelector(".scroll-icon").addEventListener("click", function () {
  window.scrollBy({
    top: window.innerHeight,
    behavior: "smooth",
  });
});

var swiper2 = new Swiper(".mySwiper2", {
  effect: "cards",
  grabCursor: true,
  // autoHeight: true,
  // spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

AOS.init();

$(".page-skill .title").click(function () {
  $(this).addClass("active");
  $(this).siblings(".title").removeClass("active");
  $(this).siblings(".desc").stop().slideUp();
  $(this).next().stop().slideDown();
});

let $text = $(".text-rolling .text-rolling-wrap .title-rolling");
let $wrap = $(".text-rolling .text-rolling-wrap");

$text.clone().appendTo($wrap);

TweenMax.to($wrap, 30, {
  x: -$text.width(),
  ease: Linear.easeNone,
  repeat: -1,
});

let $subText = $(".text-rolling .text-rolling-wrap2 .sub-title-rolling");
let $subWrap = $(".text-rolling .text-rolling-wrap2 ");

$subText.clone().appendTo($subWrap);

TweenMax.set($subWrap, { x: -$subText.width() });

TweenMax.to($subWrap, 20, {
  x: 0,
  ease: Linear.easeNone,
  repeat: -1,
});

var swiper = new Swiper(".mySwiper3", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
