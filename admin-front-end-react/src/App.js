import React, { useState, useEffect } from "react";

import UserPanel from "./Panels/UserPanel";
import RestaurantPanel from "./Panels/RestaurantPanel";
import OrderPanel from "./Panels/OrderPanel";
import TestPage from "./pages/test-page/TestPage";

const App = () => {
  const [restaurantView, setRestaurantView] = useState(true);
  const [orderView, setOrderView] = useState(false);
  const [userView, setUserView] = useState(false);
  const [testView, setTestView] = useState(false);

  const handleClick = e => {
    e.preventDefault();
    const {name, value} = e.target;


    setUserView(false);
    setRestaurantView(false);
    setOrderView(false);
    setTestView(false)

    if (name == "user")
      setUserView(true)

    if(name == "restaurant")
      setRestaurantView(true);

    if (name == "order")
      setOrderView(true);

    if (name == "test")
      setTestView(true);

  }

  
  return (
    <div className="container-lg">
      <h1>MegaBytes Admin</h1>
      <div className="navbar navbar-dark">
        <button onClick={handleClick} name="restaurant">Restaurants</button>
        <button onClick={handleClick} name="order">Orders</button>
        <button onClick={handleClick} name="test">Test</button>
        <button onClick={handleClick} name="user">Users</button>
      </div>
        { restaurantView ? (<RestaurantPanel></RestaurantPanel>)
            : userView ? (<UserPanel></UserPanel>)
            : orderView ?(<OrderPanel></OrderPanel>)
            : (<TestPage></TestPage>)
        }
    </div>
  );

};

export default App;