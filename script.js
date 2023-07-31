let prevActiveImage = null;
let autoCycleInterval;

const slider = document.querySelector(".slider");
const images = slider.querySelectorAll("img");

images.forEach((image) => {
  image.addEventListener("click", (e) => {
    e.preventDefault();

    // Get the active image
    const activeImage = slider.querySelector(".active");

    // Get the next image
    const nextImage =
      activeImage.nextElementSibling || slider.querySelector("img:first-child");

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
    autoCycleInterval = setInterval(autoCycleCarousel, 2500);
  });
});

function autoCycleCarousel() {
  const activeImage = slider.querySelector(".active");
  const nextImage =
    activeImage.nextElementSibling || slider.querySelector("img:first-child");

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

// Start auto-cycling the carousel every 2.5 seconds
autoCycleInterval = setInterval(autoCycleCarousel, 2500);

const handleOnMouseMove = (e) => {
  const { currentTarget } = e; // Use currentTarget instead of target

  const rect = currentTarget.getBoundingClientRect(), // Use currentTarget instead of target
    x = e.clientX - rect.left,
    y = e.clientY - rect.top;

  currentTarget.style.setProperty("--mouse-x", x + "px");
  currentTarget.style.setProperty("--mouse-y", y + "px");
};

for (const card of document.querySelectorAll(".builder")) {
  card.addEventListener("mousemove", handleOnMouseMove);
}

for (const card of document.querySelectorAll(".gallery")) {
  card.addEventListener("mousemove", handleOnMouseMove);
}

//  fade in animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else entry.target.classList.remove("show");
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((element) => {
  observer.observe(element);
});
