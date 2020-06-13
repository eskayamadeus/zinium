var mySwiper = new Swiper ('.swiper-container', {
    slidesPerView: 1.5,
    spaceBetween: 10,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3.5,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 4.5,
        spaceBetween: 10,
      },
    },
    // without these, Swiper doesn't work inside collapsible
    observer: true, 
    observeParents: true,
    observeSlideChildren: true,
})