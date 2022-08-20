$('.menu-btn').click((e) => {
  $('.menu-btn__burger').toggleClass('open')
  $('.menu-nav').toggleClass('open')
  $('.nav').toggleClass('open')
  $('.menu-nav__item').toggleClass('open')
});