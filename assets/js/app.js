(() => {
  const countEls = () =>
    document
      .querySelectorAll("[data-cart-count]")
      .forEach((el) => (el.textContent = Store.cartCount()));
  countEls();
  document.addEventListener("cart:updated", countEls);

  const current = document.body.dataset.page;
  document.querySelectorAll("[data-nav]").forEach((link) => {
    if (link.dataset.nav === current) link.classList.add("active");
  });

  document
    .querySelectorAll("[data-year]")
    .forEach((el) => (el.textContent = new Date().getFullYear()));

  const toast = document.querySelector("[data-toast]");
  window.showToast = (message) => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2200);
  };

  const user = Store.getUser();
  document.querySelectorAll("[data-user-label]").forEach((el) => {
    el.textContent = user ? `Olá, ${user.name}` : "Entrar";
  });
})();
