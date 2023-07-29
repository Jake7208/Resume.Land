var video = document.getElementById("video");

// When the 'ended' event fires
video.addEventListener("ended", function () {
  // Reset the video to 0
  video.currentTime = 0;
  // And pause ready for
  video.pause();
});
