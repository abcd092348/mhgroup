
document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for navigation links
  const navigationLinks = document.querySelectorAll('nav a[href^="#"]');

  navigationLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // Reveal project cards as the visitor scrolls
  const projectCards = document.querySelectorAll(".project-card");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    projectCards.forEach(function (card) {
      observer.observe(card);
    });
  } else {
    projectCards.forEach(function (card) {
      card.classList.add("visible");
    });
  }
});
