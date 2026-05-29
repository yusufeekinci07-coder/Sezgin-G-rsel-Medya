window.addEventListener("scroll", () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const pos = card.getBoundingClientRect().top;
    const screen = window.innerHeight;

    if(pos < screen - 100){
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    } else {
      card.style.opacity = "0";
      card.style.transform = "translateY(30px)";
    }
  });
});
