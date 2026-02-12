# Feature categories

1. User
2. Menu
3. Cart
4. Order

## STATE "DOMAINS" / "SLICES"

    1. User -> Global UI state (no accounts, so stays in app)
    2. Menu -> Global remote state (menu is fetched from API)
    3. Cart -> Global UI state (stored in app)
    4. Order -> Global remote state (fetched and submitted to API)

# Pages

| Page name           | Route path      |
| ------------------- | --------------- |
| Homepage            | /               |
| Pizza menu          | /menu           |
| Cart                | /cart           |
| Placing new order   | /order/new      |
| Looking up an order | /order/:orderID |

# Tech Stack

| Purpose                 | Technology   |
| ----------------------- | ------------ |
| Routing                 | React Router |
| Styling                 | Tailwindcss  |
| Remote state management | React Router |
| UI state management     | Redux        |
