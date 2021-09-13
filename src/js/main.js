import "../css/main.css";
import $ from "jquery";
$(function () {
  // Execute on page load
  // Prevent flash of nav on page load
  // if ($(window).width() < 768) {
  //   $("#nav__mobile").addClass("transition-transform");
  // }
});

// Menu controls ----------------------------------------------------
$("#hamburger").on("click", function () {
  $(this).children().toggleClass("block").toggleClass("hidden");
  $("#nav__mobile").toggleClass("left-full").toggleClass("left-0");
  $("body").toggleClass("overflow-y-hidden");
});

$(window).on("resize", function () {
  if ($(this).width() > 767) {
    $("#hamburger div:first-child").removeClass("hidden").addClass("block");
    $("#hamburger div:last-child").removeClass("block").addClass("hidden");
    $("#nav__mobile").addClass("left-full");
  }
});
// ------------------------------------------------------------------

// Modal controls ---------------------------------------------------
$(".close").on("click", function () {
  $(this).parent().toggleClass("hidden").toggleClass("flex");
  $("body").toggleClass("overflow-y-hidden");
});

$(".gallery__item").on("click", function () {
  let itemIndex = $(this).attr("data-galleryID");
  let lightboxItem = $(`[data-lightboxID='${itemIndex}']`);

  $("#lightbox").removeClass("hidden").addClass("flex");
  $("body").toggleClass("overflow-y-hidden");
  lightboxItem.removeClass("hidden").addClass("active");
  lightboxItem.siblings().removeClass("active").addClass("hidden");
});

$("#lightbox__prev").on("click", function () {
  let itemIndex = $(".lightbox__item.active").attr("data-lightboxID");
  let activeItem = $(`[data-lightboxID='${itemIndex}']`);

  activeItem.toggleClass("hidden").toggleClass("active");
  if (activeItem.prev().length !== 0) {
    activeItem.prev().toggleClass("hidden").toggleClass("active");
  } else {
    $(".lightbox__item:last-of-type()")
      .toggleClass("hidden")
      .toggleClass("active");
  }
});

$("#lightbox__next").on("click", function () {
  let itemIndex = $(".lightbox__item.active").attr("data-lightboxID");
  let activeItem = $(`[data-lightboxID='${itemIndex}']`);

  activeItem.toggleClass("hidden").toggleClass("active");
  if (activeItem.next().length !== 0) {
    activeItem.next().toggleClass("hidden").toggleClass("active");
  } else {
    $(".lightbox__item:first-of-type()")
      .toggleClass("hidden")
      .toggleClass("active");
  }
});
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
