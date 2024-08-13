import { createContext, useReducer } from "react";
import {
  CartReducerActionType,
  ProductType,
  CartStateType,
  CartContextType,
} from "../common/types";

const CartContext = createContext<CartContextType>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
});

function cartReducer(state: CartStateType, action: CartReducerActionType) {
  switch (action.type) {
    case "add": {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.name === action.item.name
      );
      const updatedItems = [...state.items];
      if (existingCartItemIndex > -1) {
        const existingItem = state.items[existingCartItemIndex];
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems.push({ ...action.item, quantity: 1 });
      }

      return { ...state, items: updatedItems };
    }
    case "remove": {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.name === action.id
      );
      const updatedItems = [...state.items];

      if (existingCartItemIndex > -1) {
        const existingCartItem = state.items[existingCartItemIndex];

        if (existingCartItem.quantity === 1) {
          updatedItems.splice(existingCartItemIndex, 1);
        } else {
          const updatedItem = {
            ...existingCartItem,
            quantity: existingCartItem.quantity - 1,
          };
          updatedItems[existingCartItemIndex] = updatedItem;
        }
      }
      return { ...state, items: updatedItems };
    }
    case "clear": {
      return { ...state, items: [] };
    }
  }
}

export function CartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

  function addItem(item: ProductType) {
    dispatchCartAction({ type: "add", item });
  }

  function removeItem(id: string) {
    dispatchCartAction({ type: "remove", id });
  }

  function clearCart() {
    dispatchCartAction({ type: "clear" });
  }

  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
    clearCart,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartContext;
