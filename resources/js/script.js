let index = 0;

function show(n) {
  const slides = document.querySelectorAll(".me img");
  if (n >= slides.length) index = 0;
  if (n < 0) index = slides.length - 1;
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(-${index * 100}%)`;
  });
}

function next() {
  index++;
  show(index);
}

function prev() {
  index--;
  show(index);
}

// Initialize the carousel
showSlide(index);

// Optional: Add auto-slide functionality
setInterval(next, 3000);
