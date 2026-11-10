'use strict';
const menuToggle = document.getElementById('menuToggle');
const siteNav = document.getElementById('siteNav');
if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const open = siteNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  siteNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    siteNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }));
}
const reviewSamples = [
  {text:'My car looked incredible after the wash. The attention to detail on the wheels and interior made the whole experience feel premium.',name:'AMINA K. · SAMPLE PROFILE'},
  {text:'The Full House package is exactly the kind of thorough clean I was looking for. Everything looked fresh, inside and out.',name:'YUSUF M. · SAMPLE PROFILE'},
  {text:'Quick, careful and beautifully finished. Even the small details were taken care of, and the car had a brilliant shine.',name:'DANIEL R. · SAMPLE PROFILE'},
  {text:'The interior clean made such a difference. Seats, surfaces and all those hard-to-reach spots looked so much better.',name:'LEILA S. · SAMPLE PROFILE'},
  {text:'The team took great care with the paintwork and the final result looked fantastic. A really polished experience.',name:'JASON P. · SAMPLE PROFILE'}
];
let currentReview = 0;
function showReview(index) {
  currentReview = (index + reviewSamples.length) % reviewSamples.length;
  document.getElementById('reviewText').textContent = reviewSamples[currentReview].text;
  document.getElementById('reviewName').textContent = reviewSamples[currentReview].name;
}
document.getElementById('reviewPrev')?.addEventListener('click', () => showReview(currentReview - 1));
document.getElementById('reviewNext')?.addEventListener('click', () => showReview(currentReview + 1));
document.getElementById('footerYear').textContent = String(new Date().getFullYear());
