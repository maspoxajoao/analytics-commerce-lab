(() => {
  const root = document.querySelector("[data-account-root]");
  if (!root) return;

  const render = () => {
    const user = Store.getUser();
    if (user) {
      root.innerHTML = `
        <div class="account-card">
          <span class="eyebrow">Cliente demo</span>
          <h1>${user.name}</h1>
          <p>${user.email}</p>
          <p class="microcopy">ID fictício disponível para exercícios de User ID: <code>${user.id}</code></p>
          <button class="button" type="button" data-logout>Sair</button>
        </div>`;
      root.querySelector("[data-logout]").addEventListener("click", () => {
        Store.logout();
        location.reload();
      });
      return;
    }

    root.innerHTML = `
      <div class="account-card">
        <span class="eyebrow">Laboratório de User ID</span>
        <h1>Entrar como cliente demo</h1>
        <p>Use este login fictício quando chegar ao módulo de identificação do usuário. Nenhuma senha real é necessária.</p>
        <form class="stack-form" data-demo-login>
          <label>Nome<input name="name" value="Cliente Demo" required></label>
          <label>E-mail<input name="email" type="email" value="cliente.demo@example.com" required></label>
          <button class="button button-primary" type="submit">Entrar</button>
        </form>
      </div>`;

    root
      .querySelector("[data-demo-login]")
      .addEventListener("submit", (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        Store.setUser({
          id: "user_demo_001",
          name: data.get("name"),
          email: data.get("email"),
        });
        location.reload();
      });
  };

  render();
})();
