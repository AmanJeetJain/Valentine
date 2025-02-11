let currentIndex = 0;

function showSlide(index) {
  const carouselInner = document.querySelector('.carousel-inner');
  const totalSlides = document.querySelectorAll('.carousel-item').length;
  if (index >= totalSlides) currentIndex = 0;
  if (index < 0) currentIndex = totalSlides - 1;
  carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

document.querySelector('.carousel-next').addEventListener('click', () => {
  currentIndex++;
  showSlide(currentIndex);
});

document.querySelector('.carousel-prev').addEventListener('click', () => {
  currentIndex--;
  showSlide(currentIndex);
});

// Auto-play the carousel (optional)
setInterval(() => {
  currentIndex++;
  showSlide(currentIndex);
}, 5000);

// Play music on user interaction
document.body.addEventListener('click', () => {
  const audio = document.getElementById('background-music');
  if (audio.paused) {
    audio.play();
  }
});