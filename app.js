const openModal = document.querySelector("[data-open-modal]");
const closeModal = document.querySelector("[data-close-modal]");
const modal = document.querySelector("[data-modal]");

openModal.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.close();
});

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
