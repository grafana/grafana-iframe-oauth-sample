import React from "react";
import { Route } from "react-router-dom";

import Home from "./pages/home";
import Restricted from "./pages/restricted";

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/restricted", name: "Restricted", Component: Restricted },
];

const App: React.FC = () => {
  return (
    <div>
      {routes.map(({ path, Component }) => (
        <Route key={path} exact path={path}>
          <Component />
        </Route>
      ))}
    </div>
  );
};

export default App;
