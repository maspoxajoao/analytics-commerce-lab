(() => {
  const form = document.querySelector("[data-checkout-form]");
  if (!form) return;

  const cart = Store.getCart();
  const summary = document.querySelector("[data-checkout-summary]");
  if (!cart.length) {
    form.innerHTML = `<div class="empty-state"><h2>Nenhum item para finalizar</h2><a class="button button-primary" href="products.html">Escolher produtos</a></div>`;
    if (summary) summary.innerHTML = "";
    return;
  }

  summary.innerHTML = `
    <div class="summary-card">
      <h3>Resumo do pedido</h3>
      ${cart.map((item) => `<div class="summary-line"><span>${item.quantity}× ${item.name}</span><strong>${Store.money(item.price * item.quantity)}</strong></div>`).join("")}
      <hr>
      <div class="summary-line"><span>Total</span><strong class="summary-total">${Store.money(Store.cartTotal())}</strong></div>
    </div>
  `;

  const user = Store.getUser();
  if (user) {
    const name = form.querySelector('[name="name"]');
    const email = form.querySelector('[name="email"]');
    if (name) name.value = user.name;
    if (email) email.value = user.email;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const order = {
      id: `ACL-${Date.now().toString().slice(-8)}`,
      currency: "BRL",
      value: Number(Store.cartTotal().toFixed(2)),
      items: cart.map((item) => ({
        item_id: item.id,
        item_name: item.name,
        item_category: item.category,
        price: item.price,
        quantity: item.quantity,
      })),
      createdAt: new Date().toISOString(),
    };

    Store.saveOrder(order);
    Store.clearCart();
    location.href = `thanks.html?order=${encodeURIComponent(order.id)}`;
  });
})();
