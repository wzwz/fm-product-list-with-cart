import { useContext } from "react";
import CartContext from "../../store/CartContext";
import { currencyFormatter } from "../../utils/formatting";
import UserProgressContext from "../../store/UserProgressContext";

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
        <h2 className="text-xl font-bold text-[#C73B0F]">
          Your Cart ({totalCartItems})
        </h2>
        {cartCtx.items.length === 0 ? (
          <div className="flex flex-col mt-6 p-4 items-center">
            <img
              src="/assets/images/illustration-empty-cart.svg"
              alt="Your cart is empty!"
            />
            <p className="mt-4 text-sm text-[#87635A]">
              Your added items will appear
            </p>
          </div>
        ) : (
          <>
            <div className="mt-6">
              {cartCtx.items.map((cartItem) => (
                <div
                  key={cartItem.name}
                  className="flex justify-between items-center border-b border-[#F5EEEC] py-4 first:pt-0"
                >
                  <div className="text-sm">
                    <div className="font-semibold">{cartItem.name}</div>
                    <div className="mt-2">
                      <span className="text-[#C73B0F] font-semibold">
                        {cartItem.quantity}x
                      </span>
                      <span className="text-[#87635A] ml-3">
                        @ {currencyFormatter.format(cartItem.price)}
                      </span>
                      <span className="text-[#87635A] font-semibold ml-3">
                        {currencyFormatter.format(
                          cartItem.quantity * cartItem.price
                        )}
                      </span>
                    </div>
                  </div>
                  <button
                    className="group flex justify-center items-center size-[1.125rem] rounded-full border border-[#AD8A85] hover:border-[#260F08]"
                    onClick={() => cartCtx.removeItem(cartItem.name)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                      fill="none"
                      viewBox="0 0 10 10"
                    >
                      <path
                        className="group-hover:fill-[#260F08]"
                        fill="#CAAFA7"
                        d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-between items-center">
              <span className="text-sm">Order Total</span>
              <span className="text-xl font-bold">
                {currencyFormatter.format(totalCartPrice)}
              </span>
            </div>
            <div className="mt-6 bg-[#FCF8F6] p-4 text-sm text flex justify-center items-center">
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
              className="mt-6 w-full flex p-4 bg-[#C73B0F] rounded-full text-white font-semibold justify-center hover:bg-[#702108]"
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
