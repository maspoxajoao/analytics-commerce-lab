window.Store = (() => {
  const CART_KEY = "analyticsLab:cart";
  const USER_KEY = "analyticsLab:user";
  const ORDER_KEY = "analyticsLab:lastOrder";

  const money = (value) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);

  const read = (key, fallback) => {
    try {
      return JSON.parse(localStorage.getItem(key)) ?? fallback;
    } catch {
      return fallback;
    }
  };

  const write = (key, value) =>
    localStorage.setItem(key, JSON.stringify(value));

  const getCart = () => read(CART_KEY, []);
  const setCart = (cart) => {
    write(CART_KEY, cart);
    document.dispatchEvent(new CustomEvent("cart:updated"));
  };

  const addToCart = (product, quantity = 1) => {
    const cart = getCart();
    const existing = cart.find((item) => item.id === product.id);
    if (existing) existing.quantity += quantity;
    else cart.push({ ...product, quantity });
    setCart(cart);
  };

  const updateQuantity = (id, quantity) => {
    let cart = getCart();
    cart = cart.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item,
    );
    setCart(cart);
  };

  const removeFromCart = (id) =>
    setCart(getCart().filter((item) => item.id !== id));
  const clearCart = () => setCart([]);
  const cartCount = () =>
    getCart().reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = () =>
    getCart().reduce((sum, item) => sum + item.price * item.quantity, 0);

  const getUser = () => read(USER_KEY, null);
  const setUser = (user) => write(USER_KEY, user);
  const logout = () => localStorage.removeItem(USER_KEY);

  const saveOrder = (order) => write(ORDER_KEY, order);
  const getLastOrder = () => read(ORDER_KEY, null);

  return {
    money,
    getCart,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    cartCount,
    cartTotal,
    getUser,
    setUser,
    logout,
    saveOrder,
    getLastOrder,
  };
})();
