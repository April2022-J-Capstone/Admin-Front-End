import React, { useState } from 'react';

const AddUserForm = (props) => {
    const initUser = { id: null, userName: '', password: '', first_name: "", last_name: "", email: "", phone_number: "", birthdate: "", veteran_status: '', email_confirmed: '', account_active: ''};

    const [user, setUser] = useState(initUser);
    const [userName, setUserName] = useState("");
    const [password] = useState("12345");
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone_number, setPhoneNumber] = useState("");
    const [birthdate, setBirthDate] = useState("");
    const [veteran_status, setVeteranStatus] = useState(false);
    const [email_confirmed, setEmailConfirmed] = useState(false);
    const [communication_type_id] = useState("");
    const [account_active] = useState("true");


    const handleChange= e => {
        const {name, value} = e.target;
        console.log('e.target.name: ' + name);
        console.log('e.target.value: ' + value);

        // input validation
        let validInputs = 0;
        let button = document.getElementById('submitButton');
        let userNameInput = document.getElementById('userName');
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
            case 'userName':
                setUserName(value);
                break;
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
                setVeteranStatus(true);
                break;
            case 'email_confirmed':
                setEmailConfirmed(true);
                break;
            default:
                console.log("Not a valid input option. Please try again.")
        }



        if(userNameInput.value > 3)
            validInputs++;

        if(first_nameInput.value != '')
            validInputs++;

        if(last_nameInput.value != '')
            validInputs++;

        if(emailInput.value != '')
        for(let s of emailInput.value){
            if(s == '@')
            validInputs++;
        }

        if(birthdateInput.value != '')
            validInputs++;

        if(validInputs > 3){
            console.log('validInputs = green')
            button.style.backgroundColor = "Green";
            button.disabled = false;
        }
        
        console.log('validInputs', validInputs);
        setUser({...user, [name]: value});
    }
    


    const handleSubmit = e => {
        e.preventDefault();
        if(user.userName){
            handleChange(e, props.addUser(user));
        }
        const data = { userName, password, first_name, last_name, email, phone_number, birthdate, veteran_status, email_confirmed, communication_type_id, account_active};
        console.log('data', data);
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            };
            fetch("http://localhost:8081/user/create-user-information", requestOptions)
            .then(response => response.json())
            .then(res => console.log(res));
    
            window.location.reload(false);
    }

    return(
        <form>
            <label>Username</label>
            <input className="u-full-width" id="userName" type="text" value={user.userName} name="userName" placeholder="Enter at least 4 characters" onChange={handleChange} />
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
            <input className="u-full-width" id="veteranCheckBox" type="checkbox" value={user.veteran_status} name="veteran_status" onChange={handleChange}  />
            <label>Check If EmailConfirmed</label>
            <input className="u-full-width" id="emailConfirmedCheckBox" type="checkbox" value={user.email_confirmed} name="email_confirmed" onChange={handleChange} />
            <button className="button-primary" id="submitButton" type="submit" style={{ backgroundColor: 'red' }}  onClick={handleSubmit}  >Add user</button>
        </form>    
    )
}

export default AddUserForm;