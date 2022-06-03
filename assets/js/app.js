const scrollUP= document.getElementById('scroll-up');
const burger = document.getElementById('burger-menu');
const ul = document.querySelector('nav ul');
const nav = document.querySelector('nav');
const navLink = document.querySelectorAll('.nav-link');

scrollUP.addEventListener('click', function(){
  window.scrollTo({
    top : 0,
    right: 0,
    behavior: "smooth",
  });
});

burger.addEventListener('click', function(){
  ul.classList.toggle('show');
});

navLink.forEach((link) => {
  link.addEventListener('click', function(){
    ul.classList.remove('show');
  })
});