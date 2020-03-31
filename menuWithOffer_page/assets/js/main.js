var swiper = new Swiper('.swiper-container', {
  effect: 'cube',
  grabCursor: true,
  cssMode: true,
  loop: true,
  clickable: true,
  clickableClass: 'swiper-pagination-clickable',
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.04,
  },

  pagination: '.swiper-pagination'
});

$(document).ready(function () {
  $("#customRadioInline1").click(function () {
    $(".custom-1").toggleClass("color");
  });
  $("#customRadioInline2").click(function () {
    $(".custom-2").toggleClass("color");
  });
});