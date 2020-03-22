var swiper = new Swiper('.swiper-container', {
  effect: 'flip',
  grabCursor: true,
  cssMode: true,
  loop: true,
  clickable: true,
  clickableClass: 'swiper-pagination-clickable',
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  autoplay: 2000,
  pagination: '.swiper-pagination'
});