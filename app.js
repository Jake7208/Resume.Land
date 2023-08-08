const closeModal = document.querySelector("[data-close-modal]");
const modal = document.querySelector("[data-modal]");

// Check if the modal has been shown before
const hasModalBeenShown = localStorage.getItem("modalShown");

if (!hasModalBeenShown) {
  // Show the modal
  modal.showModal();

  closeModal.addEventListener("click", () => {
    modal.close();

    // Store a flag in local storage to indicate that the modal has been shown
    localStorage.setItem("modalShown", true);
  });
}

const output = document.querySelector(".outputSection");
const orientationButton = document.querySelector(".orientation");

let isFlipped = false;

orientationButton.addEventListener("click", () => {
  isFlipped = !isFlipped;

  if (isFlipped) {
    output.classList.add("flip");
  } else {
    output.classList.remove("flip");
  }
});

let zoom = 1;
const MIN_ZOOM = 0.4;
const maxZoom = 1;
const ZOOM_SPEED = 0.1;

output.addEventListener("wheel", (e) => {
  e.preventDefault();

  if (e.deltaY > 0) {
    zoom += ZOOM_SPEED;
    if (zoom > maxZoom) {
      zoom = maxZoom;
    }
  } else if (e.deltaY < 0) {
    zoom -= ZOOM_SPEED;
    if (zoom < MIN_ZOOM) {
      zoom = MIN_ZOOM;
    }
  }

  output.style.scale = `${zoom}`;
});
