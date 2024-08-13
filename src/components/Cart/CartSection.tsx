import { useContext } from "react";
import CartContext from "../../store/CartContext";
import { currencyFormatter } from "../../utils/formatting";
import UserProgressContext from "../../store/UserProgressContext";
import CartItem from "./CartItem";

export default function CartSection() {
  const userProgressCtx = useContext(UserProgressContext);
  const cartCtx = useContext(CartContext);

  const totalCartItems = cartCtx.items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalCartPrice = cartCtx.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <div className="p-6 rounded-xl bg-white">
        <h2 className="text-xl font-bold text-red-700">
          Your Cart ({totalCartItems})
        </h2>
        {cartCtx.items.length === 0 ? (
          <div className="flex flex-col mt-6 p-4 items-center">
            <img
              src="/assets/images/illustration-empty-cart.svg"
              alt="Your cart is empty!"
            />
            <p className="mt-4 text-sm text-rose-500">
              Your added items will appear
            </p>
          </div>
        ) : (
          <>
            <div className="mt-6">
              {cartCtx.items.map((cartItem) => (
                <CartItem cartItem={cartItem} />
              ))}
            </div>
            <div className="mt-6 flex justify-between items-center">
              <span className="text-sm">Order Total</span>
              <span className="text-xl font-bold">
                {currencyFormatter.format(totalCartPrice)}
              </span>
            </div>
            <div className="mt-6 bg-rose-50 rounded-lg p-4 text-sm text flex justify-center items-center">
              <img
                src="/assets/images/icon-carbon-neutral.svg"
                alt="This is a carbon-neutral delivery"
              />
              <div className="ml-2">
                This is a <span className="font-semibold">carbon-neutral</span>{" "}
                delivery
              </div>
            </div>

            <button
              className="mt-6 w-full flex p-4 bg-red-700 rounded-full text-white font-semibold justify-center hover:bg-red-900"
              onClick={userProgressCtx.showCheckout}
            >
              Confirm Order
            </button>
          </>
        )}
      </div>
    </>
  );
}
