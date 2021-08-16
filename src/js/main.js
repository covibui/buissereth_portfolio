import "../css/main.css";
import $ from "jquery";

$(function () {
  // Execute on page load
});

// Modal controls
$(".close").on("click", function () {
  $(this).parent().toggleClass("hidden").toggleClass("flex");
  $("body").css("overflow-y", "scroll");
});

$(".gallery__item").on("click", function () {
  let itemIndex = $(this).attr("data-galleryID");
  let lightboxItem = $(`[data-lightboxID='${itemIndex}']`);

  $("#lightbox").removeClass("hidden").addClass("flex");
  $("body").css("overflow-y", "hidden");
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
