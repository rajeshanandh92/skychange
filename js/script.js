
// Global variables
let currentYear = new Date().getFullYear();
let allAirlines = [
  { name: "Emirates Airlines", country: "UAE" },
  { name: "Lufthansa Airlines", country: "Germany" },
  { name: "British Airways", country: "United Kingdom" },
  { name: "Air Canada", country: "Canada" },
  { name: "Singapore Airlines", country: "Singapore" },
  { name: "Qatar Airways", country: "Qatar" },
  { name: "Turkish Airlines", country: "Turkey" },
  { name: "KLM Royal Dutch Airlines", country: "Netherlands" },
  { name: "Air France", country: "France" },
  { name: "Swiss International Air Lines", country: "Switzerland" },
  { name: "Austrian Airlines", country: "Austria" },
  { name: "Scandinavian Airlines", country: "Sweden" },
  { name: "Finnair", country: "Finland" },
  { name: "Iberia Airlines", country: "Spain" },
  { name: "Alitalia", country: "Italy" },
  { name: "TAP Air Portugal", country: "Portugal" },
  { name: "LOT Polish Airlines", country: "Poland" },
  { name: "Czech Airlines", country: "Czech Republic" },
  { name: "Air Europa", country: "Spain" },
  { name: "Brussels Airlines", country: "Belgium" },
  { name: "Aegean Airlines", country: "Greece" },
  { name: "Croatia Airlines", country: "Croatia" },
  { name: "Air Serbia", country: "Serbia" },
  { name: "Tarom", country: "Romania" },
  { name: "Bulgaria Air", country: "Bulgaria" },
  { name: "Air Baltic", country: "Latvia" },
  { name: "Ethiopian Airlines", country: "Ethiopia" },
  { name: "South African Airways", country: "South Africa" },
  { name: "Kenya Airways", country: "Kenya" },
  { name: "Royal Air Maroc", country: "Morocco" },
  { name: "EgyptAir", country: "Egypt" },
  { name: "All Nippon Airways (ANA)", country: "Japan" },
  { name: "Japan Airlines (JAL)", country: "Japan" },
  { name: "Korean Air", country: "South Korea" },
  { name: "Asiana Airlines", country: "South Korea" },
  { name: "Cathay Pacific", country: "Hong Kong" },
  { name: "China Eastern Airlines", country: "China" },
  { name: "China Southern Airlines", country: "China" },
  { name: "Air China", country: "China" },
  { name: "Thai Airways", country: "Thailand" },
  { name: "Malaysia Airlines", country: "Malaysia" },
  { name: "Philippine Airlines", country: "Philippines" },
  { name: "Garuda Indonesia", country: "Indonesia" },
  { name: "Vietnam Airlines", country: "Vietnam" },
  { name: "Air India", country: "India" },
  { name: "IndiGo", country: "India" },
  { name: "Qantas Airways", country: "Australia" },
  { name: "Air New Zealand", country: "New Zealand" },
  { name: "LATAM Airlines", country: "Chile" },
  { name: "Avianca", country: "Colombia" },
  { name: "Copa Airlines", country: "Panama" }
];

let showingAllAirlines = false;

// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  // Set current year
  const currentYearElement = document.getElementById('current-year');
  if (currentYearElement) {
    currentYearElement.textContent = currentYear;
  }

  // Initialize components
  initializeHeader();
  initializeAirlines();
  initializeChat();
  initializeContactForm();
  initializeSmoothScroll();
  initializeFloatingButton();
  initializeMobileMenu();
  
  // Set initial chat time
  setInitialChatTime();
  
  // Initialize animations
  setTimeout(initializeAnimations, 100);
}

