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

$('.aside a').on('click', function (e) {
    e.preventDefault();
    const target = $(this).attr('href');
    if (target && $(target).length) {
        const scrollTarget = $(target).offset().top - 30;
        $('html, body').animate({
            scrollTop: scrollTarget
        }, 1000);
    }
});

$(".color_items .item").click(function() {
    $(".color_items .item").removeClass("active");
    $(this).addClass("active");
});
$("#bodyColor1").click(function() {
    $("body").removeClass("bodyBlack");
    $("body").removeClass("bodySilver");
    $("body").addClass("bodyWhite");
});
$("#bodyColor2").click(function() {
    $("body").removeClass("bodyWhite");
    $("body").removeClass("bodySilver");
    $("body").addClass("bodyBlack");
});
$("#bodyColor3").click(function() {
    $("body").removeClass("bodyBlack");
    $("body").removeClass("bodyWhite");
    $("body").addClass("bodySilver");
});

$(".header__icon").click(function() {
    $(".main").toggleClass("close");
});
$(".aside__accordeon .btn").click(function() {
    $(".aside__accordeon .btn").removeClass("active");
    $(this).toggleClass("active");
});
$(".color_items .item").click(function() {
    $(".color_items .item").removeClass("active");
    $(this).addClass("active");
});