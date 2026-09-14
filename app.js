const menuButton = document.querySelector("#menuButton");
const mainNav = document.querySelector("#mainNav");

menuButton.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedFilter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    projectCards.forEach((card) => {
      const shouldShow = selectedFilter === "all" || card.dataset.status === selectedFilter;
      card.classList.toggle("is-hidden", !shouldShow);
    });
  });
});
