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
          <div className="lg:grid lg:grid-cols-3 lg:gap-8 max-w-[1440px] mx-auto lg:p-28 md:p-10 p-6">
            <div className="lg:col-span-2">
              <ProductsSection />
            </div>
            <div className="mt-8 lg:mt-0 w-full">
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
