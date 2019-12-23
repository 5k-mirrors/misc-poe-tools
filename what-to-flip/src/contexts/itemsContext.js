import React from "react";
import { useEnsureProvider } from "./utils";

const ItemsContext = React.createContext();

export const useItems = () => {
  return useEnsureProvider(ItemsContext);
};

export const ItemsProvider = props => {
  const [items, setItems] = React.useState({});

  const value = React.useMemo(() => [items, setItems], [items]);

  return <ItemsContext.Provider value={value} {...props} />;
};
