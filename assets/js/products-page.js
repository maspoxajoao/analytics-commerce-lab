(() => {
  const grid = document.querySelector("[data-products-grid]");
  if (!grid) return;

  const params = new URLSearchParams(location.search);
  const query = (params.get("q") || "").trim().toLowerCase();
  const category = (params.get("category") || "").trim();

  const searchInput = document.querySelector('[name="q"]');
  if (searchInput) searchInput.value = params.get("q") || "";

  const filtered = PRODUCTS.filter((product) => {
    const matchesQuery =
      !query ||
      [product.name, product.category, product.description]
        .join(" ")
        .toLowerCase()
        .includes(query);
    const matchesCategory = !category || product.category === category;
    return matchesQuery && matchesCategory;
  });

  const heading = document.querySelector("[data-results-title]");
  if (heading) {
    heading.textContent = query
      ? `Resultados para “${params.get("q")}”`
      : category
        ? category
        : "Todos os produtos";
  }
  const count = document.querySelector("[data-results-count]");
  if (count)
    count.textContent = `${filtered.length} produto${filtered.length === 1 ? "" : "s"}`;

  if (!filtered.length) {
    grid.innerHTML = `<div class="empty-state"><h3>Nenhum produto encontrado</h3><p>Tente outro termo de busca.</p></div>`;
    return;
  }

  grid.innerHTML = filtered
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
        <p>${product.description}</p>
        <div class="rating">★ ${product.rating}</div>
        <div class="product-row">
          <strong>${Store.money(product.price)}</strong>
          <button class="button button-small" type="button" data-add-product="${product.id}">Adicionar</button>
        </div>
      </div>
    </article>
  `,
    )
    .join("");

  grid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-add-product]");
    if (!button) return;
    const product = PRODUCTS.find((p) => p.id === button.dataset.addProduct);
    Store.addToCart(product);
    showToast(`${product.name} adicionado ao carrinho`);
  });
})();
