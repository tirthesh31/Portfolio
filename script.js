document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".navigation a");
  
    navLinks.forEach(link => {
      link.addEventListener("click", function(event) {
        event.preventDefault();
        const targetId = link.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: "smooth" });
      });
    });
  });
  
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav a");
    const sections = document.querySelectorAll(".content > div");

    navLinks.forEach((link, index) => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            // Remove fullscreen class from all sections
            sections.forEach(section => {
                section.classList.remove("fullscreen");
            });
            // Add fullscreen class to the selected section
            sections[index].classList.add("fullscreen");
        });
    });
});
