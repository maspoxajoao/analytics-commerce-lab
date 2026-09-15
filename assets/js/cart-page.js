(() => {
  const root = document.querySelector("[data-cart-items]");
  if (!root) return;

  const render = () => {
    const cart = Store.getCart();
    const summary = document.querySelector("[data-cart-summary]");

    if (!cart.length) {
      root.innerHTML = `<div class="empty-state"><h2>Seu carrinho está vazio</h2><p>Adicione produtos para continuar o laboratório de e-commerce.</p><a class="button button-primary" href="products.html">Ver produtos</a></div>`;
      if (summary) summary.innerHTML = "";
      return;
    }

    root.innerHTML = cart
      .map(
        (item) => `
      <article class="cart-item" data-cart-item="${item.id}" data-product-id="${item.id}" data-product-name="${item.name}" data-product-price="${item.price}">
        <img src="${item.image}" alt="${item.name}">
        <div>
          <span class="eyebrow">${item.category}</span>
          <h3>${item.name}</h3>
          <button class="text-button" type="button" data-remove="${item.id}">Remover</button>
        </div>
        <label class="qty-control">Qtd.
          <input type="number" min="1" max="10" value="${item.quantity}" data-qty="${item.id}">
        </label>
        <strong>${Store.money(item.price * item.quantity)}</strong>
      </article>
    `,
      )
      .join("");

    summary.innerHTML = `
      <div class="summary-card">
        <span>Subtotal</span><strong>${Store.money(Store.cartTotal())}</strong>
        <span>Frete</span><strong>Grátis</strong>
        <hr>
        <span>Total</span><strong class="summary-total">${Store.money(Store.cartTotal())}</strong>
        <a class="button button-primary button-wide" href="checkout.html" data-begin-checkout>Ir para checkout</a>
      </div>
    `;
  };

  root.addEventListener("change", (event) => {
    const input = event.target.closest("[data-qty]");
    if (!input) return;
    Store.updateQuantity(input.dataset.qty, Number(input.value) || 1);
    render();
  });

  root.addEventListener("click", (event) => {
    const btn = event.target.closest("[data-remove]");
    if (!btn) return;
    Store.removeFromCart(btn.dataset.remove);
    render();
  });

  render();
})();
