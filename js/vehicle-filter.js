
document.addEventListener('DOMContentLoaded', function() {
  // Vehicle filtering functionality
  const filterBtn = document.getElementById('filter-btn');
  const vehicleCards = document.querySelectorAll('.vehicle-card');
  const vehicleDetailsBtns = document.querySelectorAll('.vehicle-details-btn');
  
  // Apply filters when button is clicked
  if (filterBtn) {
    filterBtn.addEventListener('click', applyFilters);
  }
  
  function applyFilters() {
    const typeFilter = document.getElementById('vehicle-type').value;
    const categoryFilter = document.getElementById('vehicle-category').value;
    const rangeFilter = parseInt(document.getElementById('range-filter').value, 10);
    const priceFilter = document.getElementById('price-filter').value;
    
    vehicleCards.forEach(card => {
      const type = card.getAttribute('data-type');
      const category = card.getAttribute('data-category');
      const range = parseInt(card.getAttribute('data-range'), 10);
      const price = card.getAttribute('data-price');
      
      // Check if the card meets all filter criteria
      const typeMatch = typeFilter === 'all' || type === typeFilter;
      const categoryMatch = categoryFilter === 'all' || category === categoryFilter;
      const rangeMatch = range >= rangeFilter;
      const priceMatch = priceFilter === 'all' || price === priceFilter;
      
      // Show or hide the card based on filter matches
      if (typeMatch && categoryMatch && rangeMatch && priceMatch) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }
  
  // Vehicle details popup functionality
  vehicleDetailsBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const card = this.closest('.vehicle-card');
      const popup = card.querySelector('.vehicle-details-popup');
      
      if (popup) {
        popup.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        
        // Add close button functionality
        const closeBtn = popup.querySelector('.close-popup');
        if (closeBtn) {
          closeBtn.addEventListener('click', function() {
            popup.style.display = 'none';
            document.body.style.overflow = 'auto';
          });
        }
        
        // Close popup when clicking outside
        popup.addEventListener('click', function(e) {
          if (e.target === popup) {
            popup.style.display = 'none';
            document.body.style.overflow = 'auto';
          }
        });
      }
    });
  });
});
