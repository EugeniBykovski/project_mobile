import Swiper from "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js";

const swiper = new Swiper(".swiper", {
  loop: true,
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

export default swiper;
