import React, { useState } from 'react';

const AddUserForm = (props) => {
    const initUser = { id: null, userName: '', password: '' };

    const [user, setUser] = useState(initUser);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");


    const handleChange = e => {
        const {name, value} = e.target;
        setUserName(e.target.value);
        setPassword('12345');
        setUser({...user, [name]: value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(user.userName){
            handleChange(e, props.addUser(user));
        }
        const data = { userName, password};
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            };
            fetch("http://localhost:8081/user/create-user", requestOptions)
            .then(response => response.json())
            .then(res => console.log(res));
    
            window.location.reload(false);
    }

    return(
        <form>
            <label>Username</label>
            <input className="u-full-width" type="text" value={user.userName} name="userName" onChange={handleChange} />
            <button className="button-primary" type="submit" onClick={handleSubmit} >Add user</button>
        </form>    
    )
}

export default AddUserForm;