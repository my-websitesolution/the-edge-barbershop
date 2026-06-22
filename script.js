const hamburger = document.getElementById("hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
});

const tambahan = document.querySelector(".tambahan");

const more = document.getElementById("more");

more.addEventListener("click", () => {
  tambahan.classList.toggle("show");

  if (tambahan.classList.contains("show")) {
    more.textContent = "Read Less";
  } else {
    more.textContent = "Learn More ";
  }
});
