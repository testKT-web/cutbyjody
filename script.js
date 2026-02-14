(() => {
  const burger = document.querySelector("[data-burger]");
  const mobileNav = document.querySelector("[data-mobile-nav]");
  const year = document.getElementById("year");

  if (year) year.textContent = String(new Date().getFullYear());

  if (burger && mobileNav) {
    burger.addEventListener("click", () => {
      const open = mobileNav.style.display === "block";
      mobileNav.style.display = open ? "none" : "block";
      burger.setAttribute("aria-expanded", String(!open));
    });

    mobileNav.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        mobileNav.style.display = "none";
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }
})();
