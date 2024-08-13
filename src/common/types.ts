import { ReactElement } from "react";

export type ProductImageType = {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface ProductType {
  image: ProductImageType;
  name: string;
  category: string;
  price: number;
}

export interface CartItemType extends ProductType {
  quantity: number;
}

export type CartStateType = {
  items: CartItemType[],
}

export type CartContextType = {
  items: CartItemType[];
  addItem: (item: ProductType) => void;
  removeItem: (name: string) => void;
  clearCart: () => void;
}

export type CartReducerActionType = {
  type: "add";
  item: ProductType;
} | {
  type: "remove";
  id: string
} | {
  type: "clear";
}

export type UserProgressContextType = {
  progress: "" | "checkout";
  showCheckout: () => void;
  hideCheckout: () => void;
}

export interface ModalProps {
  children: ReactElement;
   open: boolean;
    onClose: () => void;
     className: string;
}