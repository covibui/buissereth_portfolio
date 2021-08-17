import "../css/main.css";
import $ from "jquery";

$(function () {
  // Execute on page load

  // Prevent flash of nav on page load
  if ($(window).width() < 768) {
    $("#nav__top ul").addClass("transition-transform");
  }
});

// Menu controls ----------------------------------------------------
$("#hamburger").on("click", function () {
  $(this).children().toggleClass("block").toggleClass("hidden");
  $("#nav__top ul").toggleClass("translate-x-full");
  $("body").toggleClass("overflow-y-hidden");
});

$(window).on("resize", function () {
  if ($(this).width() > 767) {
    console.log($("#hamburger"));
    $("#hamburger div:first-child").removeClass("hidden").addClass("block");
    console.log($("#hamburger div:first-child"));
    $("#hamburger div:last-child").removeClass("block").addClass("hidden");
    $("#nav__top ul")
      .addClass("translate-x-full")
      .removeClass("transition-transform");
  } else if ($(this).width() < 768) {
    $("#nav__top ul")
      .addClass("translate-x-full")
      .addClass("transition-transform");
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
