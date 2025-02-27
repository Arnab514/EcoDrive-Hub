
document.addEventListener('DOMContentLoaded', function() {
  // Contact form handling
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value.trim();
      const newsletter = document.querySelector('input[name="newsletter"]').checked;
      
      // Validate form (basic validation)
      if (!name || !email || !message || !subject) {
        alert('Please fill in all required fields.');
        return;
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }
      
      // In a real application, this would send data to a server
      console.log('Form submitted:', { name, email, phone, subject, message, newsletter });
      
      // Show success message
      const formContainer = contactForm.parentElement;
      
      if (formContainer) {
        // Hide the form
        contactForm.style.display = 'none';
        
        // Create and show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'form-success-message animate-fade-in';
        successMessage.innerHTML = `
          <h3>Thank You!</h3>
          <p>Your message has been sent successfully. We'll get back to you as soon as possible.</p>
          <button class="btn btn-primary send-another">Send Another Message</button>
        `;
        
        formContainer.appendChild(successMessage);
        
        // Add event listener to "Send Another Message" button
        const sendAnotherBtn = successMessage.querySelector('.send-another');
        if (sendAnotherBtn) {
          sendAnotherBtn.addEventListener('click', function() {
            contactForm.reset();
            successMessage.remove();
            contactForm.style.display = 'block';
          });
        }
      }
    });
  }
  
  // FAQ accordion functionality
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    
    if (question && answer) {
      question.addEventListener('click', function() {
        // Toggle active class on the clicked item
        item.classList.toggle('active');
        
        // Toggle answer visibility
        if (item.classList.contains('active')) {
          answer.style.maxHeight = answer.scrollHeight + 'px';
        } else {
          answer.style.maxHeight = '0';
        }
        
        // Close other FAQ items
        faqItems.forEach(otherItem => {
          if (otherItem !== item && otherItem.classList.contains('active')) {
            otherItem.classList.remove('active');
            const otherAnswer = otherItem.querySelector('.faq-answer');
            if (otherAnswer) {
              otherAnswer.style.maxHeight = '0';
            }
          }
        });
      });
    }
  });
});
