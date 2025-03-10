document.addEventListener("DOMContentLoaded", () => {
  const darkModeToggle = document.getElementById("darkModeToggle");
  const modeText = darkModeToggle.querySelector(".mode-text");

  // Function to update the text
  const updateModeText = (theme) => {
    modeText.textContent = theme === "dark" ? "Light Mode" : "Dark Mode";
  };

  // Check for saved dark mode preference
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
    updateModeText(savedTheme);
  } else {
    // Check the user's preferred color scheme
    const userPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const defaultTheme = userPrefersDark ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", defaultTheme);
    updateModeText(defaultTheme);
  }

  darkModeToggle.addEventListener("click", (e) => {
    e.preventDefault();
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateModeText(newTheme);
  });
});
