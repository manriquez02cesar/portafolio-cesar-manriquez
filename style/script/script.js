document.addEventListener("DOMContentLoaded", function () {
    const video = document.createElement("video");
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.className = "video-bg";

    const source = document.createElement("source");
    source.src = "../vds/body5.mp4";
    source.type = "video/mp4";

    video.appendChild(source);
    document.body.prepend(video);
});
