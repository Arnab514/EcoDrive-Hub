
// // Handle navigation menu toggle
// document.addEventListener('DOMContentLoaded', function() {
//   const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
//   const navList = document.querySelector('.nav-list');
//   const header = document.querySelector('.header');

//   // Mobile menu toggle
//   if (mobileMenuBtn) {
//     // Use mousedown instead of click for more responsive interaction
//     mobileMenuBtn.addEventListener('mousedown', function(e) {
//       e.preventDefault(); // Prevent default to make sure it works on all devices
//       this.classList.toggle('open');
//       navList.classList.toggle('open');
//     });
    
//     // Also add click event as a fallback
//     mobileMenuBtn.addEventListener('click', function(e) {
//       e.preventDefault();
//       this.classList.toggle('open');
//       navList.classList.toggle('open');
//     });
//   }

//   // Close mobile menu when clicking outside
//   document.addEventListener('click', function(event) {
//     const isClickInside = event.target.closest('.main-nav') || event.target.closest('.mobile-menu-btn');
//     if (!isClickInside && navList && navList.classList.contains('open')) {
//       if (mobileMenuBtn) {
//         mobileMenuBtn.classList.remove('open');
//       }
//       if (navList) {
//         navList.classList.remove('open');
//       }
//     }
//   });


// Handle navigation menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navList = document.querySelector('.nav-list');
  const header = document.querySelector('.header');

  // Mobile menu toggle - simplified to just one event
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function(e) {
      e.preventDefault();
      this.classList.toggle('open');
      navList.classList.toggle('open');
      console.log('Menu toggled'); // For debugging
    });
  }

  // Close mobile menu when clicking outside
  document.addEventListener('click', function(event) {
    // Only run this if the menu is open
    if (navList && navList.classList.contains('open')) {
      // Check if the click was outside both the button and the nav
      const isClickInside = event.target.closest('.nav-list') || 
                            event.target.closest('.mobile-menu-btn') ||
                            event.target === mobileMenuBtn;
      
      if (!isClickInside) {
        mobileMenuBtn.classList.remove('open');
        navList.classList.remove('open');
        console.log('Menu closed by outside click'); // For debugging
      }
    }
  });

  // Header scroll effect
  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth'
        });
        
        // Close the mobile menu after navigation
        if (mobileMenuBtn && navList) {
          mobileMenuBtn.classList.remove('open');
          navList.classList.remove('open');
        }
      }
    });
  });
});

//   // Header scroll effect
//   window.addEventListener('scroll', function() {
//     if (window.scrollY > 100) {
//       header.classList.add('header-scrolled');
//     } else {
//       header.classList.remove('header-scrolled');
//     }
//   });

//   // Smooth scrolling for anchor links
//   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//       e.preventDefault();
//       const targetId = this.getAttribute('href');
      
//       if (targetId === '#') return;
      
//       const targetElement = document.querySelector(targetId);
//       if (targetElement) {
//         window.scrollTo({
//           top: targetElement.offsetTop - 100,
//           behavior: 'smooth'
//         });
//       }
//     });
//   });
// });
