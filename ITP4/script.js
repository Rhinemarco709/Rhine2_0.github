let index = 0;
const slides = document.querySelector(".gallery");
const dots = document.querySelectorAll(".dot");

function updateGallery() {
  slides.style.transform = `translateX(-${index * 500}px)`;
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

function moveSlide(step) {
  index = (index + step + 10) % 10;
  updateGallery();
}

function currentSlide(n) {
  index = n;
  updateGallery();
}

setInterval(() => moveSlide(1), 3000);
