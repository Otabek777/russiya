// Lenis
const lenis = new Lenis({
    wrapper: document.querySelector('.scroll-container'),
    lerp: 0.1,
    duration: 1.2,
    smoothTouch: true
});
lenis.on('scroll', e => {
    console.log(e);
});
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

$(function () {
    // Фиксированная шапка при прокрутке
    $(window).on('scroll', function () {
        $(".header").toggleClass("fixed", $(this).scrollTop() > 50);
    });

    // Обработка клика по иконке меню
    $(".header__icon").click(function () {
        $("body").toggleClass("mobileHidden");
        $(".main").toggleClass("close");
    });

    // Обработка прокрутки при клике на ссылки aside
    $('.aside a').on('click', function (e) {
        e.preventDefault();
        const target = $(this).attr('href');
        if (target && $(target).length) {
            const offset = window.innerWidth < 1023 ? 80 : 30;
            const scrollTarget = $(target).offset().top - offset;
            $('html, body').animate({ scrollTop: scrollTarget }, 1000);
        }
    });

    // Кнопка в шапке (допустим, для бургер-меню)
    $(".header__btn").click(function () {
        $(this).toggleClass("active");
    });

    // Активные элементы выбора цвета
    $(".color_items .item").click(function () {
        $(".color_items .item").removeClass("active");
        $(this).addClass("active");
    });

    // Изменение цвета body
    $("#bodyColor1").click(function () {
        $("body").removeClass("bodyBlack bodySilver").addClass("bodyWhite");
    });

    $("#bodyColor2").click(function () {
        $("body").removeClass("bodyWhite bodySilver").addClass("bodyBlack");
    });

    $("#bodyColor3").click(function () {
        $("body").removeClass("bodyBlack bodyWhite").addClass("bodySilver");
    });

    // Аккордеон в aside
    $(".aside__accordeon .btn").click(function () {
        $(".aside__accordeon .btn").removeClass("active");
        $(this).toggleClass("active");
    });
});