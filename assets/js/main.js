var $ = jQuery;

document.addEventListener("DOMContentLoaded", function () {
  $(".hamburger-toggle").on("click", function (e) {
    $(".fullscreen__menu").addClass("show__menu").removeClass("hide__menu");
    $("html").addClass("toggleOverflow");
  });
  $(".close__menu").on("click", function (e) {
    $(".fullscreen__menu").addClass("hide__menu").removeClass("show__menu");
    $("html").removeClass("toggleOverflow");
  });
});

let options = {
  threshold: 0.5,
};
const aboutBg = document.querySelector(".about__bg");
let aboutobserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting === true) {
    aboutBg.classList.add("visible");
  }
}, options);
aboutBg && aboutobserver.observe(aboutBg);

const whyUsBg = document.querySelector(".why__us__bg");
let whyUsobserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting === true) {
    whyUsBg.classList.add("visible");
  }
}, options);
whyUsBg && whyUsobserver.observe(whyUsBg);

const eventBg = document.querySelector(".event__bg");
let eventobserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting === true) {
    eventBg.classList.add("visible");
  }
}, options);
eventBg && eventobserver.observe(eventBg);

const reservationBg = document.querySelector(".reservation__img");
let reservationobserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting === true) {
    reservationBg.classList.add("visible");
  }
}, options);
reservationBg && reservationobserver.observe(reservationBg);

const galleryBg = document.querySelector(".gallery__bg");
let galleryobserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting === true) {
    galleryBg.classList.add("visible");
  }
}, options);
galleryBg && galleryobserver.observe(galleryBg);
