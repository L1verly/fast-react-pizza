import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Menu from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder from "./features/order/CreateOrder";
import Order from "./features/order/Order";
import Home from "./ui/Home";
import AppLayout from "./ui/AppLayout";
import Loader from "./ui/Loader";
import Error from "./ui/Error";
import { menuLoader, orderLoader } from "./services/loaders";
import { createOrderAction, updateOrderAction } from "./services/actions";

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
            action: createOrderAction,
          },
          {
            path: ":orderId",
            element: <Order />,
            loader: orderLoader,
            errorElement: <Error />,
            action: updateOrderAction,
          },
        ],
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
