import { useContext } from "react";
import CartContext from "../../store/CartContext";
import { currencyFormatter } from "../../utils/formatting";
import UserProgressContext from "../../store/UserProgressContext";
import Modal from "../ui/Modal";
import IconOrderConfirmedUrl from "/assets/images/icon-order-confirmed.svg";

export default function CheckoutModal() {
  const userProgressCtx = useContext(UserProgressContext);
  const cartCtx = useContext(CartContext);

  const totalCartPrice = cartCtx.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  function handleCloseCheckout() {
    userProgressCtx.hideCheckout();
    cartCtx.clearCart();
  }

  return (
    <Modal
      className="rounded-lg py-10 px-6 md:p-10 w-[600px]"
      open={userProgressCtx.progress === "checkout"}
      onClose={handleCloseCheckout}
    >
      <>
        <img src={IconOrderConfirmedUrl} alt="Order Confirmed" />
        <h1 className="mt-6 text-2xl font-bold">Order Confirmed</h1>
        <div className="mt-2 text-rose-500">We hope you enjoy your food!</div>
        <div className="mt-8 p-6 bg-rose-50 rounded-lg">
          {cartCtx.items.map((cartItem) => (
            <div
              key={cartItem.name}
              className="flex justify-between items-center border-b border-rose-100 py-4 first:pt-0"
            >
              <img
                src={import.meta.env.BASE_URL + cartItem.image.thumbnail}
                alt={cartItem.name}
                className="w-12 rounded-[0.25rem]"
              />
              <div className="grow flex flex-col flex-nowrap truncate mx-4 text-sm">
                <div className="font-semibold truncate">{cartItem.name}</div>
                <div className="mt-2">
                  <span className="text-red-700 font-semibold">
                    {cartItem.quantity}x
                  </span>
                  <span className="text-rose-500 ml-3">
                    @ {currencyFormatter.format(cartItem.price)}
                  </span>
                </div>
              </div>
              <span className="font-semibold">
                {currencyFormatter.format(cartItem.quantity * cartItem.price)}
              </span>
            </div>
          ))}
          <div className="mt-6 flex justify-between items-center">
            <span className="text-sm">Order Total</span>
            <span className="text-xl font-bold">
              {currencyFormatter.format(totalCartPrice)}
            </span>
          </div>
        </div>

        <button
          className="mt-6 w-full flex p-4 bg-red-700 rounded-full text-white font-semibold justify-center hover:bg-red-900"
          onClick={handleCloseCheckout}
        >
          Start New Order
        </button>
      </>
    </Modal>
  );
}
