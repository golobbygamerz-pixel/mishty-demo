/* =========================================
   MAKEOVER BY MISHTY
   INTERACTIONS & ANIMATIONS
========================================= */


/* -----------------------------------------
   LOADER
----------------------------------------- */

window.addEventListener("load", () => {

  const loader = document.querySelector(".loader");

  setTimeout(() => {
    loader.classList.add("hide");
  }, 900);

});


/* -----------------------------------------
   NAVBAR SCROLL EFFECT
----------------------------------------- */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  if (window.scrollY > 70) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

});


/* -----------------------------------------
   MOBILE MENU
----------------------------------------- */

const menuButton = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-menu a");

menuButton.addEventListener("click", () => {

  mobileMenu.classList.toggle("active");

  document.body.classList.toggle("no-scroll");

});


mobileLinks.forEach(link => {

  link.addEventListener("click", () => {

    mobileMenu.classList.remove("active");
    document.body.classList.remove("no-scroll");

  });

});


/* -----------------------------------------
   SCROLL REVEAL
----------------------------------------- */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

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


revealElements.forEach((element) => {

  revealObserver.observe(element);

});


/* -----------------------------------------
   TESTIMONIAL SLIDER
----------------------------------------- */

const testimonials = [

  {
    text:
      "“Add a genuine client testimonial here. Replace this with an actual review from a bride.”",
    name:
      "CLIENT NAME"
  },

  {
    text:
      "“Replace this section with another genuine review from a happy client.”",
    name:
      "CLIENT NAME"
  },

  {
    text:
      "“Use real feedback here to build trust and showcase the bridal experience.”",
    name:
      "CLIENT NAME"
  }

];


let currentTestimonial = 0;

const testimonialText =
  document.getElementById("testimonial-text");

const testimonialName =
  document.getElementById("testimonial-name");

const nextButton =
  document.querySelector(".testimonial-btn.next");

const prevButton =
  document.querySelector(".testimonial-btn.prev");

const dotsContainer =
  document.querySelector(".testimonial-dots");


/* CREATE DOTS */

testimonials.forEach((_, index) => {

  const dot = document.createElement("span");

  dot.classList.add("dot");

  dot.addEventListener("click", () => {

    currentTestimonial = index;

    updateTestimonial();

  });

  dotsContainer.appendChild(dot);

});


function updateDots() {

  const dots =
    document.querySelectorAll(".dot");

  dots.forEach((dot, index) => {

    dot.style.opacity =
      index === currentTestimonial ? "1" : "0.3";

  });

}


function updateTestimonial() {

  testimonialText.style.opacity = "0";
  testimonialName.style.opacity = "0";

  setTimeout(() => {

    testimonialText.textContent =
      testimonials[currentTestimonial].text;

    testimonialName.textContent =
      testimonials[currentTestimonial].name;

    testimonialText.style.opacity = "1";
    testimonialName.style.opacity = "1";

    updateDots();

  }, 250);

}


nextButton.addEventListener("click", () => {

  currentTestimonial++;

  if (currentTestimonial >= testimonials.length) {
    currentTestimonial = 0;
  }

  updateTestimonial();

});


prevButton.addEventListener("click", () => {

  currentTestimonial--;

  if (currentTestimonial < 0) {
    currentTestimonial = testimonials.length - 1;
  }

  updateTestimonial();

});


updateTestimonial();


/* -----------------------------------------
   BUTTON MICRO INTERACTION
----------------------------------------- */

const buttons =
  document.querySelectorAll(".btn, .nav-book");

buttons.forEach(button => {

  button.addEventListener("mouseenter", () => {

    button.style.transform = "translateY(-3px)";

  });

  button.addEventListener("mouseleave", () => {

    button.style.transform = "";

  });

});


/* -----------------------------------------
   IMAGE PARALLAX
----------------------------------------- */

const heroImage =
  document.querySelector(".hero-image");

window.addEventListener("scroll", () => {

  if (!heroImage) return;

  const scrollPosition =
    window.scrollY;

  if (scrollPosition < window.innerHeight) {

    heroImage.style.transform =
      `translateY(${scrollPosition * 0.12}px) scale(1.02)`;

  }

});


/* -----------------------------------------
   SMOOTH ANCHOR NAVIGATION
----------------------------------------- */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener("click", function (event) {

    const targetId =
      this.getAttribute("href");

    if (
      !targetId ||
      targetId === "#" ||
      !document.querySelector(targetId)
    ) {
      return;
    }

    event.preventDefault();

    document.querySelector(targetId).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  });

});


/* -----------------------------------------
   PORTFOLIO IMAGE HOVER
----------------------------------------- */

const galleryItems =
  document.querySelectorAll(".gallery-item");

galleryItems.forEach(item => {

  item.addEventListener("mousemove", (event) => {

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
      `perspective(800px)
       rotateX(${rotateX}deg)
       rotateY(${rotateY}deg)`;

  });

  item.addEventListener("mouseleave", () => {

    item.style.transform = "";

  });

});


/* -----------------------------------------
   REDUCE MOTION FOR ACCESSIBILITY
----------------------------------------- */

const prefersReducedMotion =
  window.matchMedia("(prefers-reduced-motion: reduce)");

if (prefersReducedMotion.matches) {

  document.documentElement.style.scrollBehavior =
    "auto";

  revealElements.forEach(element => {

    element.classList.add("visible");

  });

}