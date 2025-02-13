document.addEventListener("DOMContentLoaded", () => {
  const tabletQuery = window.matchMedia("(max-width: 768px)");

  if (!tabletQuery.matches) return;

  const headerBurger = document.getElementById("header-burger");
  const headerMenu = headerBurger.parentElement.firstElementChild;

  headerBurger.addEventListener("click", () => {
    headerBurger.classList.toggle("open");
    headerMenu.classList.toggle("open");
    document.body.classList.toggle("lock");
  });

  headerMenu.addEventListener("click", (event) => {
    const attributeHref = event.target.getAttribute("href");

    if (attributeHref.startsWith("/#")) {
      headerBurger.classList.remove("open");
      headerMenu.classList.remove("open");
      document.body.classList.remove("lock");
    }
  });
});
