import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}
