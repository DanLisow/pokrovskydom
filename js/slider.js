document.addEventListener("DOMContentLoaded", () => {
  const gallerySlider = document.getElementById("gallery-slider");

  if (!gallerySlider) return;

  new Swiper(gallerySlider, {
    breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: getRem(8),
        speed: 700,
        pagination: {
          el: ".gallery__pagination",
          type: "progressbar",
        },
      },
      769: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: getRem(20),
        speed: 1000,
        pagination: {
          el: ".gallery__pagination",
          bulletClass: "gallery__pagination-item",
          bulletActiveClass: "dot-active",
        },
        navigation: {
          prevEl: "button.gallery__slider-button.prev-button",
          nextEl: "button.gallery__slider-button.next-button",
        },
      },
    },
  });

  function getRem(rem) {
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
  }
});
