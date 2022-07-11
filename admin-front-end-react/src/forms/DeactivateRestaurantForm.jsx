import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getUrl } from '../utils';

const DeactivateRestaurantForm = (props) => {

    useEffect(() => {
        console.log("use effect")
        setRestaurant(props.currentRestaurant)
        if(props.currentRestaurant.enabled === "true"){
            console.log("enabled = true")
            setActiveState("Deactivate")
        } else {
            console.log("enabled = false")
            setActiveState("Activate")
        }
    }, [props])
    

    const [restaurant, setRestaurant] = useState(props.currentRestaurant);
    const [restauarant_id ] = useState(props.currentRestaurant.id);
    const [name, setName] = useState(props.currentRestaurant.name);
    const [enabled, setEnabled] = useState(props.currentRestaurant.enabled );
    const [confirmName, setConfirmName] = useState("");
    const [activeState, setActiveState] = useState("");
    const [disabledStatus, setDisabledStatus] = useState(true);

    const handleChange = e => {
        const {name, value} = e.target;

        console.log('e.target.name: ' + name);
        console.log('e.target.value: ' + value);

        let button = document.getElementById('submitButton');
        let nameInput = document.getElementById('name');
        console.log('nameInput', nameInput);
        let deactivateRestaurantInput = document.getElementById('deactivateRestaurant');
        console.log('deactivateRestaurantInput', deactivateRestaurantInput);
        let activateRestaurantInput = document.getElementById('activateRestaurant');
        console.log('activateRestaurant', activateRestaurantInput);


        switch(name){
            case 'deactivateRestaurant':
                setEnabled(false);
                setConfirmName(value);
                console.log("setting to false");
                if(nameInput.value === deactivateRestaurantInput.value){
                  button.style.opacity = "1";
                  setDisabledStatus(false);
                }
                break;
            case 'activateRestaurant':
                setEnabled(true);
                setConfirmName(value);
                console.log("setting to true");
                if(nameInput.value === activateRestaurantInput.value){
                  button.style.opacity = "1";
                  setDisabledStatus(false);
                }
                break;
            default:
                console.log("Your input is not valid. Please try again.")
        }

        setRestaurant({...restaurant, [name]: value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (restaurant.name) props.updateDeactivateRestaurant(restaurant);
        const data = { restaurant_id: restauarant_id, name: name, enabled };
        console.log('change restaurant status', data);

        let path = "";

        if (enabled) {
            path = "/restaurant-service/restaurant/enable/" + restauarant_id;
        }
        else {
            path = "/restaurant-service/restaurant/disable/" + restauarant_id;
        }
        
        console.log(path);
        axios
            .put(getUrl(path), {
                id: data.restaurant_id,
                name: data.name,
                enabled: data.enabled,
            });

        //window.location.reload();
    }

    return (
        
        <form>
             <label>Restaurant ID (read only)</label>
            <input className="u-full-width" type="text" value={restaurant.id} name="id" readOnly />
            <label>Name (read only)</label>
            <input className="u-full-width" id="name" type="text" value={restaurant.name} name="name" readOnly />
            {activeState === "Deactivate" ? (
                <div>
                    <label>Retype name To Deactivate</label>
                    <input className="u-full-width" id ="deactivateRestaurant" type="text" value={confirmName} name="deactivateRestaurant" placeholder="Type Name" onChange={handleChange} />
                </div>
            ): (
                <div>
                    <label>Retype name To Activate</label>
                    <input className="u-full-width" id ="activateRestaurant" type="text" value={confirmName} name="activateRestaurant" placeholder="Type Name" onChange={handleChange} />
                </div>
            )}
            <div className='d-flex'>
              <button className="button-primary ps-2 pe-2" id="submitButton" type="submit" onClick={handleSubmit}  style={{ opacity: 0.2 }} disabled={disabledStatus} >{activeState} Restaurant</button>
              <div className='flex-fill'></div>
              <button type="submit"  onClick={() => props.setDeactivating(false)} >Cancel</button>
            </div>
        </form>
    )
}

export default DeactivateRestaurantForm;