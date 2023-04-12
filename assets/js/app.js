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

/*
Tab navigation
*/
const $tabBtns = document.querySelectorAll("[data-tab-btn]"); //nodeList
const $tabPanels = document.querySelectorAll("[data-tab-panel]"); //nodeList

let [$lastActiveTabBtn] = $tabBtns;
let [$lastActiveTabPanel] = $tabPanels;

addEventonElements($tabBtns, "click", function () {
  $lastActiveTabBtn.setAttribute("aria-selected", "false");
  $lastActiveTabPanel.setAttribute("hidden", "");
  this.setAttribute("aria-selected", "true");
  // get the panel name using aria-controls attribute to set the current panel
  const $currentTabPanel = document.querySelector(
    `#${this.getAttribute("aria-controls")}`
  );
  $currentTabPanel.removeAttribute("hidden");
  $lastActiveTabBtn = this;
  $lastActiveTabPanel = $currentTabPanel;
});

// keyboard accesibility for tab buttons
addEventonElements($tabBtns, "keydown", function (e) {
  const $nextElement = this.nextElementSibling;
  const $previousElement = this.previousElementSibling;
  if (e.key === "ArrowRight" && $nextElement) {
    this.setAttribute("tabindex", "-1");
    $nextElement.setAttribute("tabindex", "0");
    $nextElement.focus();
  } else if (e.key === "ArrowLeft" && $previousElement) {
    this.setAttribute("tabindex", "-1");
    $previousElement.setAttribute("tabindex", "0");
    $previousElement.focus();
  }
});
