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