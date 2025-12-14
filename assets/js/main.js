// Scroll reveal animation
const reveals = document.querySelectorAll('.reveal');
function revealOnScroll(){
  const trigger = window.innerHeight * 0.85;
  reveals.forEach(el=>{
    if(el.getBoundingClientRect().top < trigger){
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Mobile menu toggle
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
if(toggle){
  toggle.addEventListener('click',()=>nav.classList.toggle('show'));
}
