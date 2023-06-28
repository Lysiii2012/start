/********coki */
if (localStorage.getItem("agreementHidden")) {
  document.querySelector(".agreement-container").style.display = "none";
}
document.querySelector(".agreement-button").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".agreement-container").style.display = "none";
  localStorage.setItem("agreementHidden", true);
});
/***********nav btn */
// document.addEventListener('DOMContentLoaded', function() {
//   var navIcons = document.querySelectorAll('#nav-icon3');
  
//   function toggleClass() {
//     this.classList.toggle('open');
//   }
  
//   for (var i = 0; i < navIcons.length; i++) {
//     navIcons[i].addEventListener('click', toggleClass);
//   }
// });

let btn = document.querySelector(".nav-mobile");

document.querySelector("#nav-icon3").addEventListener("click", () => {
  document.querySelector("#nav-icon3").classList.toggle("open");
  btn.classList.toggle("open");
  document.querySelector(".mob-nav").classList.toggle("show");
});
// document.querySelector('.mob-nav').addEventListener('click', () => {
//   document.querySelector('body').classList.toggle('no-scroll')
// })



document.querySelector('.nav-mobile').addEventListener('click', () => {
  document.querySelector('.mob-nav').classList.remove('show');
  document.querySelector('.nav-mobile').classList.remove('open');
  document.querySelector('#nav-icon3').classList.remove('open');

})


/*********btn-more */


document.querySelector('.more-text').addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.box-more ').style.display = 'block';
  document.querySelector('.aboute-box').classList.remove('dec-box')
  document.querySelector('.aboute-skills').classList.remove('dec-skills')
  document.querySelector('.more-text').style.display = 'none'
})

document.querySelector('.mob-btn').addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.box-more ').style.display = 'block';
  document.querySelector('.mob-btn').style.display = 'none'
})