const menuToggle = document.querySelector(".menu-toggle");
const navList = document.querySelector(".nav-list");
const menuLinks = document.querySelectorAll(".nav-link");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navList.classList.toggle("active");
    menuToggle.classList.toggle("open");
  });
}

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (navList.classList.contains("active")) {
      navList.classList.remove("active");
      menuToggle.classList.remove("open");
    }
  });
});

const backToTopButton = document.getElementById("backToTop");

if (backToTopButton) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.add("show");
    } else {
      backToTopButton.classList.remove("show");
    }
  });

  backToTopButton.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

const navLinks = document.querySelectorAll(".nav-link");

if (navLinks[2]) {
  navLinks[2].classList.add("active-link");
}

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((nav) => nav.classList.remove("active-link"));
    this.classList.add("active-link");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const scrollContainers = document.querySelectorAll(".scroll-main-container");

  scrollContainers.forEach((container) => {
    const wrapper = container.querySelector(
      ".timeline-wrapper, .speakers-wrapper",
    );
    const prevBtn = container.querySelector(".scroll-nav-btn.prev");
    const nextBtn = container.querySelector(".scroll-nav-btn.next");

    if (!wrapper || !prevBtn || !nextBtn) return;

    const scrollAmount = 320;

    nextBtn.addEventListener("click", () => {
      wrapper.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });

    prevBtn.addEventListener("click", () => {
      wrapper.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });
  });
});
