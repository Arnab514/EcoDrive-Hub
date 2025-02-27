
document.addEventListener('DOMContentLoaded', function() {
  // Authentication page functionality
  const authTabs = document.querySelectorAll('.auth-tab');
  const authForms = document.querySelectorAll('.auth-form');
  const passwordToggles = document.querySelectorAll('.password-toggle');
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  const registerPassword = document.getElementById('registerPassword');
  
  // Tab switching functionality
  authTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      const targetTab = this.getAttribute('data-tab');
      
      // Update active tab
      authTabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      
      // Show corresponding form
      authForms.forEach(form => {
        form.classList.remove('active');
        if (form.id === targetTab + 'Form') {
          form.classList.add('active');
        }
      });
    });
  });
  
  // Password visibility toggle
  passwordToggles.forEach(toggle => {
    toggle.addEventListener('click', function() {
      const container = this.closest('.password-input-container');
      const passwordInput = container.querySelector('input');
      const eyeIcon = container.querySelector('.eye-icon');
      const eyeOffIcon = container.querySelector('.eye-off-icon');
      
      if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.classList.add('hidden');
        eyeOffIcon.classList.remove('hidden');
      } else {
        passwordInput.type = 'password';
        eyeIcon.classList.remove('hidden');
        eyeOffIcon.classList.add('hidden');
      }
    });
  });
  
  // Password strength meter
  if (registerPassword) {
    registerPassword.addEventListener('input', updatePasswordStrength);
  }
  
  function updatePasswordStrength() {
    const password = registerPassword.value;
    const strengthMeter = document.querySelector('.strength-meter');
    const strengthText = document.querySelector('.strength-text');
    const segments = document.querySelectorAll('.strength-segment');
    
    // Reset segments
    segments.forEach(segment => {
      segment.style.backgroundColor = '';
      segment.style.opacity = '0.2';
    });
    
    if (!password) {
      strengthText.textContent = 'Password strength';
      return;
    }
    
    // Calculate password strength
    let strength = 0;
    
    // Length check
    if (password.length >= 8) strength++;
    if (password.length >= 12) strength++;
    
    // Character variety checks
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    
    // Adjust strength based on password length
    strength = Math.min(4, strength);
    
    // Update the strength meter
    for (let i = 0; i < strength; i++) {
      segments[i].style.opacity = '1';
    }
    
    // Set colors and text based on strength
    let color, text;
    
    switch (strength) {
      case 0:
        color = '#F44336';
        text = 'Very weak';
        break;
      case 1:
        color = '#FF9800';
        text = 'Weak';
        break;
      case 2:
        color = '#FFC107';
        text = 'Moderate';
        break;
      case 3:
        color = '#8BC34A';
        text = 'Strong';
        break;
      case 4:
        color = '#4CAF50';
        text = 'Very strong';
        break;
    }
    
    for (let i = 0; i < strength; i++) {
      segments[i].style.backgroundColor = color;
    }
    
    strengthText.textContent = text;
  }
  
  // Form submission handling
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const email = document.getElementById('loginEmail').value.trim();
      const password = document.getElementById('loginPassword').value;
      const remember = document.querySelector('input[name="remember"]')?.checked;
      
      // Validate form
      if (!email || !password) {
        alert('Please enter both email and password.');
        return;
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }
      
      // In a real application, this would send authentication request to a server
      console.log('Login submitted:', { email, password, remember });
      
      // Simulate successful login
      alert('Login successful! Redirecting to dashboard...');
      window.location.href = 'index.html';
    });
  }
  
  if (registerForm) {
    registerForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = document.getElementById('registerName').value.trim();
      const email = document.getElementById('registerEmail').value.trim();
      const password = document.getElementById('registerPassword').value;
      const terms = document.querySelector('input[name="terms"]')?.checked;
      
      // Validate form
      if (!name || !email || !password) {
        alert('Please fill in all required fields.');
        return;
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }
      
      // Terms agreement validation
      if (!terms) {
        alert('You must agree to the Terms of Service and Privacy Policy.');
        return;
      }
      
      // Password strength validation
      const strengthText = document.querySelector('.strength-text').textContent;
      if (strengthText === 'Very weak' || strengthText === 'Weak') {
        alert('Please choose a stronger password.');
        return;
      }
      
      // In a real application, this would send registration request to a server
      console.log('Registration submitted:', { name, email, password, terms });
      
      // Simulate successful registration
      alert('Registration successful! Redirecting to dashboard...');
      window.location.href = 'index.html';
    });
  }
});
