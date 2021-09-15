import "../css/main.css";
import site from "../_data/site.json";

// Prevent scrolling and maintain scroll position. Use for open modals.
const body = document.body;
const noScroll = () => {
  if (body.classList.contains("noScroll")) {
    const scrollY = body.style.top;
    body.classList.remove("noScroll");
    body.style.position = "relative";
    body.style.top = "";
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
  } else {
    body.classList.add("noScroll");
    body.style.position = "fixed";
    body.style.top = `-${window.scrollY}px`;
  }
};

// Menu controls ----------------------------------------------------
let hamburger = document.getElementById("hamburger");
let navMobile = document.getElementById("nav__mobile");
hamburger.addEventListener("click", () => {
  for (let i = 0; i < hamburger.children.length; i++) {
    hamburger.children[i].classList.toggle("block");
    hamburger.children[i].classList.toggle("hidden");
  }

  navMobile.classList.toggle("left-full");
  navMobile.classList.toggle("left-0");

  noScroll();
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 767) {
    hamburger.children[0].classList.remove("hidden");
    hamburger.children[0].classList.add("block");
    hamburger.children[1].classList.remove("block");
    hamburger.children[1].classList.add("hidden");
    navMobile.classList.add("left-full");

    if (body.classList.contains("noScroll")) {
      noScroll();
    }
  }
});
// ------------------------------------------------------------------

// Modal controls ---------------------------------------------------
let closeButtons = document.querySelectorAll(".close");

closeButtons.forEach((button) => {
  button.addEventListener("click", function () {
    this.parentElement.classList.toggle("hidden");
    this.parentElement.classList.toggle("flex");
  });
});

let galleryItems = document.querySelectorAll(".gallery__item");
let lightbox = document.getElementById("lightbox");
let lightboxMediaContainer = document.getElementById("lightbox__media");

galleryItems.forEach((item) => {
  item.addEventListener("click", function () {
    let itemIndex = this.getAttribute("data-galleryID");
    let lightboxItem = document.querySelector(
      `[data-lightboxID='${itemIndex}']`
    );

    lightbox.classList.remove("hidden");
    lightbox.classList.add("flex");
    for (let i = 0; i < lightboxMediaContainer.children.length; i++) {
      lightboxMediaContainer.children[i].classList.remove("active");
      lightboxMediaContainer.children[i].classList.add("hidden");
    }
    lightboxItem.classList.remove("hidden");
    lightboxItem.classList.add("active");
  });
});

let lightboxPrev = document.getElementById("lightbox__prev");
let lightboxNext = document.getElementById("lightbox__next");

if (lightboxPrev) {
  lightboxPrev.addEventListener("click", () => {
    let activeItem = document.querySelector(".lightbox__item.active");

    activeItem.classList.remove("active");
    activeItem.classList.add("hidden");

    if (activeItem.previousElementSibling) {
      activeItem.previousElementSibling.classList.remove("hidden");
      activeItem.previousElementSibling.classList.add("active");
    } else {
      lightboxMediaContainer.lastElementChild.classList.remove("hidden");
      lightboxMediaContainer.lastElementChild.classList.add("active");
    }
  });
}

if (lightboxNext) {
  lightboxNext.addEventListener("click", () => {
    let activeItem = document.querySelector(".lightbox__item.active");

    activeItem.classList.remove("active");
    activeItem.classList.add("hidden");

    if (activeItem.nextElementSibling) {
      activeItem.nextElementSibling.classList.remove("hidden");
      activeItem.nextElementSibling.classList.add("active");
    } else {
      lightboxMediaContainer.firstElementChild.classList.remove("hidden");
      lightboxMediaContainer.firstElementChild.classList.add("active");
    }
  });
}
// ------------------------------------------------------------------

// Mode toggle ------------------------------------------------------
const modeButtons = document.querySelectorAll(".mode-switch");

modeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }
  });
});
// ------------------------------------------------------------------

// Contact cta action -----------------------------------------------
const contactButton = document.getElementById("contact__btn");

contactButton.addEventListener("click", () => {
  navigator.clipboard.writeText(site.authorEmail);

  let tooltip = document.querySelector("#contact__btn .tooltip");
  tooltip.innerHTML = "Copied!";
});

contactButton.addEventListener("mouseout", () => {
  let tooltip = document.querySelector("#contact__btn .tooltip");
  tooltip.innerHTML = "Copy to clipboard";
});
// ------------------------------------------------------------------
