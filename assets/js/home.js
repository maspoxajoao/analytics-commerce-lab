(() => {
  const target = document.querySelector("[data-featured-products]");
  if (!target) return;
  target.innerHTML = PRODUCTS.slice(0, 4)
    .map(
      (product) => `
    <article class="product-card" data-product-card data-product-id="${product.id}" data-product-name="${product.name}" data-product-price="${product.price}">
      <a class="product-image-wrap" href="product.html?id=${product.id}" data-product-link>
        <img class="product-image" src="${product.image}" alt="${product.name}" loading="lazy">
        <span class="badge">${product.badge}</span>
      </a>
      <div class="product-card-body">
        <span class="eyebrow">${product.category}</span>
        <h3><a href="product.html?id=${product.id}">${product.name}</a></h3>
        <div class="rating">★ ${product.rating}</div>
        <div class="product-row">
          <strong>${Store.money(product.price)}</strong>
          <button class="icon-btn" type="button" aria-label="Adicionar ${product.name} ao carrinho" data-add-home="${product.id}">+</button>
        </div>
      </div>
    </article>
  `,
    )
    .join("");

  target.addEventListener("click", (event) => {
    const button = event.target.closest("[data-add-home]");
    if (!button) return;
    const product = PRODUCTS.find((p) => p.id === button.dataset.addHome);
    Store.addToCart(product);
    showToast(`${product.name} adicionado ao carrinho`);
  });
})();
