import React, { useState, useEffect } from 'react';

const DeactivateUserForm = (props) => {

    useEffect(() => {
        console.log("use effect")
        setUser(props.currentUser)
        if(props.currentUser.account_active == "true"){
            console.log("account_active = true")
            setActiveState("Deactivate")
        } else {
            console.log("account_active = false")
            setActiveState("Activate")
        }
    }, [props])
    

    const [user, setUser] = useState(props.currentUser);
    const [users_Id ] = useState(props.currentUser.id);
    const [userName, setUserName] = useState(props.currentUser.userName);
    const [enabled, setEnabled] = useState(props.currentUser.enabled );
    const [account_active, setAccountActive] = useState(props.currentUser.account_active)
    const [confirmUserName, setConfirmUserName] = useState("");
    const [activeState, setActiveState] = useState("");

    const handleChange = e => {
        const {name, value} = e.target;

        console.log('e.target.name: ' + name);
        console.log('e.target.value: ' + value);

        let button = document.getElementById('submitButton');
        let userNameInput = document.getElementById('userName');
        console.log('userNameInput', userNameInput);
        let deactivateUserInput = document.getElementById('deactivateUser');
        console.log('deactivateUserInput', deactivateUserInput);
        let activateUserInput = document.getElementById('activateUser');
        console.log('activateUser', activateUserInput);


        switch(name){
            case 'deactivateUser':
                setEnabled(false);
                setAccountActive(false);
                setConfirmUserName(value);
                console.log("setting to false");
                if(userNameInput.value == deactivateUserInput.value){
                    console.log('match = green')
                    button.style.backgroundColor = "Green";
                    button.disabled = false;
                }
                break;
            case 'activateUser':
                setEnabled(true);
                setAccountActive(true);
                setConfirmUserName(value);
                console.log("setting to true");
                if(userNameInput.value == activateUserInput.value){
                    console.log('match = green')
                    button.style.backgroundColor = "Green";
                    button.disabled = false;
                }
                break;
            default:
                console.log("Your input is not valid. Please try again.")
        }

        // if(deactivateUserInput.value != ''){
        //     if(userNameInput.value == deactivateUserInput.value){
        //         console.log('match = green')
        //         button.style.backgroundColor = "Green";
        //         button.disabled = false;
        //     }
        // }
        // if(activateUserInput.value != ''){
        //     if(userNameInput.value == activateUserInput.value){
        //         console.log('match = green')
        //         button.style.backgroundColor = "Green";
        //         button.disabled = false;
        //     }
        // }
    


        setUser({...user, [name]: value});

    }

    const handleSubmit = e => {
        e.preventDefault();
        if (user.userName) props.updateDeactivateUser(user);
        const data = { users_Id, userName, enabled, account_active };
        console.log('change user account status', data);
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            };
            fetch("http://localhost:8081/user/set-user-active-information", requestOptions)
            .then(response => response.json())
            .then(res => console.log(res));
    
            // window.location.reload(false);
    }

    return (
        
        <form>
            <label>UserId(read only)</label>
            <input className="u-full-width" type="text" value={user.id} name="id" readOnly />
            <label>UserName(read only)</label>
            <input className="u-full-width" id="userName" type="text" value={user.userName} name="userName" readOnly />
            {activeState == "Deactivate" ? (
                <div>
                    <label>Type UserName To Deactivate</label>
                    <input className="u-full-width" id ="deactivateUser" type="text" value={confirmUserName} name="deactivateUser" placeholder="Type Username" onChange={handleChange} />
                </div>
            ): (
                <div>
                    <label>Type UserName To Activate</label>
                    <input className="u-full-width" id ="activateUser" type="text" value={confirmUserName} name="activateUser" placeholder="Type Username" onChange={handleChange} />
                </div>
            )}
            <button className="button-primary" id="submitButton" type="submit" onClick={handleSubmit} style={{ backgroundColor: 'red' }}  >{activeState} User</button>
            <button type="submit" onClick={() => props.setDeactivating(false)} >Cancel</button>
        </form>
    )
}

export default DeactivateUserForm;