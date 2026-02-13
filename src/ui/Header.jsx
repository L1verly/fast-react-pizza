import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

export default function Header() {
  return (
    <header className="bg-yellow-500 uppercase">
      <Link to="/cart" className="tracking-widest">
        Fast React Pizza Ltd.
      </Link>
      <SearchOrder />
    </header>
  );
}
