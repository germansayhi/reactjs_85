import React from "react";

import Menu from "./Components/Menu";
import { route } from "./Router/route";

function App() {
  return (
    <div className="container">
      <Menu />
      {route}
    </div>
  );
}

export default App;
