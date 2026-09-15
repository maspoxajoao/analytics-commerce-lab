(() => {
  const root = document.querySelector("[data-order-confirmation]");
  if (!root) return;
  const order = Store.getLastOrder();
  if (!order) {
    root.innerHTML = `<div class="empty-state"><h1>Nenhum pedido recente</h1><a class="button button-primary" href="products.html">Voltar à loja</a></div>`;
    return;
  }

  root.dataset.transactionId = order.id;
  root.dataset.value = order.value;
  root.dataset.currency = order.currency;

  root.innerHTML = `
    <div class="success-icon">✓</div>
    <span class="eyebrow">Compra simulada concluída</span>
    <h1>Pedido ${order.id}</h1>
    <p class="lead">Esta página foi preparada para você implementar e validar o evento <code>purchase</code> durante o curso.</p>
    <div class="order-box">
      ${order.items.map((item) => `<div class="summary-line"><span>${item.quantity}× ${item.item_name}</span><strong>${Store.money(item.price * item.quantity)}</strong></div>`).join("")}
      <hr>
      <div class="summary-line"><span>Total</span><strong>${Store.money(order.value)}</strong></div>
    </div>
    <a class="button button-primary" href="products.html">Continuar explorando</a>
  `;
})();
