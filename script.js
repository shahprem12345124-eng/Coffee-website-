const openMenuButton = document.querySelector("#menu-open-button");
const closeMenuButton = document.querySelector("#menu-close-button");

openMenuButton.addEventListener("click",()=>{
    document.body.classList.toggle("show-mobile-menu");
});

closeMenuButton.addEventListener("click",()=>openMenuButton.click());


//Initialize Swiper
const swiper = new Swiper('.slider-wapper', {
 
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
       slidesPerView: 1
    },

     768: {
        slidesPerView: 2
    },

     1024: {
        slidesPerView: 3
    },
  }
});