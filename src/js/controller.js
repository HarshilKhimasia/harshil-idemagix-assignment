import "core-js/stable";
import "regenerator-runtime/runtime";

// Accordion Start
let acc = document.getElementsByClassName("accordion");
let activeAccordion = null; // Track the currently active accordion item

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    if (activeAccordion && activeAccordion !== this) {
      // Close the currently active accordion
      activeAccordion.classList.remove("active");
      let activePanel = activeAccordion.nextElementSibling;
      activePanel.style.maxHeight = null;
      activePanel.style.borderTop = "none"; // Reset the top border
      activePanel.style.borderBottom = "none"; // Reset the bottom border
    }

    this.classList.toggle("active");
    let panel = this.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;

      panel.style.borderTop = "none"; // Reset the top border
      panel.style.borderBottom = "none"; // Reset the bottom border
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";

      panel.style.borderTop = "2px solid #168DF7";
      panel.style.borderBottom = "2px solid #168DF7";
    }

    // Update the currently active accordion
    activeAccordion = this;
  });
}
// Accordion End

// owl carousel start
$(".patient-stories-owl").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 2,
    },
  },
});

$(".doctors-owl").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 3,
    },
  },
});

$(".hospitals-owl").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 3,
    },
  },
});
// owl carousel end

// hamburger animation start
$(document).ready(function () {
  $("#nav-icon2").click(function () {
    $(this).toggleClass("open");
  });
});

const crossed = document.querySelector("#nav-icon2");
const smallNav = document.querySelector(".small-nav");

crossed.addEventListener("click", function () {
  smallNav.classList.toggle("active-secondary");
});

// hamburger animation end

// loader start
// Initially, hide the content and show the loader
document.querySelector(".content").style.display = "none";
document.querySelector(".loader-container").style.display = "flex";

// After 3 seconds, hide the loader and show the content
setTimeout(function () {
  document.querySelector(".loader-container").style.display = "none";
  document.querySelector(".content").style.display = "block";
}, 2500); // 3000 milliseconds (3 seconds)
// loader end
