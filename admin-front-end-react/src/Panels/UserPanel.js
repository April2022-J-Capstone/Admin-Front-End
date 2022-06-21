import React, { useState, useEffect } from "react";
import UserTable from "../tables/UserTable";
import AddUserForm from "../forms/AddUserForm";
import EditUserForm from "../forms/EditUserForm";
import DeactivateUserForm from "../forms/DeactivateUserForm";


import { GetUserInformation } from "../hooks";

const UserPanel = () => {
  const [data, loading] = GetUserInformation(0);
  const [users, setUsers] = useState(null);

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
    user.id = users[users.length-1].id + 1;
    setUsers([...users, user]);
  };

  // const deactivateUser = (id) => {
  //   setUsers(users.filter((user) => user.id !== id));
  // };

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
    <div className="row">
      <div className="col-md-5">
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
        <div className="col-md-7">
          <p>Loading...</p>
        </div>
      ): (
      <div className="col-md-7">
        <h2>View users</h2>
        <UserTable
          users={users}
          deactivatingUser={deactivatingUser}
          editUser={editUser}
        />
      </div>
      )}
    </div>
  );
};

export default UserPanel;