document.addEventListener("DOMContentLoaded", () => {
  const sections = [
    document.getElementById("profileSection"),
    document.getElementById("projectSection"),
    document.getElementById("techStack"),
    document.getElementById("connectSection"),
  ];

  let index = 0;
  function animateNext() {
    if (index < sections.length) {
      const sec = sections[index++];
      sec.classList.add("fade-in-up-active");
      sec.addEventListener("transitionend", function handler(e) {
        if (e.propertyName === "transform" || e.propertyName === "opacity") {
          sec.removeEventListener("transitionend", handler);
          animateNext();
        }
      });
    }
  }
  animateNext();
});
