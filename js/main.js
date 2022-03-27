console.log('hello');

//overlayの取得
const open = document.getElementById('open');
const overlay = document.querySelector('.overlay');
const close = document.getElementById('close');
const close_sp = document.getElementById('close-sp');
const list = document.getElementById('list');
const sp_header = document.getElementById('header-sp');


    // open をクリックしたら
    open.addEventListener('click',()=>{
      overlay.classList.add('show');
      document.body.classList.add('overflow-hidden');
      open.classList.add('hide');
  });

  // close をクリックしたら
  close.addEventListener('click',()=>{
    overlay.classList.remove('show');
    document.body.classList.remove('overflow-hidden');
    open.classList.remove('hide');
});
close_sp.addEventListener('click',()=>{
  overlay.classList.remove('show');
  document.body.classList.remove('overflow-hidden');
  open.classList.remove('hide');
});


list.addEventListener('click',()=>{
  overlay.classList.remove('show');
  document.body.classList.remove('overflow-hidden');
  open.classList.remove('hide');
});

sp_header.addEventListener('click',()=>{
  overlay.classList.remove('show');
  document.body.classList.remove('overflow-hidden');
  open.classList.remove('hide');
});

/*
function toggleNav() {
    var body = document.body;
    var hamburger = document.getElementById('js-hamburger');
    var blackBg = document.getElementById('js-black-bg');
  
    hamburger.addEventListener('click', function() {
      body.classList.toggle('nav-open');
    });
    blackBg.addEventListener('click', function() {
      body.classList.remove('nav-open');
    });
  }
  toggleNav();

*/
  //accordion

document.addEventListener("DOMContentLoaded",() => {
    const title = document.querySelectorAll('.js-accordion-title');
    
    for (let i = 0; i < title.length; i++){
      let titleEach = title[i];
      let content = titleEach.nextElementSibling;
      titleEach.addEventListener('click', () => {
        titleEach.classList.toggle('is-active');
        content.classList.toggle('is-open');
      });
    }
  
  });
  