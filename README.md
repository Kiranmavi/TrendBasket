# TrendBasket

## Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Zustand (for global state management)
- Lucide React (icons)

## Product Detail Navigation

This project uses a global state (`useProductStore`) to manage which product is selected for the detail view. Instead of using dynamic route parameters (like `/products/[id]`), the app sets the selected product's ID in the global store and navigates to a static detail page (`/products/detail`).

### How it works

- When a user clicks on a product card, the product's ID is saved in the global state.
- The app then navigates to `/products/detail`.
- The detail page reads the selected product ID from the global state and displays the corresponding product.

### How to add new product navigation

1. In your product listing (e.g., `ProductCard`), call `setSelectedId(product.id)` and then navigate to `/products/detail` when a product is clicked.
2. The detail page will automatically show the correct product based on the global state.

**Note:** If a user visits `/products/detail` directly without selecting a product first, the page may not display a product. You may want to handle this case with a fallback or redirect.