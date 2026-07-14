const hamburger = document.getElementById("hamburger");
const menu = document.querySelector(".menu");
const navlink = document.querySelectorAll(".navbar a");

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

navlink.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active"); // Menghapus class active di tombol hamburger
    menu.classList.remove("active"); // Menghapus class active di daftar menu agar menutup
  });
});
