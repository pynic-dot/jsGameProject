"use strict";

let showModal = document.querySelectorAll(".show-modal");
let modalHidden = document.querySelector(".modal");
let closeModal = document.querySelector(".close-modal");
let overlayHidden = document.querySelector(".overlay");

let clickShow = function () {
  modalHidden.classList.remove("hidden");
  overlayHidden.classList.remove("hidden");
};
let removeModel = function () {
  modalHidden.classList.add("hidden");
  overlayHidden.classList.add("hidden");
};

for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener("click", clickShow);
}

overlayHidden.addEventListener("click", removeModel);
closeModal.addEventListener("click", removeModel);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modalHidden.classList.contains("hidden")) {
    removeModel();
  }
});
