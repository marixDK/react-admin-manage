import React from "react";
import { useRoutes } from "react-router-dom";
import defaultRoutes from "./router";

const App: React.FC = () => {
  const element = useRoutes(defaultRoutes);
  return <>{element}</>;
};

export default App;

// import React from "react";
// import logo from "./logo.svg";
// import "./App.scss";
// import { Button } from "antd";

// function App() {
//   return (
//     <div className="App">
//       <Button type="primary">Primary Button</Button>
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
