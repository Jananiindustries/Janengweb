// Toggle Navigation Menu (for mobile)
function toggleMenu() {
  const nav = document.querySelector("nav");
  nav.classList.toggle("open");
}

// Toggle Dark Mode
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  // Optional: Toggle icon if you use one
  const icon = document.getElementById("darkModeIcon");
  if (icon) {
    icon.src = document.body.classList.contains("dark-mode")
      ? "images/sun-icon.png"
      : "images/moon-icon.png";
  }
}

// Show/Hide Scroll-to-Top Button
window.onscroll = function () {
  const btn = document.getElementById("scrollTopBtn");
  if (!btn) return;
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// Scroll to Top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
