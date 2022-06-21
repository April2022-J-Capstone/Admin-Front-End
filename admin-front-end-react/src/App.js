import React, { useState, useEffect } from "react";

import UserPanel from "./Panels/UserPanel";
import RestaurantPanel from "./Panels/RestaurantPanel";

const App = () => {
  
  return (
    <div className="container-lg">
      <h1>MegaBytes Admin</h1>
      <div className="navbar navbar-dark">

      </div>
      <RestaurantPanel></RestaurantPanel>
    </div>
  );

};

export default App;