// Small UI helpers for the portfolio
document.addEventListener('DOMContentLoaded',function(){
  const year = document.getElementById('year');
  if(year) year.textContent = new Date().getFullYear();

  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  if(toggle && nav){
    toggle.addEventListener('click',()=>{
      nav.classList.toggle('open');
    });
  }
});
