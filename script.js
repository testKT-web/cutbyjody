(() => {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  // Footer year
  const year = $("#year");
  if (year) year.textContent = String(new Date().getFullYear());

  // Mobile nav
  const burger = $("[data-burger]");
  const mobileNav = $("[data-mobile-nav]");

  if (burger && mobileNav) {
    burger.addEventListener("click", () => {
      const open = mobileNav.style.display === "block";
      mobileNav.style.display = open ? "none" : "block";
      burger.setAttribute("aria-expanded", String(!open));
    });

    $$("#[data-mobile-nav] a").forEach(a => {
      a.addEventListener("click", () => {
        mobileNav.style.display = "none";
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Booking modal
  const modal = $("[data-modal]");
  const openers = $$("[data-open-booking]");
  const closers = $$("[data-close]");

  function openModal() {
    if (!modal) return;
    modal.hidden = false;
    document.documentElement.style.overflow = "hidden";
  }
  function closeModal() {
    if (!modal) return;
    modal.hidden = true;
    document.documentElement.style.overflow = "";
  }

  openers.forEach(btn => btn.addEventListener("click", openModal));
  closers.forEach(btn => btn.addEventListener("click", closeModal));

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && !modal.hidden) closeModal();
  });

  // Hero image rotation (simple, classy, not a circus)
  const heroImgs = $$("[data-hero-img]");
  if (heroImgs.length > 1) {
    let i = 0;
    setInterval(() => {
      heroImgs[i].classList.remove("hero__img--active");
      i = (i + 1) % heroImgs.length;
      heroImgs[i].classList.add("hero__img--active");
    }, 5500);
  }

  // Gallery lightbox
  const lightbox = $("[data-lightbox]");
  const lbImg = $("[data-lightbox-img]");
  const lbClose = $$("[data-lightbox-close]");
  const gallery = $("[data-gallery]");

  function openLightbox(src) {
    if (!lightbox || !lbImg) return;
    lbImg.src = src;
    lightbox.hidden = false;
    document.documentElement.style.overflow = "hidden";
  }
  function closeLightbox() {
    if (!lightbox) return;
    lightbox.hidden = true;
    if (lbImg) lbImg.src = "";
    document.documentElement.style.overflow = "";
  }

  if (gallery) {
    gallery.addEventListener("click", (e) => {
      const btn = e.target.closest("button[data-full]");
      if (!btn) return;
      openLightbox(btn.getAttribute("data-full"));
    });
  }
  lbClose.forEach(x => x.addEventListener("click", closeLightbox));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox && !lightbox.hidden) closeLightbox();
  });
})();
