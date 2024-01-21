console.log("Links connected");

// Change color of the lines when hovering link
$("a")
  .on("mouseenter", function () {
    $("[line]").css("background-color", "var(--light--cursor--line--hover)");
    $(".cursor-position-wrap").css("opacity", "0");
    $(".cursor-inner").addClass("is--link");

    // css("background-color", "var(--light--cursor--hover)");
  })
  .on("mouseleave", function () {
    $("[line]").css("background-color", "var(--light--cursor--line--default)");
    $(".cursor-position-wrap").css("opacity", "1");
    $(".cursor-inner").removeClass("is--link");
  });

//darkmode

function load() {
  const toggleButton = document.querySelector("#btn-dark");
  const autoButton = document.querySelector("#btn-auto");

  // MediaQueryList object
  const useDark = window.matchMedia("(prefers-color-scheme: dark)");

  // Toggles the "dark-mode" class based on if the media query matches
  function toggleDarkMode(state) {
    document.documentElement.classList.toggle("dark-mode", state);
  }

  // Initial setting
  // toggleDarkMode(useDark.matches);

  // Listen for changes in the OS settings
  useDark.addListener((evt) => toggleDarkMode(evt.matches));

  // Toggles the "dark-mode" class on click
  toggleButton.addEventListener("click", () => {
    let textButton = document.getElementById("color-mode-text");
    let text = textButton.textContent;

    document.documentElement.classList.toggle("dark-mode");

    if ($("html").hasClass("dark-mode")) {
      $(textButton).text("light");
      localStorage.setItem("dark-mode", "true");
    } else {
      $(textButton).text("dark");
      localStorage.removeItem("dark-mode");
    }
  });
}

window.addEventListener("DOMContentLoaded", load);
