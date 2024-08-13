import { useContext } from "react";
import { CartItemType } from "../../common/types";
import CartContext from "../../store/CartContext";
import { currencyFormatter } from "../../utils/formatting";

export default function CartItem({ cartItem }: { cartItem: CartItemType }) {
  const cartCtx = useContext(CartContext);

  return (
    <div
      key={cartItem.name}
      className="flex justify-between items-center border-b border-rose-100 py-4 first:pt-0"
    >
      <div className="text-sm">
        <div className="font-semibold">{cartItem.name}</div>
        <div className="mt-2">
          <span className="text-red-700 font-semibold">
            {cartItem.quantity}x
          </span>
          <span className="text-rose-500 ml-3">
            @ {currencyFormatter.format(cartItem.price)}
          </span>
          <span className="text-rose-500 font-semibold ml-3">
            {currencyFormatter.format(cartItem.quantity * cartItem.price)}
          </span>
        </div>
      </div>
      <button
        className="group flex justify-center items-center size-[1.125rem] rounded-full border border-rose-400 hover:border-rose-900"
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
            className="group-hover:fill-rose-900"
            fill="#CAAFA7"
            d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
          />
        </svg>
      </button>
    </div>
  );
}
