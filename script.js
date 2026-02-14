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
// Galerie Lightbox
(() => {
  const box = document.getElementById("lightbox");
  if (!box) return;

  const boxImg = box.querySelector("img");
  const closeBtn = box.querySelector(".lightboxClose");

  document.querySelectorAll(".galleryItem img").forEach(img => {
    img.addEventListener("click", () => {
      boxImg.src = img.src;
      box.classList.add("open");
      box.setAttribute("aria-hidden", "false");
    });
  });

  const close = () => {
    box.classList.remove("open");
    box.setAttribute("aria-hidden", "true");
    boxImg.src = "";
  };

  closeBtn.addEventListener("click", close);
  box.addEventListener("click", (e) => {
    if (e.target === box) close();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && box.classList.contains("open")) close();
  });
})();
