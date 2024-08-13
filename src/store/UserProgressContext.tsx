import { createContext, useState } from "react";
import { UserProgressContextType } from "../common/types";

const UserProgressContext = createContext<UserProgressContextType>({
  progress: "", // 'checkout'
  showCheckout: () => {},
  hideCheckout: () => {},
});

export function UserProgressContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [userProgress, setUserProgress] = useState<"" | "checkout">("");

  function showCheckout() {
    setUserProgress("checkout");
  }

  function hideCheckout() {
    setUserProgress("");
  }

  const userProgressCtx = {
    progress: userProgress,
    showCheckout,
    hideCheckout,
  };

  return (
    <UserProgressContext.Provider value={userProgressCtx}>
      {children}
    </UserProgressContext.Provider>
  );
}

export default UserProgressContext;
