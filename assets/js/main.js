// Greece Culinary Work-Based Learning — shared site behavior
// Handles the collapsible mobile navigation. No external dependencies.

document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("main-nav");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", function () {
    var isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Close the mobile menu after a nav link is chosen
  nav.addEventListener("click", function (event) {
    if (event.target.tagName === "A" && nav.classList.contains("is-open")) {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });

  // Close the mobile menu on Escape for keyboard users
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && nav.classList.contains("is-open")) {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.focus();
    }
  });

  // Contact page: this is a coursework prototype with no live backend yet.
  // Replace this handler with a real submission (fetch/POST or form service)
  // once a district-approved endpoint is available.
  var contactForm = document.getElementById("contact-form");
  var contactStatus = document.getElementById("contact-form-status");
  if (contactForm && contactStatus) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      contactStatus.textContent =
        "This is a course project draft — the form is not yet connected to a real inbox.";
    });
  }
});
