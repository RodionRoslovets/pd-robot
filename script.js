/* SLIDE UP */
const slideUp = (target, duration = 500, callback = () => {}) => {
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + "ms";
  target.style.boxSizing = "border-box";
  target.style.height = target.offsetHeight + "px";
  target.offsetHeight;
  target.style.overflow = "hidden";
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  window.setTimeout(() => {
    target.style.display = "none";
    callback();
    target.style.removeProperty("height");
    target.style.removeProperty("padding-top");
    target.style.removeProperty("padding-bottom");
    target.style.removeProperty("margin-top");
    target.style.removeProperty("margin-bottom");
    target.style.removeProperty("overflow");
    target.style.removeProperty("transition-duration");
    target.style.removeProperty("transition-property");
  }, duration);
};

/* SLIDE DOWN */
const slideDown = (target, duration = 500, callback = () => {}) => {
  callback();
  target.style.removeProperty("display");
  let display = window.getComputedStyle(target).display;
  if (display === "none") display = "block";
  target.style.display = display;
  let height = target.offsetHeight;
  target.style.overflow = "hidden";
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.offsetHeight;
  target.style.boxSizing = "border-box";
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + "ms";
  target.style.height = height + "px";
  target.style.removeProperty("padding-top");
  target.style.removeProperty("padding-bottom");
  target.style.removeProperty("margin-top");
  target.style.removeProperty("margin-bottom");
  window.setTimeout(() => {
    target.style.removeProperty("height");
    target.style.removeProperty("overflow");
    target.style.removeProperty("transition-duration");
    target.style.removeProperty("transition-property");
  }, duration);
};

document.addEventListener("DOMContentLoaded", () => {
  //swiper
  const slider = document.querySelector(".reviews-swiper");

  if (slider && window.Swiper) {
    const sw = new window.Swiper(slider, { loop: true, slidesPerView: 2 });

    const prevBtn = document.querySelector(".slider-button-prev");
    const nextBtn = document.querySelector(".slider-button-next");

    prevBtn.addEventListener("click", () => {
      sw.slidePrev();
    });
    nextBtn.addEventListener("click", () => {
      sw.slideNext();
    });
  }

  //accordeons faq
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const header = item.querySelector(".faq-item__header");
    const content = item.querySelector(".faq-item__content");
    const toggle = item.querySelector(".faq-item__toggle");

    header.addEventListener("click", () => {
      // Close all other items
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          slideUp(otherItem.querySelector(".faq-item__content"));

          otherItem
            .querySelector(".faq-item__toggle")
            .classList.remove("active");
        }
      });

      if (toggle.classList.contains("active")) {
        slideUp(content);
        toggle.classList.toggle("active");
      } else {
        slideDown(content);
        toggle.classList.toggle("active");
      }
    });
  });

  //navigation
  const navLinks = document.querySelectorAll(
    ".header__nav-link, .footer__nav-link"
  );

  if (navLinks.length > 0) {
    navLinks.forEach((nav) => {
      nav.addEventListener("click", (e) => {
        e.preventDefault();

        document.querySelector(`.${e.target.dataset.to}`).scrollIntoView();
      });
    });
  }

  //header
  const header = document.querySelector(".header");

  if (header) {
    document.addEventListener(
      "scroll",
      () => {
        header.classList.toggle("header--active", window.pageYOffset > 100);
      },
      { passive: true }
    );
  }
});
