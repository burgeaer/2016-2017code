var position = 0;
var playlist;
var video;

window.onload = function() {
    playlist = ["video/preroll",
        "video/areyoupopular",
        "video/destinationearth"];
    video = document.getElementById('video');
    video.addEventListener("ended", nextVideo,false);

    video.src = playlist[position] + getFormatExtension();
    video.load();
    video.play();
    video.addEventListener("error", errorHandler, false);
}

function nextVideo() {
    position++;
    if (position >= playlist.length) {
        position = 0;
    }
    video.src = playlist[position] + getFormatExtension();
    video.load();
    video.play();
}

function getFormatExtension() {
    if (video.canPlayType("video/mp4") != "") {
        return ".mp4";
    } else if (video.canPlayType("video/ogg") != "") {
        return ".ogv";
    } else if (video.canPlayType("video/webm") != "") {
        return ".webm";
    }
}
function errorHandler() {
    var video = document.getElementById("video");
    if (video.error) {
        video.poster ="images/technicaldifficulties"
    }
}
