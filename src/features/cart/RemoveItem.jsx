import { useDispatch } from "react-redux";
import { removeItem } from "./cartSlice";
import Button from "../../ui/Button";

export default function RemoveItem({ pizzaId }) {
  const dispatch = useDispatch();
  return (
    <Button type="small" onClick={() => dispatch(removeItem(pizzaId))}>
      Remove
    </Button>
  );
}
