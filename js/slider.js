
document.addEventListener('DOMContentLoaded', function() {
  // Vehicle type slider functionality
  const slides = document.querySelectorAll('.vehicle-slide');
  const dots = document.querySelectorAll('.slider-dot');
  const prevBtn = document.querySelector('.slider-arrow.prev');
  const nextBtn = document.querySelector('.slider-arrow.next');
  let currentSlide = 0;
  const slideCount = slides.length;

  // Initialize the slider
  function initSlider() {
    if (!slides.length) return;
    
    updateSlider();

    // Event listeners for controls
    if (prevBtn) {
      prevBtn.addEventListener('click', showPreviousSlide);
    }
    
    if (nextBtn) {
      nextBtn.addEventListener('click', showNextSlide);
    }
    
    // Add event listeners to dots
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentSlide = index;
        updateSlider();
      });
    });

    // Auto-rotate slides every 5 seconds
    setInterval(showNextSlide, 5000);
  }

  function updateSlider() {
    // Update slides
    slides.forEach((slide, index) => {
      slide.classList.remove('active');
      if (index === currentSlide) {
        slide.classList.add('active');
      }
    });

    // Update dots
    dots.forEach((dot, index) => {
      dot.classList.remove('active');
      if (index === currentSlide) {
        dot.classList.add('active');
      }
    });
  }

  function showNextSlide() {
    currentSlide = (currentSlide + 1) % slideCount;
    updateSlider();
  }

  function showPreviousSlide() {
    currentSlide = (currentSlide - 1 + slideCount) % slideCount;
    updateSlider();
  }

  // Initialize the slider
  initSlider();
});
