import { useContext } from "react";
import CartContext from "../../store/CartContext";
import { currencyFormatter } from "../../utils/formatting";
import UserProgressContext from "../../store/UserProgressContext";
import Modal from "../ui/Modal";

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
      className="rounded-lg p-10 w-[600px]"
      open={userProgressCtx.progress === "checkout"}
      onClose={handleCloseCheckout}
    >
      <>
        <img
          src="/assets/images/icon-order-confirmed.svg"
          alt="Order Confirmed"
        />
        <h1 className="mt-6 text-2xl font-bold">Order Confirmed</h1>
        <div className="mt-2 text-[#87635A]">We hope you enjoy your food!</div>
        <div className="mt-8 p-6 bg-[#FCF8F6]">
          {cartCtx.items.map((cartItem) => (
            <div
              key={cartItem.name}
              className="flex justify-between items-center border-b border-[#F5EEEC] py-4 first:pt-0"
            >
              <img
                src={cartItem.image.thumbnail}
                alt={cartItem.name}
                className="w-12 rounded-md"
              />
              <div className="grow mx-4 text-sm">
                <div className="font-semibold">{cartItem.name}</div>
                <div className="mt-2">
                  <span className="text-[#C73B0F] font-semibold">
                    {cartItem.quantity}x
                  </span>
                  <span className="text-[#87635A] ml-3">
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
          className="mt-6 w-full flex p-4 bg-[#C73B0F] rounded-full text-white font-semibold justify-center hover:bg-[#702108]"
          onClick={handleCloseCheckout}
        >
          Start New Order
        </button>
      </>
    </Modal>
  );
}
