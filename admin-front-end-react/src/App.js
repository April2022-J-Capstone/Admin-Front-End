import React, { useState, useEffect } from "react";

import UserPanel from "./Panels/UserPanel";
import RestaurantPanel from "./Panels/RestaurantPanel";
import OrderPanel from "./Panels/OrderPanel";

const App = () => {
  const [restaurantView, setRestaurantView] = useState(true);
  const [orderView, setOrderView] = useState(false);
  const [userView, setUserView] = useState(false);

  const handleClick = e => {
    e.preventDefault();
    const {name, value} = e.target;


    setUserView(false);
    setRestaurantView(false);
    setOrderView(false);

    if (name == "user")
      setUserView(true)

    if(name == "restaurant")
      setRestaurantView(true);

    if (name == "order")
      setOrderView(true);




  }

  
  return (
    <div className="container-lg">
      <h1>MegaBytes Admin</h1>
      <div className="navbar navbar-dark">
        <button onClick={handleClick} name="restaurant">Restaurants</button>
        <button onClick={handleClick} name="order">Orders</button>
        <button onClick={handleClick} name="user">Users</button>
      </div>
        { restaurantView ? (<RestaurantPanel></RestaurantPanel>)
            : userView ? (<UserPanel></UserPanel>)
                : (<OrderPanel></OrderPanel>)

        }
    </div>
  );

};

export default App;