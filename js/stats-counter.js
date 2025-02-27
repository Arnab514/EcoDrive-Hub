
document.addEventListener('DOMContentLoaded', function() {
  // Stats counter functionality for About page
  const statNumbers = document.querySelectorAll('.stat-number');
  
  function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      let value = Math.floor(progress * (end - start) + start);
      
      // Format numbers with commas for thousands
      element.textContent = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  // Check if element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Start counter when element is in viewport
  function checkIfInView() {
    statNumbers.forEach(number => {
      if (isInViewport(number) && !number.classList.contains('counted')) {
        const target = parseInt(number.getAttribute('data-count'), 10);
        animateValue(number, 0, target, 2000);
        number.classList.add('counted');
      }
    });
  }

  // Check on load and scroll
  window.addEventListener('scroll', checkIfInView);
  window.addEventListener('load', checkIfInView);
});
