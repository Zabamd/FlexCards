addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      if (card.className.includes("card_active")) {
        return;
      }
      document.querySelector(".card_active").classList.remove("card_active");
      card.classList.add("card_active");
    });
  });
});
