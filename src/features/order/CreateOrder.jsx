import { Form, useActionData, useNavigation } from "react-router-dom";
import Button from "../../ui/Button";
import FormInput from "../../ui/FormInput";
import EmptyCart from "../cart/EmptyCart";
import { useDispatch, useSelector } from "react-redux";
import { fetchAddress } from "../user/userSlice";
import { getCart, getTotalCartPrice } from "../cart/cartSlice";
import { formatCurrency } from "../../utils/helpers";
import { useState } from "react";
import FormError from "../../ui/FormError";

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;
  const {
    username,
    status: addressLoadingStatus,
    position,
    address,
    error: errorAddress,
  } = useSelector((state) => state.user);
  const isLoadingAddress = addressLoadingStatus === "loading";
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const formErrors = useActionData();

  function handleGetPosition(e) {
    e.preventDefault();
    dispatch(fetchAddress());
  }

  if (!cart.length) return <EmptyCart />;
  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Let's go!</h2>

      <Form method="POST" action="/order/new">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40" htmlFor="username-field">
            First Name
          </label>
          <FormInput
            id="username-field"
            type="text"
            name="customer"
            className="grow"
            defaultValue={username}
          />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40" htmlFor="phone-field">
            Phone number
          </label>
          <div className="grow">
            <FormInput
              id="phone-field"
              type="tel"
              name="phone"
              className="w-full"
            />
            {formErrors?.phone && <FormError errorMessage={formErrors.phone} />}
          </div>
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40" htmlFor="address-field">
            Address
          </label>
          <div className="relative grow">
            <FormInput
              id="address-field"
              type="text"
              name="address"
              className="w-full"
              disabled={isLoadingAddress}
              defaultValue={address}
            />
            {addressLoadingStatus === "error" && (
              <FormError errorMessage={errorAddress} />
            )}
            {!position.latitude && !position.longitude && (
              <span className="absolute top-[0.2rem] right-1 z-50 md:top-[0.3rem]">
                <Button
                  type="small"
                  onClick={handleGetPosition}
                  disabled={isLoadingAddress}
                >
                  {isLoadingAddress ? "Loading..." : "Get Position"}
                </Button>
              </span>
            )}
          </div>
        </div>

        <div className="mb-10 flex items-center gap-5">
          <input
            className="size-6 accent-yellow-500 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:outline-none"
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <input
            type="hidden"
            name="position"
            value={
              position.longitude && position.latitude
                ? `${position.latitude}, ${position.longitude}`
                : ""
            }
          />
          <Button type="primary" disabled={isSubmitting}>
            {isSubmitting
              ? "Placing order..."
              : `Order now for ${formatCurrency(totalPrice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default CreateOrder;
