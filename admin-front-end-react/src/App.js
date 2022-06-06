import React, { useState, useEffect } from "react";
import UserTable from "./tables/UserTable";
import AddUserForm from "./forms/AddUserForm";
import EditUserForm from "./forms/EditUserForm";

import { useAsyncRequest } from "./hooks";

const App = () => {
  const [data, loading] = useAsyncRequest(0);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    if(data) {
      const formattedUsers = data.map((obj, i) => {
        return {
          id: i,
          userName: obj.userName,
        };
      });
      setUsers(formattedUsers);
    }
  }, [data]);


  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const [editing, setEditing] = useState(false);

  const initialUser = { id: null,  userName: "" };

  const [currentUser, setCurrentUser] = useState(initialUser);

  const editUser = (id, user) => {
    setEditing(true);
    setCurrentUser(user);
  }

  const updateUser = (newUser) => {
    setUsers(
      users.map(user => (user.id === currentUser.id ? newUser : user))
      );
      setCurrentUser(initialUser);
      setEditing(false);
  };


  return (
    <div className="container">
      <h1>Mega Bytes Admin</h1>
      <div className="row">
        <div className="five columns">
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditUserForm
                currentUser={currentUser}
                setEditing={setEditing}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        {loading || !users ? (
          <p>Loading...</p>
        ): (
        <div className="seven columns">
          <h2>View users</h2>
          <UserTable
            users={users}
            deleteUser={deleteUser}
            editUser={editUser}
          />
        </div>
        )}
      </div>
    </div>
  );
};

export default App;