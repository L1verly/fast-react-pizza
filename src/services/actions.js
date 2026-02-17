import { redirect } from "react-router-dom";
import { createOrder } from "./apiRestaurant";
import { isValidPhone } from "../utils/helpers";
import store from "../store";
import { clearCart } from "../features/cart/cartSlice";
export async function createOrderAction({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
  };

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone =
      "Please provide correct phone number, we may need it to contact you.";

  if (Object.keys(errors).length > 0) return errors;

  // If everything is okay -> create new order
  const newOrder = await createOrder(order);

  store.dispatch(clearCart());

  return redirect(`/order/${newOrder.id}`);
}
