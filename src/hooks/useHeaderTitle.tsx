import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

const HeaderTitleContext = createContext<{
  headerTitle: ReactNode;
  setHeaderTitle: Dispatch<SetStateAction<ReactNode>>;
} | null>(null);

export const HeaderTitleProvider = ({ children }: { children: ReactNode }) => {
  const [headerTitle, setHeaderTitle] = useState<ReactNode>();
  return (
    <HeaderTitleContext.Provider value={{ headerTitle, setHeaderTitle }}>
      {children}
    </HeaderTitleContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useHeaderTitle = () => {
  const context = useContext(HeaderTitleContext);
  if (!context) {
    throw new Error("Header title must be used within a Provider");
  }
  return context;
};
