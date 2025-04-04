const swiper = new Swiper('.swiper-container', {
    slidesPerView: 5, // Показываем 5 слайдов
    spaceBetween: 10, // Отступ между слайдам // Центрируем активный слайд
    loop: false, // Включаем бесконечный цикл
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
