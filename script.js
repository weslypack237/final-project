// Typing effect
const text = "I design digital experiences";
const typingText = document.getElementById('typing-text');
let index = 0;

function typeWriter() {
  if (index < text.length) {
    typingText.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }
}

window.addEventListener('load', () => {
  setTimeout(typeWriter, 1000);
});

// ===== APPLY SAVED THEME ON PAGE LOAD =====
document.addEventListener("DOMContentLoaded", () => {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
        document.body.classList.add("light-theme");
    }

    const themeToggle = document.getElementById("theme-toggle");

    if (!themeToggle) return;

    // Set correct icon on load
    themeToggle.textContent = document.body.classList.contains("light-theme") ? "🌙" : "☀️";

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light-theme");

        // Save theme
        if (document.body.classList.contains("light-theme")) {
            localStorage.setItem("theme", "light");
            themeToggle.textContent = "🌙";
        } else {
            localStorage.setItem("theme", "dark");
            themeToggle.textContent = "☀️";
        }
    });

});
// Back to top
const backToTop = document.getElementById('back-to-top');

if (backToTop) {
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener('click',function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({behavior:'smooth'});
  });
});

// reveal animation
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('active');
    }
  });
},{threshold:.2});

document.querySelectorAll('.reveal').forEach(el=>{
  observer.observe(el);
});

// fake form submit
document.getElementById("form").addEventListener("submit", e=>{
  e.preventDefault();
  alert("Message sent successfully!");
});
