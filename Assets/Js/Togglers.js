let toggletopBtns = document.getElementById("toggletopBtns")
let topBtns = document.getElementById("topBtns")
toggletopBtns.addEventListener("click", () => {
  toggletopBtns.classList.toggle("active")
  topBtns.classList.toggle("active")
})















const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
  settings.classList.toggle("active")

})

const settings = document.getElementById("settings")
const setxToggler = document.getElementById("setxToggler")
setxToggler.addEventListener("click", () => {
  settings.classList.toggle("active")
})

































$(function () {
  // Owl Carousel
  var owl = $(".owl-carousels");
  owl.owlCarousel({
    items: 1,
    margin: 10,
    loop: true,
    nav: true,
    autoplay: true,
    // slideTransition: 'linear',
    autoplayTimeout: 5000,
    // autoplaySpeed: 5000,
    autoplayHoverPause: true
  });
});




function slider_carouselInit() {
  $('.owl-carousel.slider_carousel').owlCarousel({
      loop: true,
      margin: 30,
      stagePadding: 2,
      autoplay: true,
      nav: true,
      navText: ["<i class='far fa-arrow-alt-circle-left'></i>","<i class='far fa-arrow-alt-circle-right'></i>"],
      autoplayTimeout: 1500,
      autoplayHoverPause: true,
      responsive: {
          0: {
              items: 1
          },
          768: {
              items: 2,
          },
          1000: {
              items: 3
          },
          1200: {
              items: 5
          }
      }
  });
  
  $('.owl-carousel.slider_carouselshop').owlCarousel({
      loop: true,
      margin: 30,
      stagePadding: 2,
      autoplay: true,
      nav: true,
      navText: ["<i class='far fa-arrow-alt-circle-left'></i>","<i class='far fa-arrow-alt-circle-right'></i>"],
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      items: 1,
    
  });
}
slider_carouselInit();







// alert(document.getElementById("navbar").clientHeight)