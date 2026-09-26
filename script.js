document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  const yearTarget = document.getElementById("year");
  if (yearTarget) {
    yearTarget.textContent = new Date().getFullYear();
  }

  document.querySelectorAll(".js-form").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const status = form.querySelector(".form-status");
      if (status) {
        status.textContent = "Thanks! We received your message and will reach out soon.";
      }
      form.reset();
    });
  });
});
