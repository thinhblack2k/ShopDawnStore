/**
 * Xử menu mobile
 * Author: THINHDH (11/03/2023)
 */
const iconMenu = document.querySelector('.header__menu--icon');
const menuMobile = document.querySelector('.header__main--mobile');
const body = document.querySelector('body');

iconMenu.addEventListener('click', function() {
  iconMenu.classList.toggle('active');
  menuMobile.classList.toggle('active');
  body.classList.toggle('hidden');
});

const subnavBack = document.querySelector('.menu__subnav--back');
const itemBags = document.querySelector('.item-bags');
const itemShoes = document.querySelector('.item-shoes');
const linkNext = document.querySelectorAll('.next-sub-link');
const backBags = document.querySelector('.back-bags');
const backShoes = document.querySelector('.back-shoes');
const paneBags = document.querySelector('.pane-bags');
const paneShoes = document.querySelector('.pane-shoes');

itemBags.addEventListener('click', function() {
  subnavBack.classList.add('activebags');
  linkNext.forEach(element => {
    element.classList.add('active');
  });
  paneBags.style.display = 'block';
});

subnavBack.addEventListener('click', function() {
  subnavBack.classList.remove('activebags');
  linkNext.forEach(element => {
    element.classList.remove('active');
  });
  paneBags.style.display = 'none';
});



itemShoes.addEventListener('click', function() {
  subnavBack.classList.add('activeshoes');
  linkNext.forEach(element => {
    element.classList.add('active');
  });
  paneShoes.style.display = 'block';
});

subnavBack.addEventListener('click', function() {
  subnavBack.classList.remove('activeshoes');
  linkNext.forEach(element => {
    element.classList.remove('active');
  });
  paneShoes.style.display = 'none';
});


/**
 * Xử lý popule video
 * Author: THINHDH (10/03/2023)
 */

$(".vpop").on("click", function (e) {
  e.preventDefault();
  $(
    "#video-popup-overlay,#video-popup-iframe-container,#video-popup-container,#video-popup-close"
  ).show();
  $("#video-popup-iframe").on("load", function () {
    $("#video-popup-container").show();
  });
});

$("#video-popup-close, #video-popup-overlay").on("click", function (e) {
  $(
    "#video-popup-iframe-container,#video-popup-container,#video-popup-close,#video-popup-overlay"
  ).hide();
});

window.document.onkeydown = function (e) {
  if (!e) {
    e = event;
  }
  if (e.keyCode == 27) {
    lightbox_close();
  }
};

function lightbox_open() {
  var lightBoxVideo = document.getElementById("VisaChipCardVideo");
  window.scrollTo(0, 0);
  document.getElementById("light").style.display = "block";
  document.getElementById("fade").style.display = "block";
  lightBoxVideo.play();
}

function lightbox_close() {
  var lightBoxVideo = document.getElementById("VisaChipCardVideo");
  document.getElementById("light").style.display = "none";
  document.getElementById("fade").style.display = "none";
  lightBoxVideo.pause();
}


/**
 * Xử lý sort menu mobile
 * Author: THINHDH(13/3/2023)
 */


function openSortMenu() {
  var sortMenu = document.querySelector('.sort__menu--mobile');
  sortMenu.classList.add('active');
  body.classList.add('hidden');
}

function closeSortMenu() {
  var sortMenu = document.querySelector('.sort__menu--mobile');
  sortMenu.classList.remove('active');
  body.classList.remove('hidden');
}