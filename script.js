/*=============== FOOTER YEAR ===============*/
const footerYear = document.getElementById("footer-year");
if (footerYear) {
  footerYear.textContent = new Date().getFullYear();
}

/*=============== SWIPER PROJECTS ===============*/
if (window.Swiper) {
  new Swiper(".projects__swiper", {
    loop: true,
    spaceBetween: 24,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: { slidesPerView: 2 },
      1150: { slidesPerView: 3 },
    },
  });
}

/*=============== WORK TABS ===============*/
const workButtons = document.querySelectorAll("[data-target]");
const workContents = document.querySelectorAll("[data-content]");

workButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = document.querySelector(button.dataset.target);

    workContents.forEach((content) => content.classList.remove("work-active"));
    target.classList.add("work-active");

    workButtons.forEach((btn) => btn.classList.remove("work-active"));
    button.classList.add("work-active");
  });
});

/*=============== SERVICES ACCORDION ===============*/
const servicesButtons = document.querySelectorAll(".services__button");

servicesButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".services__card");
    card.classList.toggle("services__close");
    card.classList.toggle("services__open");

    const info = card.querySelector(".services__info");
    if (card.classList.contains("services__open")) {
      info.style.height = info.scrollHeight + "px";
      info.style.opacity = "1";
    } else {
      info.style.height = "0";
      info.style.opacity = "0";
    }
  });
});

/*=============== COPY EMAIL ===============*/
const contactButton = document.getElementById("contact-btn");
const contactEmail = document.getElementById("contact-email");

if (contactButton && contactEmail) {
  contactButton.addEventListener("click", () => {
    const email = contactEmail.textContent.trim();
    navigator.clipboard
      .writeText(email)
      .then(() => {
        const originalHTML = contactButton.innerHTML;
        contactButton.innerHTML = `Copied! <i class="ri-check-line"></i>`;
        setTimeout(() => {
          contactButton.innerHTML = originalHTML;
        }, 1800);
      })
      .catch(() => {
        console.warn("Clipboard copy failed.");
      });
  });
}

/*=============== ACTIVE NAV LINK ON SCROLL ===============*/
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav__link");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          link.classList.toggle("active-link", link.getAttribute("href") === `#${id}`);
        });
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);

sections.forEach((section) => sectionObserver.observe(section));
