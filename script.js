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

// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    themeToggle.textContent = body.classList.contains('light-theme') ? '☀️' : '🌙';
  });
}

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
