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
const reviews = [
  "„Top Service, sehr präzise Arbeit und angenehme Atmosphäre.“",
  "„Bester Friseur in Münster. Beratung ehrlich und professionell.“",
  "„Sauberer Laden, freundliches Team und perfekter Schnitt.“",
  "„Termin schnell bekommen und super zufrieden mit dem Ergebnis.“",
  "„Moderne Schnitte, klare Übergänge und faire Preise.“"
];

let index = 0;
const reviewText = document.getElementById("reviewText");

function rotateReview(){
  index = (index + 1) % reviews.length;
  reviewText.style.opacity = 0;

  setTimeout(() => {
    reviewText.textContent = reviews[index];
    reviewText.style.opacity = 1;
  }, 300);
}

if(reviewText){
  reviewText.style.transition = "opacity .3s ease";
  setInterval(rotateReview, 4000);
}
