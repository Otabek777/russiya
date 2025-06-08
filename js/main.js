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
// Animate on Scroll
const animatedElements = document.querySelectorAll('.animate-on-scroll');
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        } else {
            entry.target.classList.remove('is-visible');
        }
    });
});
animatedElements.forEach(el => observer.observe(el));

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
    $(this).toggleClass("active");
});
$(".color_items .item").click(function() {
    $(".color_items .item").removeClass("active");
    $(this).addClass("active");
});