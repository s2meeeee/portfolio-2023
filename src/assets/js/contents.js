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
$(function () {
  // parallax scroll
  // add on library : "scroll trigger"
  gsap.registerPlugin(ScrollTrigger);

  let w = window.innerWidth - 60;
  if (w > 1410) w = 1410;
  const targetElement = document.querySelectorAll(".scroll-img");

  // Intersection Observer 생성
  const callback = (entries, observer) => {
    // console.log("entries", entries);
    entries.forEach((entry) => {
      // 요소가 화면에 진입한 경우
      if (entry.isIntersecting) {
        // 여기에 실행하고자 하는 자바스크립트 코드 작성
        console.log("실행");
        // 스크롤하면 이미지가 왼쪽으로 이동
        const imgWidth = $(".scroll-img .image-area").width();
        gsap.to(".scroll-img .bg-box", {
          scrollTrigger: {
            trigger: ".scroll-img",
            start: "bottom bottom",
            end: "top 100px",
            scrub: true,
            markers: false,
          },
          x: w - imgWidth,
          ease: "none",
          duration: 9,
        });

        //   unobserve = 구독 취소
        observer.unobserve(entry.target);
      }
      // 요소가 화면에서 사라졌을 때
      else {
        // ...
      }
    });
  };
  const options = {
    // root: document.querySelector('#scrollArea'),
    // rootMargin: '0px',
    // threshold: 1.0
  };
  const observer = new IntersectionObserver(callback, options);

  // observe = 구독
  targetElement.forEach((t) => observer.observe(t));
});
