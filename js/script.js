const btnNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector("header");

btnNav.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

const container = document.querySelector(".number-card-container");
const dots = document.querySelectorAll(".carousel-dots button");
const slides = document.querySelectorAll(".step-slide");

function updateDots(index) {
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

container.addEventListener("scroll", () => {
  let closestIndex = 0;
  let minDiff = Infinity;
  slides.forEach((slide, i) => {
    const rect = slide.getBoundingClientRect();
    const diff = Math.abs(rect.left + rect.width / 2 - window.innerWidth / 2);
    if (diff < minDiff) {
      minDiff = diff;
      closestIndex = i;
    }
  });
  updateDots(closestIndex);
});

let index = 0;
const cards = document.querySelectorAll(".testimonial-card");
const carousel = document.querySelector(".testimonial-carousel");
const leftBtn = document.querySelector(".testimonial-nav-btn.left");
const rightBtn = document.querySelector(".testimonial-nav-btn.right");

const totalSlides = Math.ceil(cards.length / 2);

function showSlide(i) {
  index = Math.max(0, Math.min(i, totalSlides - 1));
  carousel.style.transform = `translateX(-${index * 100}vw)`;

  if (index === 0) {
    leftBtn.disabled = true;
    leftBtn.style.opacity = "0.5";
  } else {
    leftBtn.disabled = false;
    leftBtn.style.opacity = "1";
  }

  if (index === totalSlides - 1) {
    rightBtn.disabled = true;
    rightBtn.style.opacity = "0.5";
  } else {
    rightBtn.disabled = false;
    rightBtn.style.opacity = "1";
  }
}

function nextSlide() {
  showSlide(index + 1);
}

function prevSlide() {
  showSlide(index - 1);
}

showSlide(0);
