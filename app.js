const openModal = document.querySelector("[data-open-modal]");
const closeModal = document.querySelector("[data-close-modal]");
const modal = document.querySelector("[data-modal]");
const openModalButtons = document.querySelectorAll(".open-modal-button");
const modals = document.querySelectorAll("[data-modal-new]");

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
openModalButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    modals[index].showModal();
  });
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

// making the rest of the components buttons appear
const questions = document.querySelectorAll(".component.question");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    question.nextElementSibling.classList.toggle("active");
  });
});

// making the headings appear on the outputSection
const headings = document.querySelectorAll("[data-heading]");
const place = document.getElementById("place");
const out1 = document.querySelector(".output");
const modal1 = document.querySelector("[data-modal-new]");

function postData(headingType) {
  const input = document.querySelector(`[data-heading="${headingType}"]`);
  const newContent = input.value;
  const newHeading = document.createElement(headingType);

  // Set the font size as a custom style (you can adjust the value)
  if (headingType === "h1") newHeading.style.fontSize = "2em";
  else if (headingType === "h2") newHeading.style.fontSize = "1.5em";
  else if (headingType === "h3") newHeading.style.fontSize = "1.3em";
  else if (headingType === "h4") newHeading.style.fontSize = "1em";
  else if (headingType === "h5") newHeading.style.fontSize = "0.8em";
  else if (headingType === "h6") newHeading.style.fontSize = "0.7em";

  newHeading.textContent = newContent;

  out1.appendChild(newHeading);

  const lineBreak = document.createElement("br");
  out1.appendChild(lineBreak);
  // Clear the input field after posting
  input.value = "";
  modal1.close();
}

headings.forEach((heading) => {
  const button = place;
  const headingType = button.getAttribute("data-heading");

  button.addEventListener("click", () => {
    postData(headingType);
  });
});
