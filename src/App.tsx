import React from "react";
import { useRoutes } from "react-router-dom";
import defaultRoutes from "./router";

const App: React.FC = () => {
  const element = useRoutes(defaultRoutes);
  console.log(element);
  return <>{element}</>;
};

export default App;
