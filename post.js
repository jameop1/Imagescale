// post.js — shared JS for individual post pages
(function () {
  const htmlEl = document.documentElement;
  const btn = document.getElementById("btn-theme-toggle");
  const label = document.getElementById("theme-label-text");

  function applyTheme(theme) {
    htmlEl.setAttribute("data-theme", theme);
    if (label) {
      label.textContent = theme === "light" ? "CHARCOAL" : "BONE WHITE";
    }
  }

  // Sync state on load
  const currentTheme = htmlEl.getAttribute("data-theme") || "light";
  applyTheme(currentTheme);

  if (!btn) return;
  btn.addEventListener("click", () => {
    const next = htmlEl.getAttribute("data-theme") === "light" ? "dark" : "light";
    try {
      localStorage.setItem("photoscale_theme", next);
    } catch (e) {}
    applyTheme(next);
  });
})();
