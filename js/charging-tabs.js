
document.addEventListener('DOMContentLoaded', function() {
  // Charging tabs functionality
  const chargingTabs = document.querySelectorAll('.charging-tab');
  const chargingContents = document.querySelectorAll('.charging-tab-content');

  // Initialize tabs
  if (chargingTabs.length && chargingContents.length) {
    chargingTabs.forEach(tab => {
      tab.addEventListener('click', function() {
        const tabId = this.getAttribute('data-tab');
        
        // Remove active class from all tabs and contents
        chargingTabs.forEach(t => t.classList.remove('active'));
        chargingContents.forEach(c => c.classList.remove('active'));
        
        // Add active class to clicked tab and corresponding content
        this.classList.add('active');
        document.getElementById(tabId + '-charging').classList.add('active');
      });
    });
  }
});
