import React, { useState, useEffect } from 'react';

const EditUserForm = (props) => {

    useEffect(() => {
        setUser(props.currentUser)
    }, [props])
    

    const [user, setUser] = useState(props.currentUser);
    const [id, setUserId] = useState(null);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");


    const handleChange = e => {
        const {name, value} = e.target;
        setUserId(user.id+1);
        setUserName(e.target.value);
        setPassword('12345');
        setUser({...user, [name]: value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (user.userName) props.updateUser(user);
        const data = { id, userName, password };
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            };
            fetch("http://localhost:8081/user/update-user", requestOptions)
            .then(response => response.json())
            .then(res => console.log(res));
    
            window.location.reload(false);
    }

    return (
        <form>
            <label>UserId</label>
            <input className="u-full-width" type="text" value={user.id+1} name="id" onChange={handleChange} />
            <label>Username</label>
            <input className="u-full-width" type="text" value={user.userName} name="userName" onChange={handleChange} />
            <button className="button-primary" type="submit" onClick={handleSubmit} >Edit user</button>
            <button type="submit" onClick={() => props.setEditing(false)} >Cancel</button>
        </form>
    )
}

export default EditUserForm;