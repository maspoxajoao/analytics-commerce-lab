# Plano de Mensuração — Analytics Commerce Lab

> Este documento é um guia de trabalho. Não implemente tudo de uma vez; preencha e ajuste conforme o curso avançar.

## Objetivo do projeto

Mensurar a jornada de navegação e compra de um e-commerce fictício, permitindo análises de aquisição, engajamento, comportamento e conversão.

## Jornada principal

1. Home
2. Lista de produtos
3. Detalhe do produto
4. Adição ao carrinho
5. Carrinho
6. Checkout
7. Compra concluída

## Eventos que o site permite praticar

| Momento                  | Evento sugerido       | Onde acontece             |
| ------------------------ | --------------------- | ------------------------- |
| Visualização de página   | `page_view`           | Todas as páginas          |
| Scroll                   | `scroll`              | Páginas longas            |
| Busca                    | `view_search_results` | `products.html?q=...`     |
| Clique externo           | `click`               | Link externo no rodapé    |
| Download                 | `file_download`       | Catálogo CSV no rodapé    |
| Vídeo                    | eventos de vídeo      | Home                      |
| Lista de produtos        | `view_item_list`      | Home / Produtos           |
| Seleção de produto       | `select_item`         | Cards de produto          |
| Produto                  | `view_item`           | `product.html`            |
| Adição ao carrinho       | `add_to_cart`         | Home / Produtos / Produto |
| Visualização do carrinho | `view_cart`           | `cart.html`               |
| Início do checkout       | `begin_checkout`      | Link para checkout        |
| Compra                   | `purchase`            | `thanks.html`             |
| Formulário               | evento de formulário  | `contact.html`            |
| Login demo               | evento customizado    | `account.html`            |

## Dados já disponíveis no site

- `window.PRODUCTS`
- `Store.getCart()`
- `Store.getUser()`
- `Store.getLastOrder()`
- Atributos `data-product-id`, `data-product-name` e `data-product-price`

## Funil sugerido

`view_item_list → select_item → view_item → add_to_cart → view_cart → begin_checkout → purchase`

## UTMs para testes

Abra a Home usando URLs como:

```text
http://127.0.0.1:5500/index.html?utm_source=instagram&utm_medium=social&utm_campaign=lancamento
```

```text
http://127.0.0.1:5500/index.html?utm_source=google&utm_medium=cpc&utm_campaign=perifericos
```

Observação: para estudo, abra essas URLs diretamente no navegador. Em projetos reais, não use UTMs para navegação interna do próprio site.
