import React, { useState, useEffect } from 'react';

const EditUserForm = (props) => {

    useEffect(() => {
        setUser(props.currentUser)
    }, [props])
    

    const [user, setUser] = useState(props.currentUser);
    const [users_Id ] = useState(props.currentUser.id);
    const [userName, setUserName] = useState(props.currentUser.userName);
    const [first_name, setFirstName] = useState(props.currentUser.first_name);
    const [last_name, setLastName] = useState(props.currentUser.last_name);
    const [email, setEmail] = useState(props.currentUser.email);
    const [phone_number, setPhoneNumber] = useState(props.currentUser.phone_number);
    const [birthdate, setBirthDate] = useState(props.currentUser.birthdate);
    const [veteran_status, setVeteranStatus] = useState(props.currentUser.veteran_status);
    const [email_confirmed, setEmailConfirmed] = useState(props.currentUser.email_confirmed);
    const [communication_type_id] = useState(props.currentUser.communication_type_id);


    const handleChange = e => {
        const {name, value} = e.target;

        console.log('e.target.name: ' + name);
        console.log('e.target.value: ' + value);

        // input validation
        let button = document.getElementById('submitButton');
        let first_nameInput = document.getElementById('first_name');
        let last_nameInput = document.getElementById('first_name');
        let emailInput = document.getElementById('email');
        // let phone_numberInput = document.getElementById('phone_number');
        let birthdateInput = document.getElementById('birthdate');
        let veteranCheckbox = document.getElementById('veteranCheckBox');
        console.log(veteranCheckbox);
        let emailConfirmedCheckBox = document.getElementById('emailConfirmedCheckBox');
        console.log(emailConfirmedCheckBox);




        switch(name){
            case 'first_name':
                setFirstName(value);
                break;
            case 'last_name':
                setLastName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'phone_number':
                setPhoneNumber(value);
                break;
            case 'birthdate':
                setBirthDate(value);
                break;
            case 'veteran_status':
                setVeteranStatus(value);
                break;
            case 'email_confirmed':
                setEmailConfirmed(value);
                break;
            default:
                console.log("Not a valid input option. Please try again.")
        }


        setUser({...user, [name]: value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (user.userName) props.updateUser(user);
        const data = { users_Id, first_name, last_name, email, phone_number, birthdate, veteran_status, email_confirmed};
        console.log('data', data);
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            };
            fetch("http://localhost:8081/user/update-user-information", requestOptions)
            .then(response => response.json())
            .then(res => console.log(res));
    
            window.location.reload(false);
    }

    return (
        <form>
            <label>Username(read only)</label>
            <input className="u-full-width" id="userName" type="text" value={user.userName} name="userName"  readOnly />
            <label>FirstName</label>
            <input className="u-full-width" id="first_name" type="text" value={user.first_name} name="first_name" placeholder = "First Name" onChange={handleChange} />
            <label>LastName</label>
            <input className="u-full-width" id="last_name" type="text" value={user.last_name} name="last_name" placeholder = "Last Name"  onChange={handleChange} />
            <label>Email</label>
            <input className="u-full-width" id="email" type="email" value={user.email} name="email" placeholder = "user@mail.com"  onChange={handleChange} />
            <label>PhoneNumber</label>
            <input className="u-full-width" id="phone_number" type="text"  value={user.phone_number}  name="phone_number" placeholder = "###-###-####" onChange={handleChange} />
            <label>BirthDate</label>
            <input className="u-full-width" id="birthdate" type="text" value={user.birthdate} name="birthdate" placeholder = "YYYY-MM-DD"  onChange={handleChange} />
            <label>Check If Veteran</label>
            { veteran_status == "true"  ? (
                <p>
                <input className="u-full-width" id="veteranCheckBox" type="checkbox"  value={user.veteran_status} name="veteran_status" onChange={handleChange}  checked />
                </p>
            ): (
                <p>
                <input className="u-full-width" id="veteranCheckBox" type="checkbox"  value={user.veteran_status} name="veteran_status" onChange={handleChange}  />
                </p>
            )}
            <label>Check If EmailConfirmed</label>
            { email_confirmed == "true" ? (
                <p>
                    <input className="u-full-width" id="emailConfirmedCheckBox" type="checkbox" value={user.email_confirmed} name="email_confirmed" onChange={handleChange} checked />
                </p>
            ): (
                <p>
                    <input className="u-full-width" id="emailConfirmedCheckBox" type="checkbox" value={user.email_confirmed} name="email_confirmed" onChange={handleChange} />
                </p>
            )}
            <button className="button-primary" id="submitButton" type="submit" onClick={handleSubmit} >Save user</button>
            <button type="submit" onClick={() => props.setEditing(false)} >Cancel</button>
        </form>
    )
}

export default EditUserForm;