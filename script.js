let clickCount = 0;
let prevActiveImage = null;
let autoCycleInterval;

document.querySelector(".container").addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.preventDefault();

    // Get the active image
    const activeImage = document.querySelector(".container img.active");

    // Get the next image
    const nextImage =
      activeImage.nextElementSibling ||
      document.querySelector(".container img:first-child");

    // Remove "active" class from the current active image
    activeImage.classList.remove("active");

    // Remove "next" class from the previous active image
    if (prevActiveImage !== null) {
      prevActiveImage.classList.remove("next");
    }

    // Add "next" class to the previous active image
    prevActiveImage = activeImage;
    prevActiveImage.classList.add("next");

    // Add "active" class to the next image
    nextImage.classList.add("active");

    // Reset the auto-cycle interval when the user clicks
    clearInterval(autoCycleInterval);
    autoCycleInterval = setInterval(autoCycleCarousel, 3000);
  }
});

function autoCycleCarousel() {
  const activeImage = document.querySelector(".container img.active");
  const nextImage =
    activeImage.nextElementSibling ||
    document.querySelector(".container img:first-child");

  // Remove "active" class from the current active image
  activeImage.classList.remove("active");

  // Remove "next" class from the previous active image
  if (prevActiveImage !== null) {
    prevActiveImage.classList.remove("next");
  }

  // Add "next" class to the previous active image
  prevActiveImage = activeImage;
  prevActiveImage.classList.add("next");

  // Add "active" class to the next image
  nextImage.classList.add("active");
}

function resetCarousel() {
  // ... your existing resetCarousel function ...
  resetCarousel();

  autoCycleInterval = setInterval(autoCycleCarousel, 2500);
}

// Reset the carousel when the page loads
