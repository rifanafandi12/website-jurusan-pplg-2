document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('fullscreen-video');

    // Memastikan video autoplay saat di-load dan mengisi layar saat di-klik
    video.autoplay = true;

    video.addEventListener('ended', function(){

        video.currentTime = 0;
        video.play();
    });
   
});
