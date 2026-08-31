/* =========================================
   MAKEOVER BY MISHTY
   MAIN JAVASCRIPT
========================================= */


/* =========================================
   LOADER
========================================= */

window.addEventListener("load", function () {

  const loader = document.getElementById("loader");

  setTimeout(function () {

    loader.classList.add("hide");

  }, 800);

});


/* =========================================
   NAVBAR
========================================= */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {

  if (window.scrollY > 60) {

    navbar.classList.add("scrolled");

  } else {

    navbar.classList.remove("scrolled");

  }

});


/* =========================================
   MOBILE MENU
========================================= */

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

menuButton.addEventListener("click", function () {

  mobileMenu.classList.toggle("active");

  document.body.classList.toggle("menu-open");

});


const mobileLinks =
  document.querySelectorAll("#mobileMenu a");

mobileLinks.forEach(function (link) {

  link.addEventListener("click", function () {

    mobileMenu.classList.remove("active");

    document.body.classList.remove("menu-open");

  });

});


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
  document.querySelectorAll(".reveal");


const revealObserver =
  new IntersectionObserver(
    function (entries) {

      entries.forEach(function (entry) {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          revealObserver.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.12
    }
  );


revealElements.forEach(function (element) {

  revealObserver.observe(element);

});


/* =========================================
   TESTIMONIALS
========================================= */

const reviews = [

  {
    text:
      "“Your genuine bride testimonial can be placed here.”",

    name:
      "CLIENT NAME"
  },

  {
    text:
      "“Replace this with a real review from a happy client.”",

    name:
      "CLIENT NAME"
  },

  {
    text:
      "“Add another genuine testimonial to showcase the experience.”",

    name:
      "CLIENT NAME"
  }

];


let currentReview = 0;


const reviewText =
  document.getElementById("reviewText");

const reviewName =
  document.getElementById("reviewName");

const previousReview =
  document.getElementById("previousReview");

const nextReview =
  document.getElementById("nextReview");


function showReview(index) {

  reviewText.style.opacity = "0";
  reviewName.style.opacity = "0";


  setTimeout(function () {

    reviewText.textContent =
      reviews[index].text;

    reviewName.textContent =
      reviews[index].name;


    reviewText.style.opacity = "1";
    reviewName.style.opacity = "1";

  }, 200);

}


nextReview.addEventListener("click", function () {

  currentReview++;

  if (currentReview >= reviews.length) {

    currentReview = 0;

  }

  showReview(currentReview);

});


previousReview.addEventListener("click", function () {

  currentReview--;

  if (currentReview < 0) {

    currentReview = reviews.length - 1;

  }

  showReview(currentReview);

});


/* =========================================
   AUTO REVIEW SLIDER
========================================= */

setInterval(function () {

  currentReview++;

  if (currentReview >= reviews.length) {

    currentReview = 0;

  }

  showReview(currentReview);

}, 7000);


/* =========================================
   HERO PARALLAX
========================================= */

const heroBackground =
  document.querySelector(".hero-background");


window.addEventListener("scroll", function () {

  if (!heroBackground) return;

  if (window.scrollY < window.innerHeight) {

    heroBackground.style.transform =
      `translateY(${window.scrollY * 0.08}px) scale(1.02)`;

  }

});


/* =========================================
   SMOOTH LINKS
========================================= */

const internalLinks =
  document.querySelectorAll('a[href^="#"]');


internalLinks.forEach(function (link) {

  link.addEventListener("click", function (event) {

    const target =
      document.querySelector(
        link.getAttribute("href")
      );


    if (!target) return;


    event.preventDefault();


    target.scrollIntoView({

      behavior: "smooth",

      block: "start"

    });

  });

});


/* =========================================
   PORTFOLIO TILT
========================================= */

const galleryItems =
  document.querySelectorAll(".gallery-item");


galleryItems.forEach(function (item) {

  item.addEventListener("mousemove", function (event) {

    if (window.innerWidth < 700) return;


    const rect =
      item.getBoundingClientRect();


    const x =
      event.clientX - rect.left;


    const y =
      event.clientY - rect.top;


    const rotateX =
      ((y / rect.height) - 0.5) * -2;


    const rotateY =
      ((x / rect.width) - 0.5) * 2;


    item.style.transform =
      `perspective(900px)
       rotateX(${rotateX}deg)
       rotateY(${rotateY}deg)`;

  });


  item.addEventListener("mouseleave", function () {

    item.style.transform = "";

  });

});


/* =========================================
   ACCESSIBILITY
========================================= */

const reducedMotion =
  window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );


if (reducedMotion.matches) {

  document.documentElement.style.scrollBehavior =
    "auto";


  revealElements.forEach(function (element) {

    element.classList.add("visible");

  });

}