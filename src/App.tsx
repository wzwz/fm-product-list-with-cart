import "./App.css";
import CartSection from "./components/Cart/CartSection";
import CheckoutModal from "./components/Checkout/CheckoutModal";
import ProductsSection from "./components/Products/ProductsSection";
import { CartContextProvider } from "./store/CartContext";
import { UserProgressContextProvider } from "./store/UserProgressContext";

function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <div className="bg-rose-50 min-h-screen leading-tight">
          <div className="grid grid-cols-3 gap-8 max-w-[1440px] mx-auto p-28">
            <div className="col-span-2">
              <ProductsSection />
            </div>
            <div className="">
              <CartSection />
            </div>
          </div>
        </div>
        <CheckoutModal />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
