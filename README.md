# Shopify Theme (OS 2.0)

This repository contains a lightweight, performant, Online Store 2.0-compatible Shopify theme with modular sections.

## Structure
- `layout/` base HTML wrapper
- `sections/` reusable, customizable sections (header, footer, product, collection, cart, banner, featured collection, rich text, search, etc.)
- `templates/` JSON templates mapping pages to sections
- `snippets/` small reusable fragments (price, social meta tags)
- `assets/` CSS/JS
- `config/` theme settings schema and data
- `locales/` translations

## Develop locally
1. Install Shopify CLI: https://shopify.dev/docs/themes/tools/cli/install
2. Authenticate and run the dev server from the repo root:

```bash
shopify login --store your-store.myshopify.com
shopify theme dev --store your-store.myshopify.com
```

## Deploy
```bash
# Upload as a new theme draft
shopify theme push --unpublished --allow-live --force

# Or update the currently connected theme
shopify theme push --force
```

## Notes
- Built for modern OS 2.0 (JSON templates, sections everywhere)
- Accessible, fast by default: semantic HTML, deferred JS, responsive images
- Extend via app blocks and additional sections as needed
