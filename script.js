"use strict";
const body = document.querySelector("body");
const darkMode = document.querySelector(".dark-mode");
const pathIcon = document.querySelectorAll(".icon svg path");
const linkHighlight = document.querySelector(
  "link[href='https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.0/styles/a11y-dark.min.css']"
);
const dotted = document.querySelectorAll(".dotted");
const typer = document.querySelector(".typer");
const codes = document.querySelectorAll("code");
const header = document.querySelector("header");
const observerC = document.querySelector(".observer-c");

// dotted code
dotted.forEach(function (el) {
  el.innerHTML = "&#9679;";
});

//typer
let counter = 1;
let temporary = ` وقتی پروژه‌ای رو شروع می‌کنید، این ساختار اولیه پروژه‌تون هستش، درسته ؟
`;
function typerF() {
  const timer = setTimeout(function () {
    typer.innerHTML = temporary.slice(0, counter);
    counter++;
    typerF();
  }, 100);
  if (counter === temporary.length) clearTimeout(timer);
}
typerF();

darkMode.addEventListener("click", function () {
  // setting dark class to body
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    // changing terminal background
    linkHighlight.rel = "s";

    // changing color(fill) of jquery svg
    pathIcon.forEach(function (el) {
      el.setAttribute("fill", "#e5e5e5");
    });
  } else {
    // changing color(fill) of jquery svg
    pathIcon.forEach(function (el) {
      el.setAttribute("fill", "#131B28");
    });
    // changing terminal background
    linkHighlight.rel = "stylesheet";
  }
});

/// fixed header
const options = {
  root: null,
  threshold: 0,
  rootMargin: `-${20}px`,
};
function callbackO(entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) header.classList.add("fixed-c");
  else header.classList.remove("fixed-c");
}

const observer = new IntersectionObserver(callbackO, options);
observer.observe(observerC);
console.log("%c Mohammadbagher Baqeryan", "color:#2ecc71;font-size:40px");
