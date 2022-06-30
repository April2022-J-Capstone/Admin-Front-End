import React from "react";
import { UserDisplayEntry } from "../components";

const UserDisplay = (props) => {
  const usersEmpty = (
    <div>
      <p>No users found</p>
    </div>
  );
  return (
    <div className="d-flex flex-column justify-content-center">
      {
        props.users.length === 0 
          ? usersEmpty : 
          props.users.map(user => (
            <UserDisplayEntry 
            key = {user.userName}
            user = {user}
            editUser = {props.editUser}
            deactivatingUser = {props.deactivatingUser}
            activeState = {user.account_active === "true" ? "Deactivate" : "Activate"}
            />
        ))   
      }
    </div>
  )
}

export default UserDisplay;