import { useContext } from "react";
import { ProductType } from "../../common/types";
import CartContext from "../../store/CartContext";
import { currencyFormatter } from "../../utils/formatting";

export default function Product({ product }: { product: ProductType }) {
  const cartCtx = useContext(CartContext);

  function handleAddToCart(product: ProductType) {
    cartCtx.addItem(product);
  }

  function cartItemCount(product: ProductType) {
    const cartItem = cartCtx.items.find((item) => item.name === product.name);

    return cartItem ? cartItem.quantity : 0;
  }

  return (
    <div key={product.name}>
      <div className="flex flex-col items-center">
        <img
          src={product.image.desktop}
          alt={product.name}
          className="rounded-lg w-max"
        />
        {cartItemCount(product) ? (
          <div className="flex w-40 justify-between p-3 bg-red-700 rounded-full mt-[-1.375rem]">
            <button
              className="group flex justify-center items-center size-[1.125rem] rounded-full border border-white hover:bg-white"
              onClick={() => cartCtx.removeItem(product.name)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="2"
                fill="none"
                viewBox="0 0 10 2"
              >
                <path
                  className="group-hover:fill-red-700"
                  fill="#fff"
                  d="M0 .375h10v1.25H0V.375Z"
                />
              </svg>
            </button>
            <span className="text-white">{cartItemCount(product)}</span>
            <button
              className="group flex justify-center items-center size-[1.125rem] rounded-full border border-white hover:bg-white"
              onClick={() => cartCtx.addItem(product)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                fill="none"
                viewBox="0 0 10 10"
              >
                <path
                  className="group-hover:fill-red-700"
                  fill="#fff"
                  d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
                />
              </svg>
            </button>
          </div>
        ) : (
          <button
            className="flex w-40 justify-center p-3 bg-white border border-rose-400 rounded-full mt-[-1.375rem] hover:text-red-700 hover:border-red-700"
            onClick={() => handleAddToCart(product)}
          >
            <img
              src="/assets/images/icon-add-to-cart.svg"
              alt="Add to Cart"
              className="mr-2"
            />
            <span className="font-semibold">Add to Cart</span>
          </button>
        )}
      </div>
      <div className="mt-4">
        <div className="text-sm text-rose-500">{product.category}</div>
        <div className="font-semibold mt-1">{product.name}</div>
        <div className="text-red-700 font-semibold mt-1">
          {currencyFormatter.format(product.price)}
        </div>
      </div>
    </div>
  );
}
