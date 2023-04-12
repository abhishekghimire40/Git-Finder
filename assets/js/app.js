"use strict";

/**
 Add eventListener on multiple elements
 *@param {nodelist} $elements Nodelist
 *@param {string} eventType String
 *@param {Function} callback function
*/

const addEventonElements = function ($elements, eventType, callback) {
  for (const items of $elements) {
    items.addEventListener(eventType, callback);
  }
};

/*
Header Scroll state
*/
const $header = document.querySelector("[data-header]"); //NodeElement
window.addEventListener("scroll", function () {
  $header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
});

/* Search toggle */
const $searchToggler = document.querySelector("[data-search-toggler]");
const $searchField = document.querySelector("[data-search-field");
let isExpanded = false; //boolean to check state if search field is expanded or not

$searchToggler.addEventListener("click", function () {
  $header.classList.toggle("search-active");
  isExpanded = !isExpanded;
  this.setAttribute("aria-expanded", isExpanded);
  $searchField.focus();
});
