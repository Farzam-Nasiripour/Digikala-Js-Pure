function initSwiper_1() {
  const swiper = new Swiper(".mySwiper_1", {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // در صفحات بزرگتر از 768 پیکسل (تبلت و دسکتاپ)، ۳ کارت همزمان نشان بده
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
  });
}
function initSwiper_2() {
  const swiper = new Swiper(".mySwiper_2", {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // در صفحات بزرگتر از 768 پیکسل (تبلت و دسکتاپ)، ۳ کارت همزمان نشان بده
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },
  });
}
function initSwiper_3() {
  const swiper = new Swiper(".mySwiper_3", {
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

export { initSwiper_1, initSwiper_2, initSwiper_3 };
