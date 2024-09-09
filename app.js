// JavaScript to handle scroll and hover effects
const navbar = document.getElementById('navbar');

// Add a scroll event listener to change the navbar style on scroll
window.addEventListener('scroll', function() {
  if (window.scrollY > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
