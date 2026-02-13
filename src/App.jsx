import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Menu from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder from "./features/order/CreateOrder";
import Order from "./features/order/Order";
import AppLayout from "./ui/AppLayout";
import { menuLoader, orderLoader } from "./services/loaders";
import Loader from "./ui/Loader";
import Error from "./ui/Error";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    hydrateFallbackElement: <Loader />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order",
        children: [
          {
            path: "new",
            element: <CreateOrder />,
          },
          {
            path: ":orderId",
            element: <Order />,
            loader: orderLoader,
            errorElement: <Error />,
          },
        ],
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
