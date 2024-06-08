const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 16,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "bullets",
  },

  breakpoints: {
    768: {
      enabled: false,
      spaceBetween: 24,
      autoHeight: false,
      slidesPerView: 3,
      slidesPerGroup: 3,
      slidesPerColumn: 2,
    },
  },
});



 const showMore = document.querySelector('.show-more__text');
 const showMoreImg = document.querySelector('.show-more__img');
 const showMoreContent = showMore.innerHTML;
 showMore.addEventListener('click', function () {

    if (showMore.innerHTML === 'Показать все') {
      document.querySelectorAll(".swiper-slide__768").forEach(el => el.style.display = 'flex');
      document.querySelectorAll(".swiper-slide__show1120").forEach(el => el.style.display = 'flex');
      showMore.innerHTML = 'Скрыть';
      showMoreImg.style.transform = 'scale(1, -1)';

    } else if (window.innerWidth >= 1016) {
      document.querySelectorAll(".swiper-slide__768").forEach(el => el.style.display = 'none');
      document.querySelectorAll(".swiper-slide__show1120").forEach(el => el.style.display = 'flex');
      showMore.innerHTML = 'Показать все';
      showMoreImg.style.transform = 'scale(1, 1)';

    } else if (window.innerWidth >= 768) {
      document.querySelectorAll(".swiper-slide__768").forEach(el => el.style.display = 'none');
      document.querySelectorAll(".swiper-slide__show1120").forEach(el => el.style.display = 'none');
      showMore.innerHTML = 'Показать все';
      showMoreImg.style.transform = 'scale(1, 1)';

    } else {
      document.querySelectorAll(".swiper-slide__768").forEach(el => el.style.display = 'none');
      document.querySelectorAll(".swiper-slide__show1120").forEach(el => el.style.display = 'flex');
      showMore.innerHTML = 'Показать все';
      showMoreImg.style.transform = 'scale(1, 1)';
    }
  });