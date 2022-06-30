import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { AddUserForm, EditUserForm, DeactivateUserForm } from "../forms";
import { NavButton, LogoutButton, SendConfirmationButton } from "../components";
import { GetUserInformation, useCheckAuth } from "../hooks";
import UserDisplay from "../tables/UserDisplay";

const UserPage = () => {
  const checkAuth = useCheckAuth();
  const navigate = useNavigate();
  const [data, loading] = GetUserInformation(0);
  const [users, setUsers] = useState(null);
  
  useEffect(_ => {
    checkAuth({}, false)
        .catch(_ => navigate('/login'));
  }, [ checkAuth, navigate ]);

  useEffect(() => {
    if(data) {
      const formattedUsers = data.map((obj, i) => {
        return {
          id: obj.users_Id,
          enabled: ''+ obj.enabled,
          userName: obj.userName,
          first_name: obj.first_name,
          last_name: obj.last_name,
          email: obj.email,
          phone_number: obj.phone_number,
          birthdate: obj.birthdate,
          veteran_status: '' + obj.veteran_status,
          email_confirmed: '' + obj.email_confirmed,
          account_active: '' + obj.account_active,
        };
      });
      setUsers(formattedUsers);
    }
  }, [data]);


  const addUser = (user) => {
    if(users.length !== 0){
      console.log("we have users");
      user.id = users[users.length-1].id + 1; 
    } else {
      console.log("no users");
      user.id = 1;
    }

    for(const key in user){
      console.log(`key(${key}): value(${user[key]})`);
    }

    let vetStatus = false;

    const formattedUser = {
        id: user.id,
        enabled: 'true',
        userName: user.userName,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        phone_number: user.phone_number,
        birthdate: user.birthdate,
        veteran_status: vetStatus,
        email_confirmed: 'false',
        account_active: 'true',
      };

    console.log('formattedUser obj');
    console.log(formattedUser);

    setUsers([...users, formattedUser]);

  };

  const [editing, setEditing] = useState(false);
  const [deactivating, setDeactivating] = useState(false);
  const initialUser = { id: null, userName: "", enabled:"",  first_name: "", last_name: "", email: "", phone_number: "", birth_date: "", veteranStatus: "", email_confirmed: "", account_active: "" };
  const [currentUser, setCurrentUser] = useState(initialUser);

  const editUser = (id, user) => {
    setEditing(true);
    setCurrentUser(user);
  }

  const deactivatingUser = (id, user) => {
    setDeactivating(true);
    setCurrentUser(user);
  }

  const updateDeactivateUser = (oldUser) => {
    setUsers(
      users.map(user => (user.id === currentUser.id ? oldUser : user))
      );
      setCurrentUser(initialUser);
      setDeactivating(false);
  }

  const updateUser = (newUser) => {
    setUsers(
      users.map(user => (user.id === currentUser.id ? newUser : user))
      );
      setCurrentUser(initialUser);
      setEditing(false);
  };

  return (
    <div>
      <div className="navbar navbar-dark">
        <NavButton link="/restaurant" name="restaurant">Restaurants</NavButton>
        <NavButton link="/user" name="user">Users</NavButton>
        <LogoutButton onLogout={_ => navigate('/login')} />
        <SendConfirmationButton onSend={_ => console.log("Successfully sent confirmation!") } />
      </div>
      <h1>MegaBytes Admin</h1>
      <div className="row">
        <div className="col-md-3">
          {deactivating ? (
            <div>
              <h2>Set Active</h2>
              <DeactivateUserForm
                currentUser={currentUser}
                setDeactivating={setDeactivating}
                updateDeactivateUser={updateDeactivateUser}
              />
            </div>
          ) : editing ? ( 
            <div>
              <h2>Edit user</h2>
              <EditUserForm
                currentUser={currentUser}
                setEditing={setEditing}
                updateUser={updateUser}
              />
            </div>
          ): (
            <div>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        {loading || !users ? (
          <div className="col-md-9">
            <p>Loading...</p>
          </div>
        ): (
        <div className="col-md-9">
          <h2>View users</h2>
          <UserDisplay
            users={users}
            deactivatingUser={deactivatingUser}
            editUser={editUser}
          />
        </div>
        )}
      </div>
    </div>
  );
};

export default UserPage;