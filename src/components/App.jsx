import React from "react";

import Login from "./Login";
import Register from "./Register";

var isloggedIn = false;

function App() {
  return (
    <div className="container">
      {isloggedIn === true ? <Login /> : <Register />}
    </div>
  );
}

export default App;
