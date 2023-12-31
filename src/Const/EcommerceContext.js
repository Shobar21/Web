import React, { createContext, useContext, useState } from "react";

const MyExamContext = createContext();

export const MyExamInformationProvider = ({ children }) => {
  const [products, setproducts] = useState([]);
  return (
    <MyExamContext.Provider
      value={{
        products,
        setproducts,
      }}
    >
      {children}
    </MyExamContext.Provider>
  );
};

export const useExamContext = () => {
  const context = useContext(MyExamContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
};
