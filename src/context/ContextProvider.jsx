import { createContext, useState } from "react";

export const StateContext = createContext();

const StateProvider = ({ children }) => {
  const [selectedValue, setSelectedValue] = useState("title");
  const [isLoading, setIsLoading] = useState(true);
  return (
    <StateContext.Provider value={{ selectedValue, setSelectedValue, isLoading, setIsLoading }}>
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
