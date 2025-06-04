$(".asked__block .btn").click(function(){
    $(this).toggleClass("active");
});
function copy() {
    let copyText = document.querySelector(".codecopy");
    copyText.select();
    document.execCommand("copy");
    $(".codecopybtn").addClass("done");
    setTimeout(function(){
        $(".codecopybtn").removeClass("done");
    }, 2000);
}
document.querySelector("#copy").addEventListener("click", copy);

function soundClick() {
    var audio = document.getElementById('audio');
    audio.play();
};
function soundPauseClick() {
    var audio = document.getElementById('audio');
    audio.pause();
};
$(".playBtn").click(function() {
    $(".playBtn").addClass("hide");
    $(".pauseBtn").removeClass("hide");
});
$(".pauseBtn").click(function() {
    $(".pauseBtn").addClass("hide");
    $(".playBtn").removeClass("hide");
});

// modal
$(".modal-open").click(function() {
    $(".modal").addClass("active");
});
$(".modal__close").click(function() {
    $(".modal").removeClass("active");
});