// Header functionality
function initializeHeader() {
  const header = document.getElementById('header');
  
  const handleScroll = () => {
    if (window.scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  
  window.addEventListener('scroll', handleScroll, { passive: true });
}

// Airlines functionality
function initializeAirlines() {
  const airlinesGrid = document.getElementById('airlines-grid');
  const toggleButton = document.getElementById('show-all-airlines');
  
  if (!airlinesGrid || !toggleButton) return;
  
  // Show initial airlines (first 12)
  renderAirlines(allAirlines.slice(0, 12));
  
  toggleButton.addEventListener('click', () => {
    if (!showingAllAirlines) {
      renderAirlines(allAirlines);
      toggleButton.textContent = 'Show Less Airlines';
      showingAllAirlines = true;
    } else {
      renderAirlines(allAirlines.slice(0, 12));
      toggleButton.textContent = 'Show All Airlines';
      showingAllAirlines = false;
    }
  });
}

function renderAirlines(airlines) {
  const airlinesGrid = document.getElementById('airlines-grid');
  
  airlinesGrid.innerHTML = airlines.map(airline => `
    <div class="airline-card">
      <h4>${airline.name}</h4>
      <p>${airline.country}</p>
    </div>
  `).join('');
}

// Chat functionality
function initializeChat() {
  const chatToggle = document.getElementById('chat-toggle-btn');
  const chatWindow = document.getElementById('chat-window');
  const chatClose = document.getElementById('chat-close');
  const chatForm = document.getElementById('chat-form');
  const chatInput = document.getElementById('chat-input-field');
  const chatMessages = document.getElementById('chat-messages');
  
  if (!chatToggle || !chatWindow) return;
  
  chatToggle.addEventListener('click', () => {
    chatWindow.classList.add('active');
  });
  
  if (chatClose) {
    chatClose.addEventListener('click', () => {
      chatWindow.classList.remove('active');
    });
  }
  
  if (chatForm) {
    chatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const message = chatInput.value.trim();
      
      if (message) {
        addChatMessage(message, 'user');
        chatInput.value = '';
        
        // Simulate agent response
        setTimeout(() => {
          addAgentResponse(message);
        }, 1000);
      }
    });
  }
}

function addChatMessage(message, sender) {
  const chatMessages = document.getElementById('chat-messages');
  const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${sender}`;
  messageDiv.innerHTML = `
    <div class="message-content">
      <p>${message}</p>
      <span class="message-time">${time}</span>
    </div>
  `;
  
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function addAgentResponse(userMessage) {
  const responses = [
    "Thank you for contacting us! I'd be happy to help with your international flight change. Can you please provide your booking reference?",
    "I understand you need assistance with flight modifications. For the fastest service, please call us at (888) 483-4464.",
    "Great! I can help you with that. Our specialists are available 24/7 to assist with international airline changes. Call us at (888) 483-4464.",
    "I see you're looking for flight cancellation assistance. Let me connect you with one of our expert agents who can help immediately. Meanwhile, please contact our team at (888) 483-4464.",
    "Thank you for reaching out! For complex international flight changes, our phone support team can provide the most efficient assistance. Call now at (888) 483-4464."
  ];
  
  const randomResponse = responses[Math.floor(Math.random() * responses.length)];
  addChatMessage(randomResponse, 'agent');
}

function setInitialChatTime() {
  const initialTimeElement = document.getElementById('initial-time');
  if (initialTimeElement) {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    initialTimeElement.textContent = time;
  }
}

// Contact form functionality
function initializeContactForm() {
  const contactForm = document.getElementById('contact-form');
  
  if (!contactForm) return;
  
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Simulate form submission
    showFormSuccess();
    
    // Reset form after delay
    setTimeout(() => {
      contactForm.reset();
    }, 2000);
  });
}

function showFormSuccess() {
  const submitButton = document.querySelector('.form-submit');
  const originalText = submitButton.textContent;
  
  submitButton.textContent = 'Quote Submitted Successfully!';
  submitButton.style.background = 'linear-gradient(135deg, #28a745, #20c997)';
  
  setTimeout(() => {
    submitButton.textContent = originalText;
    submitButton.style.background = '';
  }, 3000);
}

// Smooth scroll functionality
function initializeSmoothScroll() {
  const scrollLinks = document.querySelectorAll('[data-scroll]');
  
  scrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('data-scroll');
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const headerHeight = document.getElementById('header').offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Floating button functionality
function initializeFloatingButton() {
  const floatingButton = document.getElementById('floating-call-button');
  
  if (!floatingButton) return;
  
  const handleFloatingButtonVisibility = () => {
    if (window.scrollY > 500) {
      floatingButton.classList.add('visible');
    } else {
      floatingButton.classList.remove('visible');
    }
  };
  
  // Initial check
  handleFloatingButtonVisibility();
  
  // Add scroll listener
  window.addEventListener('scroll', handleFloatingButtonVisibility, { passive: true });
}

// Mobile menu functionality
function initializeMobileMenu() {
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const nav = document.getElementById('nav');
  
  if (!mobileToggle || !nav) return;
  
  mobileToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    mobileToggle.classList.toggle('active');
  });
  
  // Close menu when clicking nav links
  const navLinks = nav.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      mobileToggle.classList.remove('active');
    });
  });
}

// Add intersection observer for animations
function initializeAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Observe elements that should animate in
  const animatedElements = document.querySelectorAll('.service-card, .benefit-card, .airline-card');
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

// Utility functions
function formatPhoneNumber(phone) {
  // Simple phone number formatting
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  
  return phone;
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Export functions for potential external use
window.SkyChangeApp = {
  addChatMessage,
  formatPhoneNumber,
  validateEmail,
  showFormSuccess
};
