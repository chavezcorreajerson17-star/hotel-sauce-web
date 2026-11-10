
// IMPORTANTE: reemplaza este valor por el número real del hotel.
// Formato internacional sin + ni espacios. Ejemplo Perú: 51987654321
const WHATSAPP_NUMBER = "51947950446";

function openWhatsApp(message) {
  if (WHATSAPP_NUMBER.includes("X")) {
    alert("Falta configurar el número real de WhatsApp del hotel en script.js.");
    return;
  }
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

document.querySelectorAll(".btn-whatsapp").forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();
    openWhatsApp(btn.dataset.message || "Hola, quisiera información sobre Hotel Sauce.");
  });
});

const header = document.querySelector(".site-header");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 24);
});

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});
document.querySelectorAll(".nav a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

const slides = [...document.querySelectorAll(".hero-img")];
const dots = [...document.querySelectorAll(".dot")];
let current = 0;
let timer;

function showSlide(index) {
  current = index;
  slides.forEach((slide, i) => slide.classList.toggle("active", i === index));
  dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
}
function autoplay() {
  clearInterval(timer);
  timer = setInterval(() => showSlide((current + 1) % slides.length), 5000);
}
dots.forEach(dot => dot.addEventListener("click", () => {
  showSlide(Number(dot.dataset.slide));
  autoplay();
}));
autoplay();

const filters = document.querySelectorAll(".filter");
const items = document.querySelectorAll(".gallery-item");
filters.forEach(filter => {
  filter.addEventListener("click", () => {
    filters.forEach(f => f.classList.remove("active"));
    filter.classList.add("active");
    const value = filter.dataset.filter;
    items.forEach(item => {
      item.classList.toggle("hidden", value !== "all" && item.dataset.category !== value);
    });
  });
});

const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector("img");
items.forEach(item => {
  item.addEventListener("click", () => {
    lightboxImg.src = item.dataset.full;
    lightbox.showModal();
  });
});
lightbox.querySelector(".lightbox-close").addEventListener("click", () => lightbox.close());
lightbox.addEventListener("click", e => {
  if (e.target === lightbox) lightbox.close();
});

document.getElementById("year").textContent = new Date().getFullYear();
