# Analytics Commerce Lab

E-commerce fictício criado como laboratório para estudar e construir um projeto de portfólio em **Digital Analytics**.

O site foi preparado para acompanhar um curso de Google Analytics 4 sem entregar a implementação pronta. A ideia é adicionar GA4, GTM, Data Layer e eventos conforme as aulas avançam.

## Tecnologias do site

- HTML
- CSS
- JavaScript
- LocalStorage
- Imagens externas do Unsplash

Não há backend nem banco de dados. Para o objetivo deste projeto, isso é intencional.

## Como executar no VS Code

1. Abra a pasta `analytics-commerce-lab` no VS Code.
2. Instale a extensão **Live Server**, caso ainda não tenha.
3. Clique com o botão direito em `index.html`.
4. Escolha **Open with Live Server**.
5. O site abrirá normalmente em um endereço como `http://127.0.0.1:5500`.

## Fluxo do site

```text
Home
  ↓
Produtos
  ↓
Detalhe do produto
  ↓
Carrinho
  ↓
Checkout
  ↓
Compra concluída
```

Também há:

- Busca interna via `?q=`
- Download de arquivo CSV
- Link externo
- Vídeo incorporado
- Formulário de contato
- Login fictício para exercícios de User ID

## Importante: analytics ainda não está implementado

O arquivo `assets/js/analytics.js` foi deixado propositalmente sem código de GA4/GTM.

Você vai preencher essa parte durante o curso.

## Estrutura

```text
analytics-commerce-lab/
├── index.html
├── products.html
├── product.html
├── cart.html
├── checkout.html
├── thanks.html
├── account.html
├── contact.html
├── assets/
│   ├── css/styles.css
│   ├── js/
│   └── downloads/catalogo-produtos.csv
└── docs/
    ├── measurement-plan.md
    └── portfolio-plan.md
```

## Dados úteis para GTM / Data Layer

O site já expõe:

```javascript
window.PRODUCTS;
Store.getCart();
Store.getUser();
Store.getLastOrder();
```

Além disso, cards e áreas de produto usam atributos `data-*` para facilitar seletores e variáveis no GTM.

## Próximas etapas durante o curso

1. Instalar GA4 ou GTM.
2. Validar Enhanced Measurement.
3. Criar eventos e parâmetros.
4. Trabalhar Data Layer.
5. Implementar eventos de e-commerce.
6. Marcar conversões.
7. Integrar GA4 com BigQuery.
8. Criar consultas SQL.
9. Criar dashboard no Looker Studio.
10. Publicar o projeto e completar o README com screenshots e resultados.
