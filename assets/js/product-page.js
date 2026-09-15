(() => {
  const root = document.querySelector("[data-product-detail]");
  if (!root) return;
  const id = new URLSearchParams(location.search).get("id") || PRODUCTS[0].id;
  const product = PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];

  document.title = `${product.name} | Analytics Commerce Lab`;
  root.dataset.productId = product.id;
  root.dataset.productName = product.name;
  root.dataset.productPrice = product.price;

  root.innerHTML = `
    <div class="product-detail-image">
      <img src="${product.image}" alt="${product.name}">
    </div>
    <div class="product-detail-info">
      <span class="eyebrow">${product.category}</span>
      <h1>${product.name}</h1>
      <div class="rating">★ ${product.rating} · 128 avaliações fictícias</div>
      <p class="lead">${product.description}</p>
      <div class="price-large">${Store.money(product.price)}</div>
      <ul class="feature-list">${product.features.map((item) => `<li>${item}</li>`).join("")}</ul>
      <div class="purchase-box">
        <label>Quantidade
          <input type="number" min="1" max="10" value="1" data-quantity>
        </label>
        <button class="button button-primary button-wide" type="button" data-add-detail>Adicionar ao carrinho</button>
      </div>
      <p class="microcopy">Projeto demonstrativo: não há cobrança real.</p>
    </div>
  `;

  root.querySelector("[data-add-detail]").addEventListener("click", () => {
    const quantity = Number(root.querySelector("[data-quantity]").value) || 1;
    Store.addToCart(product, quantity);
    showToast(`${product.name} adicionado ao carrinho`);
  });
})();
