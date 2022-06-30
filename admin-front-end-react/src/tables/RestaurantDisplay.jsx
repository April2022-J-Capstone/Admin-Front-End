import React from "react";
import { RestaurantDisplayEntry } from "../components";

const RestaurantDisplay = (props) => {
  return (
    <div className="d-flex flex-column justify-content-center">
      {
        props.restaurants.length > 0 ? (
          props.restaurants.map (restaurant => {
            return (
              <RestaurantDisplayEntry 
              key = {restaurant.id}
              restaurant = {restaurant}
              editRestaurant = {props.editRestaurant}
              />
            )
          })
        ) : (
          <div>
            <p>No restaurants found</p>
          </div>
        )   
      }
    </div>
  )
}

export default RestaurantDisplay;