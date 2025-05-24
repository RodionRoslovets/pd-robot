// FAQ Accordion
document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const header = item.querySelector(".faq-item__header");
    const content = item.querySelector(".faq-item__content");
    const toggle = item.querySelector(".faq-item__toggle");

    header.addEventListener("click", () => {
      // Close all other items
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem
            .querySelector(".faq-item__content")
            .classList.remove("active");
          otherItem
            .querySelector(".faq-item__toggle")
            .classList.remove("active");
        }
      });

      // Toggle current item
      content.classList.toggle("active");
      toggle.classList.toggle("active");
    });
  });
});
