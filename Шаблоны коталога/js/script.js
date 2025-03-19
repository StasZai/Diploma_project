new Swiper('.product-wrapper', {
    loop: false,
    slidesPerView: 5,
    spaceBetween: 26,   // Растояние
  
    // Paggination bullets  // Точки
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      // dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints   // Расположение слайдов
    /*breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }*/
  });