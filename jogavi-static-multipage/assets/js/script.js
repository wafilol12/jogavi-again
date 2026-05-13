
const burgerBtn = document.getElementById("burgerBtn");
const mainNav = document.getElementById("mainNav");
const dropdownParents = document.querySelectorAll(".has-dropdown");
const currentPage = document.body.dataset.page;

if (burgerBtn && mainNav) {
  burgerBtn.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("show");
    burgerBtn.classList.toggle("active", isOpen);
    burgerBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}

dropdownParents.forEach((parent) => {
  const button = parent.querySelector(".nav-dropdown-btn");

  button.addEventListener("click", (event) => {
    event.stopPropagation();

    dropdownParents.forEach((item) => {
      if (item !== parent) item.classList.remove("open");
    });

    parent.classList.toggle("open");
  });
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".has-dropdown")) {
    dropdownParents.forEach((parent) => parent.classList.remove("open"));
  }
});

document.querySelectorAll(".main-nav a[data-page]").forEach((link) => {
  if (link.dataset.page === currentPage) {
    link.classList.add("active");
  }
});

document.querySelectorAll(".dropdown-menu a, .main-nav > ul > li > a").forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 780) {
      mainNav.classList.remove("show");
      burgerBtn.classList.remove("active");
      burgerBtn.setAttribute("aria-expanded", "false");
    }
  });
});

const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Form demo berhasil diklik. Untuk website asli, form ini bisa diarahkan ke email, WhatsApp, atau backend.");
  });
}
